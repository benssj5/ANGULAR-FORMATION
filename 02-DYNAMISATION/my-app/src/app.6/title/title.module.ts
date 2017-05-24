// 6.1.1 import de ngModule
import { NgModule } from '@angular/core';
// 6.1.2 import de TitleComponent
import { TitleComponent } from './title.component';

// 6.1.3 créer le ngModule
@NgModule({
  declarations: [
    //   6.1.4 declaration de TitleComponent
    TitleComponent
  ],
  exports: [
    //   6.1.5 exports TitleComponent
    TitleComponent
  ]
 
})
export class TitleModule { } 

