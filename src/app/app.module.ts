import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { StreamViewComponent } from './views/stream-view/stream-view.component';
import { MusicViewComponent } from './views/music-view/music-view.component';
import { MakingViewComponent } from './views/making-view/making-view.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderLinkComponent } from './header/header-link/header-link.component';
import { HeaderButtonComponent } from './header/header-button/header-button.component';
import { HeaderSearchbarComponent } from './header/header-searchbar/header-searchbar.component';
import { HeaderSearchbarFullComponent } from './header/header-searchbar-full/header-searchbar-full.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleSetComponent } from './article-set/article-set.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StreamViewComponent,
    MusicViewComponent,
    MakingViewComponent,
    HeaderLinkComponent,
    HeaderButtonComponent,
    HeaderSearchbarComponent,
    HeaderSearchbarFullComponent,
    ArticleCardComponent,
    ArticleSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
