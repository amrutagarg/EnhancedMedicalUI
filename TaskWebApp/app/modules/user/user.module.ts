import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { UserRoutingModule } from './user.routing';
import { UserComponent } from './user.component';
import { UserService } from './userServices';

@NgModule({
    imports: [UserRoutingModule, CommonModule],
    providers: [UserService,{ provide: APP_BASE_HREF, useValue: '/' }],
    declarations: [UserComponent]
})
export class UserModule { }