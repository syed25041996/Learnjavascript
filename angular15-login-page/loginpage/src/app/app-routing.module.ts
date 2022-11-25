import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildwelcomeComponent } from './components/childwelcome/childwelcome.component';
// import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path:  '', redirectTo: 'admin/login', pathMatch:'full'},
  { path: 'reactive', component: ReactiveformComponent },
  {
    path: 'admin' ,loadChildren : () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path : 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
