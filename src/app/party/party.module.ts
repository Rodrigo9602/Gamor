import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartiesComponent } from './parties/parties.component';



@NgModule({
  declarations: [
    
  
    PartiesComponent
  ],
  imports: [
    CommonModule,
    PartyRoutingModule
  ]
})
export class PartyModule { }
