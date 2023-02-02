import { Component } from '@angular/core';
import { ProtobufService } from '../Protobuf/protobuf.service';
import { MessageService } from '../Websocket Service/message.service'

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  public connected:boolean = !this.messageService.messages.closed;
  public source1Selected:boolean = false;
  public source2Selected:boolean = false;

  constructor(private messageService: MessageService, private protoService: ProtobufService) {
    messageService.messages.subscribe(msg => {
      console.log("Response From Websocket Server: " + msg);
    })
  }

  private analogMessage = {
    messageId: 102,
    joinIndex: 123,
    value: 69
  }

  private message = {
      author: "Me",
      message: "Hello"
  }

  onSelectConnect(): void {
    console.log("Selected Connect");
    //this.connected = !this.connected;
    //this.messageService.Sub();

    //console.log(this.connected);   
    console.log(this.messageService.messages.closed); 
  }



  onSourceOne(): void {
    console.log("Selected Source 1");
    this.source1Selected = !this.source1Selected;

    //let message = this.protoService.serialiseWrapper(this.analogMessage);
    //console.log(message);
    this.messageService.messages.next(this.message);
    console.log(this.source1Selected);   
  }

  onSourceTwo(): void {
    console.log("Selected Source 2");
    this.source2Selected = !this.source2Selected;
    //this.messageService.messages.next("Selected Source 2");
    console.log(this.source2Selected);   
  }

  sendString(event:any): void {
    console.log(event.target.value);
    this.messageService.messages.next(event.target.value);
  }

  onSliderInput(event:any): void {
    console.log(event?.target.value);
    this.messageService.messages.next(event.target.value);
  }
}
