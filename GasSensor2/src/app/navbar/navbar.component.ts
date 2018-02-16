import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private isCollapsed :boolean = true;

  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;
  }

 collapsed(event:any) : void {
   console.log(event);
 }
}
