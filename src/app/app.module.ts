import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextPoolComponent } from './text-pool/text-pool.component';
import { MemeComponent } from './meme/meme.component';
import { BattlescreenComponent } from './battlescreen/battlescreen.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    TextPoolComponent,
    MemeComponent,
    BattlescreenComponent,
    StartScreenComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
