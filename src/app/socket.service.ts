import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;
  private connectionStatusSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = io('http://localhost:3000');
    this.socket.onopen = () => {
      console.log("connected");
      this.connectionStatusSubject.next(true);
    }
    this.socket.onclose = () => {
      console.log("disconnected");
      this.connectionStatusSubject.next(false);
    }
  }

  sendMessage(message: string): void {
    this.socket.emit('chat message', message);
  }

  getMessages(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('chat message', (message: string) => {
        observer.next(message);
      })
    })
  }

  getCompletionSignal(): Observable<void> {
    return new Observable((observer) => {
      this.socket.on('message complete', () => {
        console.log("message complete");
        observer.next();
      })
    })
  }

  get connectionStatus(): Observable<boolean> {
    return this.connectionStatusSubject.asObservable();
  }
}
