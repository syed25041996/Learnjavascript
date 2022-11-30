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
import { FoodComponent } from './components/food/food.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteComponent } from './components/quote/quote.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    ChildwelcomeComponent,
    ReactiveformComponent,
    FoodComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SubmitServiceService],
  bootstrap : [AppComponent]
})
export class AppModule { }
