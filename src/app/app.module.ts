import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MentionModule } from 'angular-mentions/mention';
import { AppComponent } from './app.component';
import { MentionComponent } from './mention/mention.component';
import { NgxScrollbarComponent } from './ngx-scrollbar/ngx-scrollbar.component';
import { ScrollbarModule } from 'ngx-scrollbar';
import { FormsModule }   from '@angular/forms';
// import {MentionDirective} from 'angular-mentions/mention'
@NgModule({
  declarations: [
    AppComponent,
    MentionComponent,
    NgxScrollbarComponent,
  ],
  imports: [
    BrowserModule,MentionModule,ScrollbarModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
