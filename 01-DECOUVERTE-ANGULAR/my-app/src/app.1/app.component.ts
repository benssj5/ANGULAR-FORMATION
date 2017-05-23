import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 1.1.2 déclarer 2 variables avec visibilité et typages dans notre class
  private title: string;
  private version: string;

  // 1.1.1 créer constructor qui initialise 2 variables
  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
  }



}
