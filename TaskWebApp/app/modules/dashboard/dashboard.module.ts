import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [DashboardRoutingModule, CommonModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    declarations: [DashboardComponent]
})
export class DashboardModule { }