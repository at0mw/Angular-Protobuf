import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { environment } from '../environments/environments';
import { map } from 'rxjs/operators';
import { ProtobufService } from '../Protobuf/protobuf.service';


export interface Message {
  author: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: Subject<Message>;
  public serv: ProtobufService;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService
    .connect(environment.CHAT_URL)
    .pipe(map(response => {
      this.DecodeResponse(response.data);
      //console.log(response.data);
      //let data = JSON.parse(response.data);
      return {
        author: "ME",
        message: "Yes"
      }
    }))

    this.messages.subscribe();
   }

  private DecodeResponse(message: any) {
    console.log("Decode Protobuf Response...");
    console.log(message);

    //ProtobufService.
    //console.log(this.serv.deserializeWrapper(message));

    //ProtoBuf.Reader();
  }

  private ConnectDropped() {
    this.wsService.connect(environment.CHAT_URL);
  }
}
