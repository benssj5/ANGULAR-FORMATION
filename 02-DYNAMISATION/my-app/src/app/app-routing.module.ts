
import { NgModule } from '@angular/core';
import { ItemComponent } from "app/item.component";
import { ItemFormComponent } from "app/itemform.component";
import { Routes, RouterModule } from '@angular/router';


export const appRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch:'full'},
    {path: 'list', component: ItemComponent},
    {path: 'form', component: ItemFormComponent}
]

@NgModule({
 imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { } 

