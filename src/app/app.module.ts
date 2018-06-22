import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MentionModule } from 'angular-mentions/mention';
import { AppComponent } from './app.component';
import { MentionComponent } from './mention/mention.component';
import { NgxScrollbarComponent } from './ngx-scrollbar/ngx-scrollbar.component';
import { ScrollbarModule } from 'ngx-scrollbar';
@NgModule({
  declarations: [
    AppComponent,
    MentionComponent,
    NgxScrollbarComponent
  ],
  imports: [
    BrowserModule,MentionModule,ScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
