import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
 
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { CultureComponent } from './culture/culture.component';
import { SceneryComponent } from './scenery/scenery.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PostService } from './post.service';
import { ScrollerComponent } from './scroller/scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    CultureComponent,
    SceneryComponent,
    AboutMeComponent,
    InfiniteScrollerDirective,
    ScrollerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
