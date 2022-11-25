import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildwelcomeComponent } from '../components/childwelcome/childwelcome.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';

console.log("home loading")
const routes: Routes = [
  { path: 'childwelcome', component: ChildwelcomeComponent },
  { path: 'welcome/:username', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
