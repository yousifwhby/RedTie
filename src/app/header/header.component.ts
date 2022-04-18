import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  x=15;
  constructor() { }

  ngOnInit(): void {
  }
  hello() {
    alert("helllo");
    this.x=this.x+15;
  }
  

}
