import { Component } from '@angular/core';

/**
 * Generated class for the CompassComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'compass',
  templateUrl: 'compass.html'
})
export class CompassComponent {

  text: string;

  constructor() {
    console.log('Hello CompassComponent Component');
    this.text = 'Hello World';
  }

}
