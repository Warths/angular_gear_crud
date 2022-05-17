import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamViewComponent } from "./views/stream-view/stream-view.component"
import { MusicViewComponent } from "./views/music-view/music-view.component"
import { MakingViewComponent } from "./views/making-view/making-view.component"


const routes: Routes = [
  {path: "", component: StreamViewComponent },
  {path: "music", component: MusicViewComponent },
  {path: "tinker", component: MakingViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
