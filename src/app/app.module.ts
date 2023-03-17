import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './ui/home/home.component';
import { appRoutingProviders, routing } from './app.routing';

import { CardComponent } from './Components/card/card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    CardComponent,
    
    
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
