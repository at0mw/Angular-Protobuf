import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { environment } from './environments/environments';
import { map } from 'rxjs/operators';


export interface Message {
  author: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: Subject<Message>;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService
    .connect(environment.CHAT_URL)
    .pipe(map(response => {
      let data = JSON.parse(response.data);
      return {
        author: data.author,
        message: data.message
      }
    }))
   }
}
