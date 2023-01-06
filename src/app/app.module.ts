import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { MyStepper1Component } from './my-stepper1/my-stepper1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    MyStepper1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
