import { Component } from '@angular/core';
import { faUserAlt, faLock, faArrowRight, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faUser= faUserAlt;
  faLock =faLock;
  faArrow = faArrowRight;
  faIcon = faSun;

  loginImage = '../../../assets/image/light-thema.png';
  public user={name:'',password:''};
  mode = true;

  constructor(
    private _router: Router,
  ){}
  changeMode() { 
      this.mode = !this.mode;
      this.faIcon = this.mode ? faSun: faMoon; 
      this.loginImage = this.mode? '../../../assets/image/light-thema.png': '../../../assets/image/dark-thema.png';
    }
    onSubmit(){
      this.setLocalStorage();
      this._router.navigate(['/home']);
    }
    setLocalStorage(){
      localStorage.setItem("username", this.user.name);
    }

  }
