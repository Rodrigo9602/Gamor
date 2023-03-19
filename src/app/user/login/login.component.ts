import { Component, OnInit } from '@angular/core';
import { faUserAlt, faLock, faArrowRight, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser= faUserAlt;
  faLock =faLock;
  faArrow = faArrowRight;
  faIcon = faSun;

  loginImage = '../../../assets/image/light-thema.png';
  public user={name:'',password:'', token: ''};
  mode = true;
  public token='';

  constructor(
    private _router: Router,
  ){}
  
  ngOnInit(): void {
      this.token = document.location.hash;
    }
  changeMode() { 
      this.mode = !this.mode;
      this.faIcon = this.mode ? faSun: faMoon; 
      this.loginImage = this.mode? '../../../assets/image/light-thema.png': '../../../assets/image/dark-thema.png';
    }
    onSubmit(){
      
        this.setLocalStorage();
        let hashs = this.token.split('&');
        this.token = hashs[0].split('=')[1];
        this.user.token = this.token;
        // Emitir ouput con el token para que sea recibido por home tras el redireccionamiento        
        this._router.navigate([`/home/${this.user.name}/${this.user.token}`]);
      
      
    }
    setLocalStorage(){
      localStorage.setItem("username", this.user.name);
    }

  }
