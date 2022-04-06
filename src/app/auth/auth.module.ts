import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Material modules */
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { ServicesModule } from '@services/services.module';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    ...AuthRoutingModule.components,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AuthRoutingModule,

    ServicesModule
  ]
})
export class AuthModule { }
