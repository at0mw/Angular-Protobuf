import { Component } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  public connectSelected:boolean = false;
  public source1Selected:boolean = false;
  public source2Selected:boolean = false;

  constructor(private messageService: MessageService) {
    messageService.messages.subscribe(msg => {
      console.log("Response From Websocket Server: " + msg);
    })
  }

  private message = {
    author: "General Kenobi",
    message: 'Hello There'
  }

  onSelectConnect(): void {
    console.log("Selected Connect");
    this.connectSelected = !this.connectSelected;
    this.messageService.messages.next(this.message);

    console.log(this.connectSelected);   
  }

  onSourceOne(): void {
    console.log("Selected Source 1");
    this.source1Selected = !this.source1Selected;
    console.log(this.source1Selected);   
  }

  onSourceTwo(): void {
    console.log("Selected Source 2");
    this.source2Selected = !this.source2Selected;
    console.log(this.source2Selected);   
  }

  sendString(event:any): void {
    console.log(event.target.value);
  }

  onSliderInput(event:any): void {
    console.log(event?.target.value);
  }
}
