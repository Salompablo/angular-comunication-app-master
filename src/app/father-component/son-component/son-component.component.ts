import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son-component',
  templateUrl: './son-component.component.html',
  styleUrls: ['./son-component.component.scss']
})
export class SonComponentComponent implements OnInit {
  @Input() text: string = '';
  @Output() emitMessage = new EventEmitter<string>();

  public message: string = 'ejemplo';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.emitMessage.emit(this.message);
  }

}
