// game.service.ts

import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import {SocketService} from "./socket.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private socket: SocketService) {}

  joinGame(gameId: string) {
    this.socket.emit('joinGame', gameId);
  }

  createGame() {
    this.socket.emit('createGame');
  }

  onPlayerJoined() {
    return this.socket.fromEvent('playerJoined');
  }

  onGameCreated() {
    return this.socket.fromEvent('gameCreated');
  }

  onInvalidGame() {
    return this.socket.fromEvent('invalidGame');
  }
}
