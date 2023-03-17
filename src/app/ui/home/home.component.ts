import { Component, OnInit } from '@angular/core';
import { faUserPlus, faRotate, faSignal, faEye, faBars, faSun, faMoon, faShield } from '@fortawesome/free-solid-svg-icons';
import { faHornbill } from '@fortawesome/free-brands-svg-icons';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened = false;
  faUserPlus = faUserPlus;
  faParty = faHornbill;
  faMatch = faRotate;
  faStream = faSignal;
  faEye = faEye;
  faBars = faBars;
  faIcon = faSun;
  faShield = faShield;


  public user:String='';
  public gamers: any;
  option: String = '';
  mode = true;
  
  


  imgAdd = '../../../assets/image/light-thema.png';
  leftImg='../../../assets/image/left-image.png';
  rightImg='../../../assets/image/right-image.png';

  constructor(
    private _route:ActivatedRoute,   
  ) {
    this.getLocalStorage();
  }

  ngOnInit() {       
  }

  getLocalStorage(){
    this.user = localStorage.getItem("username")!;
  }
  
  changeMode() {    
    this.mode=!this.mode;
    this.mode? this.imgAdd = '../../../assets/image/light-thema.png': this.imgAdd ='../../../assets/image/dark-thema.png';
    this.mode? this.rightImg= '../../../assets/image/right-image.png':this.rightImg= '../../../assets/image/right-image-dark.png';
    this.mode? this.leftImg= '../../../assets/image/left-image.png': this.leftImg= '../../../assets/image/left-image-dark.png';
    this.faIcon==faSun?this.faIcon=faMoon:this.faIcon=faSun;
    
  }
  OnClickEvent() {
    this.opened = !this.opened;
  }
  searchGamers() {
    switch (this.option) {
      case 'cod':
        this.gamers = [
          { name: 'Skylaws' },
          { name: 'DanielDanm' },
          { name: 'Luffy08'},
          { name: 'MargotQueen' }
        ];
        break;

      case 'dota':
        this.gamers = [
          { name: 'Miracle'},
          { name: 'Kuro'},
          { name: 'L1mao' },
          { name: 'Suma1l' }
        ];
        break;

      case 'fornite':
        this.gamers = [
          { name: 'Ninja'},
          { name: 'MrBeast'},
          { name: 'Elon'},
          { name: 'Cage'}
        ];
        break;

      case 'cyber':
        this.gamers = [
          { name: 'Jordy'},
          { name: 'Faker' },
          { name: 'Sadiel' },
          { name: 'J-Hope' }
        ];
        break;

    }

  }
}
