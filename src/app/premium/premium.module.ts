import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumRoutingModule } from './premium-routing.module';
import { PricingComponent } from './pricing/pricing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    PremiumRoutingModule,
    FontAwesomeModule
  ]
})
export class PremiumModule { }
