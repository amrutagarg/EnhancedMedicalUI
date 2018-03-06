import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';
import { AccountServices } from '../accountServices';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule],
    providers: [AccountServices,{ provide: APP_BASE_HREF, useValue: '/' }],
    declarations: [LoginComponent]
})
export class LoginModule {
    
}
