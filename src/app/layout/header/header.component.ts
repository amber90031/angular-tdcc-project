import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  screenWidth: any;
  userid: string;
  BgColor = '#fff';
  JusContent = 'space-between';
  logoUrl = '../assets/images/logo.png';
  isLogin = false;
  isTerms = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.isMobile = window.innerWidth > 979 ? false : true;
    this.getJusContent();
  }

  constructor(private router: Router) {
    this.onResize();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login/terms') {
          this.isTerms = true;
          this.BgColor = '#e2e2e2';
          this.logoUrl = '../assets/images/logo_gray.png';
        } else {
          this.isTerms = false;
          this.BgColor = '#fff';
          this.logoUrl = '../assets/images/logo.png';
        }
      }
      this.getJusContent();
      if (!sessionStorage.getItem('userid')) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
        this.userid = sessionStorage.getItem('userid');
      }
    });
  }

  ngOnInit() {}

  getJusContent() {
    if (!this.isMobile) {
      this.JusContent = this.isTerms ? 'end' : 'space-between';
    } else {
      this.JusContent = this.isTerms ? 'center' : 'space-between';
    }
  }

  Logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
