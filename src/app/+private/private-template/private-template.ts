import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-template',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './private-template.html',
  styleUrl: './private-template.scss',
})
export class PrivateTemplate {
  router=inject(Router);
  logoff(){
    sessionStorage.clear();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
