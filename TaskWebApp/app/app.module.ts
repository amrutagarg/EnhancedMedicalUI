﻿import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { appComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, AppRoutingModule],
    declarations: [appComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [appComponent]
})

export class AppModule { }