import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    // check localStorage if a username exists. If it does navigate to dashboard.
    //TODO: do this from routing
    const local_name = window.localStorage.getItem('xmix_user');
    if (local_name) {
      this.router.navigate(['/dashboard']);
    } 
  }

  handleLogin() {
    if (this.userName === '') {
      alert('Please enter a username');
    } else {
      window.localStorage.setItem('xmix_user', this.userName);   
      this.router.navigate(['/dashboard']);
    }
     
  }


}
