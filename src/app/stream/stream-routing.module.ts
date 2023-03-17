import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamsComponent } from './streams/streams.component';

const routes: Routes = [
  {path:'streams', component:StreamsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamRoutingModule { }
