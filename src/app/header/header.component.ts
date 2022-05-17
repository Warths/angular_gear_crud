import { Component } from '@angular/core';
import { MenuElements } from  "../models/menuElementInterface"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   menu: MenuElements = [
     {text: "Element1", target: "/"},
     {text: "Element2", target: "/music/"},
     {text: "Element3", target: "/tinker/", classes:"me-auto"},
     {text: "Twitch",   target: "https://www.twitch.tv/warths"},
     {text: "Setlist",  target: "https://setlist.warths.fr/"},
     {text: "Playlist", target: "https://playlist.warths.fr"},
   ]
}
