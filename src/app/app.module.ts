import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MentionModule } from 'angular-mentions/mention';
import { AppComponent } from './app.component';
import { MentionComponent } from './mention/mention.component';

@NgModule({
  declarations: [
    AppComponent,
    MentionComponent
  ],
  imports: [
    BrowserModule,MentionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
