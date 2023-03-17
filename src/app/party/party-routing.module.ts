import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartiesComponent } from './parties/parties.component';

const routes: Routes = [
  {path:'parties', component:PartiesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
