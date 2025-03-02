import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { ComplaintComponent } from './complaint/complaint.component';
import { AdsComponent } from './ads/ads.component';
import { AddetailComponent } from './addetail/addetail.component';
import { ComplaintdetailComponent } from './complaintdetail/complaintdetail.component';
import { LoginComponent } from './login/login.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { DealerPanelComponent } from './dealer-panel/dealer-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RegisterdealerComponent } from './registerdealer/registerdealer.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddAdvertismentComponent } from './add-advertisment/add-advertisment.component';
import { NotificationComponent } from './notification/notification.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"complaints",component:ComplaintComponent},
    {path:"ads",component:AdsComponent},
    {path:"ads/:id",component:AddetailComponent},
    {path:"complaints/:id",component:ComplaintdetailComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterpageComponent},
    {path:"profile",component:UserPanelComponent},
    {path:"dealer-panel",component:DealerPanelComponent},
    {path:"admin",component:AdminPanelComponent},
    {path:"dealerRegister",component:RegisterdealerComponent},
    {path:"allUsers",component:AllUsersComponent},
    {path:"addAds",component:AddAdvertismentComponent},
    {path:"notifications",component:NotificationComponent}






];

