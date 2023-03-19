import { Component, OnInit } from '@angular/core';
import { faUserPlus, faRotate, faSignal, faEye, faBars, faSun, faMoon, faShield } from '@fortawesome/free-solid-svg-icons';
import { faHornbill } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoService } from 'src/app/service/video.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService],
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


  public user: String = '';
  public token: string = '';
  public gamers: any;
  public categories: any;
  option: String = '';
  mode = true;
  searchEl: any;




  imgAdd = '../../../assets/image/light-thema.png';
  leftImg = '../../../assets/image/left-image.png';
  rightImg = '../../../assets/image/right-image.png';

  constructor(
    private _route: ActivatedRoute,
    private _videoservice: VideoService
  ) {


    this.searchEl = { key: 'something', name: '' };
    this.categories = [
      { name: 'Action Games', img: '../../../assets/videos/action-games.mp4' },
      { name: 'Sport Games', img: '../../../assets/videos/sports-game.mp4' },
      { name: 'Adventure Games', img: '../../../assets/videos/adventure-game.mp4' },
      { name: 'Arcade Games', img: '../../../assets/videos/arcade-game.mp4' },
      { name: 'Fantasy Games', img: '../../../assets/videos/fantasy-game.mp4' },
      { name: 'Strategy Games', img: '../../../assets/videos/strategy-game.mp4' },
      { name: 'Shooter Games', img: '../../../assets/videos/shooter-game.mp4' },
      { name: 'All categories', img: '../../../assets/videos/all_cat.mp4' },
    ];
    this.gamers = [];
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.user = params['name'];
      this.token = params['token'];
      console.log(this.token);
    })
  }



  changeMode() {
    this.mode = !this.mode;
    this.mode ? this.imgAdd = '../../../assets/image/light-thema.png' : this.imgAdd = '../../../assets/image/dark-thema.png';
    this.mode ? this.rightImg = '../../../assets/image/right-image.png' : this.rightImg = '../../../assets/image/right-image-dark.png';
    this.mode ? this.leftImg = '../../../assets/image/left-image.png' : this.leftImg = '../../../assets/image/left-image-dark.png';
    this.faIcon == faSun ? this.faIcon = faMoon : this.faIcon = faSun;

  }
  OnClickEvent() {
    this.opened = !this.opened;
  }
  searchGamers() {
    switch (this.searchEl.key) {
      case 'Games':
        switch (this.searchEl.name) {
          case 'cod':
            this.sendToService('512710', this.searchEl.key);            
            break;

          case 'fnt':
            this.sendToService('33214', this.searchEl.key);            
            break;

          case 'dot':
            this.sendToService('29595', this.searchEl.key);            
            break;

          case 'asc':
            this.sendToService('490382', this.searchEl.key);           
            break;
        }
        break;


      case 'Streamers':
        switch (this.searchEl.name) {
          case 'aup':
            this.sendToService('459331509', this.searchEl.key);         
            break;

          case 'nin':
            this.sendToService('19571641', this.searchEl.key);        
            break;

          case 'iba':
            this.sendToService('83232866', this.searchEl.key);      
            break;

          case 'rub':
            this.sendToService('39276140', this.searchEl.key);      
            break;
        }
        break;

        case 'Sports':
          switch (this.searchEl.name) {
            case 'bsk':
              this.sendToService('772421245', 'Games');              
            break;

            case 'bas':
              this.sendToService('1820819463', 'Games'); 
            break;

            case 'kl':
              this.sendToService('121606712', 'Streamers'); 
            break;

            case 'fot':
              this.sendToService('1745202732', 'Games');     
            break;
          }
        break;

    }
  }

  sendToService(id: string, opt:string) {
    this.gamers = [];
    switch(opt){
      case 'Games':
        this._videoservice.getGameClip(id, this.token).subscribe(
          response => {
            for (let i = 0; i < 5; i++) {
              this.gamers.push({ path: response.data[i].url, title: response.data[i].title });
            }
          },
          error => {
            console.log(error);
          }
        )
        break;

      case 'Streamers':
        this._videoservice.getStreamerClip(id, this.token).subscribe(
          response => {
            for (let i = 0; i < 5; i++) {
              this.gamers.push({ path: response.data[i].url, title: response.data[i].title });
            }
          },
          error => {
            console.log(error);
          }
        )
        break;

        case 'Clips':
          
          break;
    }
    
    
    
  }

}
