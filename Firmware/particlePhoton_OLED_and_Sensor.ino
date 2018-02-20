// This #include statement was automatically added by the Particle IDE.
#include <Adafruit_SSD1306.h>


/*****************************************************************************
Particle Maker Kit Tutorial #2: Next Bus Alert

This tutorial uses a Particle Photon and the OLED screen from the Particle
Maker Kit. It uses a webhook to retrieve bus prediction times from the
NextBus Public XML feed, which must be set up first along with the webhook.
See http://docs.particle.io/tutorials/topics/maker-kit to learn how!

NOTE: This code example requires the Adafruit_SSD1306 library to be included,
so make sure to add it via the Libraries tab in the left sidebar.
******************************************************************************/

// use hardware SPI
#define OLED_DC     D3
#define OLED_CS     D4
#define OLED_RESET  D5
// OLED_D0 A3
// OLED_D1 A5
Adafruit_SSD1306 display(OLED_DC, OLED_RESET, OLED_CS);

String displayMessage = "Hi there";

// curl https://api.particle.io/v1/devices/260056001351353432393433/setMessage -d args="Nix" -d access_token=d4ba726eea679aaa23d03dc3edba6ece90d4f9d0

int  x, minX; // variables for scrolling code
int analogValue; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the sensor.
int motionSensorValue; // trigger input from the motion sensor

int sensorPort = A0; // This is where your sensor is plugged in. The other side goes to the "power" pin (below).
int motionSensorPort =D0;  // This is the port the motion sensor is connected to
int buzzerPort = D1; // Here is the Buzzer connected

int motionCount =0;
int lastMotionSensorValue =0;


int readAnalogValue(){

    // Publish the event as well
    String  publishMessage(analogRead(sensorPort));

    // Particle.publish("Sensor Reading",publishMessage,60,PRIVATE);
    return analogValue= analogRead(sensorPort);

}

int readMotionSensor(){
    return digitalRead(motionSensorPort);
}

// create a software timer to get new sensor values times every second
Timer timer(2000, readAnalogValue);

void setup()   {
  // start the data retrieval timer
  timer.start();

  pinMode(sensorPort,INPUT);
  pinMode(motionSensorPort,INPUT);
  pinMode(buzzerPort, OUTPUT);

  //subscribe to the get_nextbus event so we can get the data from the webhook
  // Particle.subscribe("hook-response/get_nextbus/0", gotNextBusData, MY_DEVICES);

  // Particle.publish("get_nextbus"); // publish the event to trigger the data
  // delay(2000); // wait for data to arrive
   // We are also going to declare a Particle.function so that we can turn the LED on and off from the cloud.
  Particle.function("setMessage",setMessage);
   // This is saying that when we ask the cloud for the function "led", it will employ the function ledToggle() from this app.

  // We are going to declare a Particle.variable() here so that we can access the value of the photoresistor from the cloud.
  Particle.variable("analog", &analogValue, INT);
  // This is saying that when we ask the cloud for "analogvalue", this will reference the variable analogvalue in this app, which is an integer variable.
  Particle.variable("motionSensor", &motionSensorValue, INT);

  // by default, we'll generate the high voltage from the 3.3v line internally! (neat!)
  display.begin(SSD1306_SWITCHCAPVCC);

  display.setTextSize(7);       // text size
  display.setTextColor(WHITE); // text color
  display.setTextWrap(false); // turn off text wrapping so we can do scrolling
  x    = display.width(); // set scrolling frame to display width
  minX = -1500; // 630 = 6 pixels/character * text size 7 * 15 characters * 2x slower
}

void loop() {

  // this code displays the next bus times on the OLED screen with fancy scrolling
  display.clearDisplay();
  display.setCursor(x/2, 7);
  display.print(displayMessage);
  display.display();
  if(--x < minX) x = display.width()*2;

  motionSensorValue = readMotionSensor();
  if (motionSensorValue) digitalWrite(buzzerPort,HIGH);
  else digitalWrite(buzzerPort,LOW);
  // raising edge detected
  if (lastMotionSensorValue==0 && motionSensorValue == 1) {
      lastMotionSensorValue=motionSensorValue;
      motionCount++;
      //displayMessage = "Cnt:";
      //displayMessage.concat(String(motionCount));
      //display.print(displayMessage);
      //display.display();
      // Particle.publish("MotionDetected","beep",60,PRIVATE);
      //buzzSound(50);
  }
  // falling edge detected
  if (lastMotionSensorValue==1 && motionSensorValue == 0) {
      lastMotionSensorValue=motionSensorValue;
  }

  if (motionCount > 1) {

      Particle.publish("MotionDetected",Time.timeStr(),60,PRIVATE);
      motionCount =0;
  }
}

// This function will get called when NextBus webhook data comes in.
// It turns the full NextBus XML page into numbers to be displayed on the screen
int setMessage (String message) {

    // put the incoming data (the XML page) into a string called "str"
    displayMessage = message;
    return message.length();

}

int buzzSound(int duration){
    digitalWrite(buzzerPort,HIGH);
    delay (duration);
    digitalWrite(buzzerPort,LOW);

}
