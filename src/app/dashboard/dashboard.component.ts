import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    const local_name = window.localStorage.getItem('xmix_user');
    if (!local_name) {
      this.router.navigate(['/login']);
    }  else {
      this.userName = local_name;
    }
  }

}
