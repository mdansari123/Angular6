import { Component, OnInit } from '@angular/core';
import {MentionModule} from 'angular-mentions/mention'
@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.css']
})
export class MentionComponent implements OnInit {
  public string1:string ="Hello How are you sandip today hope you are doing well"
  items:Array<any>
  myobject:any;
  Selecteditem:any;
  selectedID:number;
 
  // =["Hello","How","Are","You","At","The","moment"]
  constructor() {this.myobject=new Object({
    "Id":0,
    "Name":""
  }) }
random():number{
  return Math.ceil(Math.random()*1000000)
}
  ngOnInit() {
this.items=this.string1.split(" ")
for(let i=0;i<this.items.length;i++){
this.myobject.Id=this.random();
this.myobject.Name=this.items[i];
this.items[i]=this.myobject;
this.myobject=new Object();
}
  }
eventHandler(event){
  if(event.keyCode==64){
    let list=document.getElementsByClassName("dropdown-menu")[0] as HTMLUListElement
    list.style.position="absolute";
    list.style.top="-228px";
    
    }
    else  if(event.keyCode==13){
      this.Selecteditem=this.Selecteditem.replace("@","")
    console.log(this.Selecteditem);
    this.items.forEach((item)=>{
      if(item.Name==this.Selecteditem){
        this.selectedID=item.Id;
        console.log(this.selectedID);
      }
    });
      }
}

}
