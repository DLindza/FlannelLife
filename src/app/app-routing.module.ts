import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { FoodComponent }   from './food/food.component';
import { CultureComponent } from './culture/culture.component';
import { SceneryComponent } from './scenery/scenery.component';
import { AboutMeComponent } from './about-me/about-me.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'food', component: FoodComponent },
  { path: 'culture', component: CultureComponent},
  { path: 'scenery', component: SceneryComponent},
  { path: 'about-me', component: AboutMeComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}