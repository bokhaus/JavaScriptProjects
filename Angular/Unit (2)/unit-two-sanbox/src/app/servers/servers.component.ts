import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  
  /**
   * templateUrl: './servers.component.html',
   *
   * Two types of template. Define in an external file (templateUrl:) as above
   *
   * OR
   *
   * in line as below (template:).
   * More than three lines of HTML code use an external file
   * Must have at least a template
   */

  template:`
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
