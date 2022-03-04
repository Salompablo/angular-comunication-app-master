import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent implements OnInit {
  // declaramos nuestra variable
  public value: string = '';
  // Variable donde almacenamos el valor del hijo
  public sonMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Función cada vez que pulsamos una tecla.
  public keyUp(value: string): void {
    this.value = value;
  }

  public handleMessage(message: string): void {
    this.sonMessage = message;
  }

}
