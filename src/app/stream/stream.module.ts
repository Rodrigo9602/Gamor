import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamRoutingModule } from './stream-routing.module';
import { StreamsComponent } from './streams/streams.component';


@NgModule({
  declarations: [
    StreamsComponent
  ],
  imports: [
    CommonModule,
    StreamRoutingModule
  ]
})
export class StreamModule { }
