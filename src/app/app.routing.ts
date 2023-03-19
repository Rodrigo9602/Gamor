import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./ui/home/home.component";
import { ErrorComponent } from "./error/error.component";


const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'home/:name/:token', component: HomeComponent},
    {path:'user', loadChildren:()=>import('../app/user/user.module').then(m=>m.UserModule)},
    {path:'stream', loadChildren:()=>import('../app/stream/stream.module').then(m=>m.StreamModule)},
    {path:'party', loadChildren:()=>import('../app/party/party.module').then(m=>m.PartyModule)},
    {path:'premium', loadChildren:()=>import('../app/premium/premium.module').then(m=>m.PremiumModule)},
    {path:'**', component: ErrorComponent},
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);