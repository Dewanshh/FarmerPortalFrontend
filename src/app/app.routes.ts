import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { ComplaintComponent } from './complaint/complaint.component';
import { AdsComponent } from './ads/ads.component';
import { AddetailComponent } from './addetail/addetail.component';
import { ComplaintdetailComponent } from './complaintdetail/complaintdetail.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"complaints",component:ComplaintComponent},
    {path:"ads",component:AdsComponent},
    {path:"ads/:id",component:AddetailComponent},
    {path:"complaints/:id",component:ComplaintdetailComponent}


];
