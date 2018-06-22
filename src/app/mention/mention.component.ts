import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.css']
})
export class MentionComponent implements OnInit {
  public string1:string ="Hello How are you sandip today hope you are doing well"
  items:Array<string>
  // =["Hello","How","Are","You","At","The","moment"]
  constructor() { }

  ngOnInit() {
this.items=this.string1.split(" ")
  }
eventHandler(event){
  if(event.keyCode==64){
    let list=document.getElementsByClassName("dropdown-menu")[0] as HTMLUListElement
    list.style.position="absolute";
    list.style.top="-228px";
    
    }
}
}
