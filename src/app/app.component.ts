import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'my-first-project';
  myname='Abhishek';
  object: object={id:1,name:'Abhishek', Address:'Noida', nested:{group:3, numbers:[1,2,3,4,5,6,7]}};
}
