'use strict';
var myConfig = require('./myConfig');

var server = require('http').createServer(),
  url = require('url'),
  bodyParser = require('body-parser'),
  mysql = require('mysql'),
  express = require('express'),
  app = express(),
  port = myConfig.SERVER_PORT;

// used to fin the IP-address of  the server

var os = require('os');
var ifaces = os.networkInterfaces();
var ipAddress;

// This object holds the information for the database connection
var dbConnection = mysql.createConnection({
  host: myConfig.DB_HOST,
  user: myConfig.DB_USER,
  password: myConfig.DB_PASSWORD,
  database: myConfig.DB_NAME
});

// go through all network interfaces and print IP addresses
Object.keys(ifaces).forEach(function(ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function(iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
      ipAddress = iface.address;
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
      ipAddress = iface.address;
    }
    ++alias;
  });
});

// these is the data model as stored in the MySQL Database
// Keys must correspond to the table names in the database
// and to the arduino header file JSONKeys.h

var dbDataModel = myConfig.dataModel;

// set up a connection the the mySQL database
dbConnection.connect(function(err) {
  if (!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... " + err);
  }
});

function storeSensorValueInDB(value, msg, runNumber, runDescription) {
  var timeStamp = new Date();
  // console.log('Storing Data');
  // console.log(temps);

  // console.log(tempValues);
  dbDataModel.time = timeStamp;
  dbDataModel.num = 1;
  dbDataModel.message = msg;
  dbDataModel.pressure = value;
  dbDataModel.runNumber = runNumber;
  dbDataModel.runDescription = runDescription;


  dbConnection.query('INSERT into sensorvalues Set ?', dbDataModel, function(err, result) {
    if (err)
      console.log(err);
  })

};

var router = express.Router();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// REST API
router.post("/sensorvalues", function(req, res) {
  console.log(req.body);
  try {
    var queryString = 'SELECT ' +
      ' time,  ' +
      ' num, ' +
      ' pressure, ' +
      ' runNumber, ' +
      ' runDescription ' +
      ' FROM SensorValues ' + // note that is the name of the SQL table as defined in CreateSchema.sql
      ' WHERE runNumber =' + req.body.runNumber + ' ' +
      'AND +time BETWEEN \'' + req.body.start + '\'' +
      ' AND \'' + req.body.end + '\'';
    console.log(queryString);
  } catch (err) {
    console.log("wrong syntax in clients query in html body");
    return;
  }

  dbConnection.query(queryString, function(err, rows, fields) {
    if (!err) {
      res.status(200).json({
        status: 'success',
        data: rows
      });
    } else {
      res.status(500).json({
        status: 'error',
        error: "Internal server error"
      });
      console.log('Error while performing Query.' + err);
    }

  });

  console.log(req.body.start);
});

router.get("/sensorvalues", function(req, res) {
  dbConnection.query('SELECT * from SensorValues ', function(err, rows, fields) {

    if (!err) {
      // console.log('Query result: ', rows);
      // res.setHeader('Content-Type', "aplication/json");

      res.status(200).json({
        status: 'success',
        data: rows
      });
      // res.end('this is the query result');
    } else {
      res.status(500).json({
        status: 'error',
        error: "Internal server error"
      });
      console.log('Error while performing Query.' + err);
    }
  });
});

router.route("/sensorvalue")
  .post(function(req, res) {
    let pressure = req.body.pressure;
    let message = req.body.msg;
    let runNumber = req.body.runNumber;
    let runDescription = req.body.runDescription;
    console.log(req.body);
    storeSensorValueInDB(pressure, message, runNumber, runDescription);
    try {
      storeSensorValueInDB(pressure, message, runNumber, runDescription);
      res.status(200).json({
        status: 'success',
        message: 'Sensor value stored'
      });
      // console.log("storing Sensor Value");
    } catch (err) {
      res.status(500).json({
        status: 'error',
        error: "Internal server error"
      });
      console.log("Error: sensorValue post: could not store sensor value in DB");
      return;
    }
  });

router.route("/runs")
  .get(function(req, res) {
    dbConnection.query('SELECT DISTINCT runnumber, rundescription from SensorValues ',
      function(err, rows, fields) {

        if (!err) {
          // console.log('Query result: ', rows);
          // res.setHeader('Content-Type', "aplication/json");

          res.status(200).json({
            status: 'success',
            data: rows
          });
          // res.end('this is the query result');
        } else {
          res.status(500).json({
            status: 'error',
            error: "Internal server error"
          });
          console.log('Error while performing Query.' + err);
        }
      })
  });

router.route("/lastrunnumber")
  .get(function(req, res) {
    dbConnection.query('SELECT MAX(runnumber) from SensorValues ',
      function(err, rows, fields) {

        if (!err) {
          // console.log('Query result: ', rows);
          // res.setHeader('Content-Type', "aplication/json");

          res.status(200).json({
            status: 'success',
            data: (rows[0])['MAX(runnumber)']
          });
          console.log(rows);
          // res.end('this is the query result');
        } else {
          res.status(500).json({
            status: 'error',
            error: "Internal server error"
          });
          console.log('Error while performing Query.' + err);
        }
      })
  });

router.route("/serveripaddress")
  .get(function(req, res) {
    res.status(200).json({
      status: 'success',
      data: ipAddress
    })
  });
// Register the routes
// the REST api will be prefixed with /api
app.use('/api', router);

// the angular client uses the public directory.
// The node js server does not only provide a REST api but also
// serves the angular application
app.use(express.static('../GasSensor2/dist'));
app.use(redirectunmatched);

function redirectunmatched(request, response) {
  // console.log(request);
  response.redirect("/index.html");
}

server.on('request', app);
server.listen(port, function() {
  console.log('Listening on ' + server.address().port);

});
