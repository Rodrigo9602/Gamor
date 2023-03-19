import { Component } from '@angular/core';
import { faUserAlt, faLock, faArrowRight, faSun, faMoon, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faUser= faUserAlt;
  faLock =faLock;
  faArrow = faArrowRight;
  faIcon = faSun;
  faEmail = faMailBulk;

  public password:string='';
  public passComp:string='';

  loginImage = '../../../assets/image/light-thema.png';
  mode = true;  
  public user={name:'',password:'', email:''};

  constructor(
    private _router: Router,
  ){}
  changeMode() { 
    this.mode = !this.mode;
    this.faIcon = this.mode ? faSun: faMoon; 
    this.loginImage = this.mode? '../../../assets/image/light-thema.png': '../../../assets/image/dark-thema.png';
  }
  onSubmit(){  
    
      this.user.password = this.password;
      this._router.navigate(['/home']);
    
    
  }
}
