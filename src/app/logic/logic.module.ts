import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoNotFoundComponent } from './components/page-video-not-found/page-video-not-found.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { LogicRoutingModule } from './logic-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoItemComponent } from './components/video-item/video-item.component';

@NgModule({
  declarations: [
    PageVideoListComponent,
    PageVideoNotFoundComponent,
    PageVideoProfileComponent,
    VideoListComponent,
    VideoItemComponent
  ],
  exports: [
    PageVideoListComponent,
    PageVideoNotFoundComponent,
    PageVideoProfileComponent
  ],
  imports: [
    CommonModule,
    LogicRoutingModule,
    HttpClientModule
  ]
})
export class LogicModule { }
