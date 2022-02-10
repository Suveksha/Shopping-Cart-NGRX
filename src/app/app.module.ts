import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart.reducer';
import { environment } from '../environments/environment';
import { DetailsComponent } from './details/details.component';
import { detailsReducer } from './state/details.reducer';
import { reducers } from './state/app.state';
import { MultiplyPipePipe } from './multiply-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CartComponent,
    NotFoundComponent,
    DetailsComponent,
    MultiplyPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cartReducer:cartReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name:'Cart' }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
