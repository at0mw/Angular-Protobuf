import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProtobufService {

  constructor() { }

  // public serialiseWrapper(data: any) : Uint8Array {
  //   var message = new proto.WrapperMessage();
  //   message.setMessagetype(data.messageType);
  //   message.setMessage(data.message);

  //   return message.serializeBinary();
  // }

  // public serializeAnalogBinaryMessage(data: any) : Uint8Array {
  //   var message = new proto.AnalogMessage();
  //   message.setMessageid(data.messageId);
  //   message.setJoinindex(data.joinIndex);
  //   message.setValue(data.value);

  //   return message.serializeBinary();
  // }

  // public serializeDigitalBinaryMessage(data: any) : Uint8Array {
  //   var message = new proto.DigitalMessage();
  //   message.setMessageid(data.messageId);
  //   message.setJoinindex(data.joinIndex);
  //   message.setState(data.state);

  //   return message.serializeBinary();
  // }

  // public serializeStringBinaryMessage(data: any) : Uint8Array {
  //   var message = new proto.StringMessage();
  //   message.setMessageid(data.messageId);
  //   message.setJoinindex(data.joinIndex);
  //   message.setValue(data.value);

  //   return message.serializeBinary();
  // }

  // public deserializeWrapper(data : Uint8Array) {
  //     return proto.WrapperMessage.deserializeBinary(data);
  // }

  // getMessageTypeName(a: number) : string {
  //     for(let prop in proto.WrapperMessage.MessageType){
  //         if(a === proto.WrapperMessage.MessageType.ANALOG)
  //           return prop;
  //     }

  //     return '';
  // }
}


