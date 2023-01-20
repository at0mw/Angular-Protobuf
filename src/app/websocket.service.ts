import { Injectable } from "@angular/core";
import { Observer } from "rxjs";
import { Observable } from "rxjs";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {  
  private subject: Subject<MessageEvent>;

  public connect(url: any): Subject<MessageEvent> {
    if(!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully Connect: " + url);
    }
    return this.subject;
  }

  private create(url: any): Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = new Observable(
      (obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      }
    )

    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    }
    return Subject.create(observer, observable);
  }

  private OnMessage(obs: any) {
    console.log(obs);
  }
}
