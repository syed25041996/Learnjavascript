import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildwelcomeComponent } from './components/childwelcome/childwelcome.component';
// import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path:  '', redirectTo: 'login', pathMatch:'full'},
  { path: 'childwelcome', component: ChildwelcomeComponent },
  { path: 'welcome/:username', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
