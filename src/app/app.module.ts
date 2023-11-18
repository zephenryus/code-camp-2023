import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TextPoolComponent } from "./text-pool/text-pool.component";
import { MemeComponent } from "./meme/meme.component";
import { BattlescreenComponent } from "./battlescreen/battlescreen.component";
import { StartScreenComponent } from "./start-screen/start-screen.component";
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { NewGameComponent } from './new-game/new-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
import { WordCarouselComponent } from './word-carousel/word-carousel.component';
import { BottomWordCarouselComponent } from './bottom-word-carousel/bottom-word-carousel.component';
import { MemeSelectionComponent } from './meme-selection/meme-selection.component';
import {MainscreenComponent} from "./mainscreen/mainscreen.component";


const appRoutes: Routes = [
    {'path': 'new-game', component: NewGameComponent},
    {'path': 'join-game', component: JoinGameComponent},
    {'path': 'main-screen-lobby', component: MainscreenComponent}
    // {'path': '', redirectTo: 'new-game', pathMatch: 'full'}
];


@NgModule({

    declarations: [
        AppComponent,
        TextPoolComponent,
        MemeComponent,
        BattlescreenComponent,
        StartScreenComponent,
        HomeScreenComponent,
        NewGameComponent,
        JoinGameComponent,
        PhotoCarouselComponent,
        WordCarouselComponent,
        BottomWordCarouselComponent,
        MemeSelectionComponent,
        MainscreenComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes, {enableTracing: true},
        ),
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
