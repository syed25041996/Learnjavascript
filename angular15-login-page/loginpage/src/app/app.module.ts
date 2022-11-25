import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SubmitServiceService } from './services/submit-service.service';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChildwelcomeComponent } from './components/childwelcome/childwelcome.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';

console.log("basic loading")
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    ChildwelcomeComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SubmitServiceService],
  bootstrap : [AppComponent]
})
export class AppModule { }
