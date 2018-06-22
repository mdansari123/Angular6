import { Component, OnInit, ViewChild } from '@angular/core';
import {ScrollbarComponent} from 'ngx-scrollbar'

@Component({
  selector: 'app-ngx-scrollbar',
  templateUrl: './ngx-scrollbar.component.html',
  styleUrls: ['./ngx-scrollbar.component.css']
})

export class NgxScrollbarComponent implements OnInit {
@ViewChild(ScrollbarComponent) scrollRef: ScrollbarComponent;
array:Array<string>=["hello"]
  constructor() {
    
   }

  ngOnInit() {
    this.array.push("Start");
    let i=0;
let interval=setInterval(()=>{
  i++;
  this.array.push("Start"+i);
  let el = document.getElementById(i.toString());
  el.scrollIntoView();
  if(i==100){
  clearInterval(interval)
 

          // s
        }
},100)
  }

}
