/**
 * A component is a typescript class so that  Angular is able to instantiate or create objects
 * based on the class blurprint
 */

 //Must Import Component
 import {Component} from '@angular/core';

 // Must use component decorator
@Component({ //Must pass javascript object to component decorator
  selector: 'app-server', //unique name usually prefixed with app-
  templateUrl:  './server.component.html', //Must also use a relative filepath which houses the template and gets bundled by webpak
  styleUrls: ['./server.component.css'] //connects to the CSS sheet for the server component
})
export class ServerComponent{

}
