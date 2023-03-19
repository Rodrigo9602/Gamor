import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faPlay , faPause} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() name:String = '';
 @Input() index:Number = 0;
 @Input() image:String = '';
 @Input() mode:Boolean = true;

 faPlay = faPlay;
 faPause = faPause;

 @ViewChild('myVideo') videoElement!:ElementRef;

 constructor(){
    
 }
 
 play(){
    this.videoElement.nativeElement.play();
 }
 pause(){
  this.videoElement.nativeElement.pause();
 }
 

}
