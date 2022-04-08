import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';

const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthenticationGuard],
       children:[
         {path:'', redirectTo: "/dashboard", pathMatch: 'full' },
         {path:'myorders',component:MyordersComponent},
         {path:'mywishlist',component:MywishlistComponent}
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
