import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Header:string='';
  @Input() Text:string='';
  @Input() Image:string='';
  @Input() Icon:any;
  @Input() Class:string='';

}
