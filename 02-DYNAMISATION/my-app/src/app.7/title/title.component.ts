// 6.2.1 import de Component et Config
import { Component } from '@angular/core';
import { Config } from '../config'; 

// 6.2.2 créer @Component
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'] 
})

// 6.2.3 créer class TitleComponent
export class TitleComponent {

//  6.2.4 private title
  private title: string;

  constructor(){
    //    6.2.5 init this.title dans constructor
    this.title = Config.APP_TITLE; 
  }
  

 
}
