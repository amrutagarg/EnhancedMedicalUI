import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { AdduserRoutingModule } from './adduser.routing';
import { AdduserComponent } from './adduser.component';

@NgModule({
    imports: [AdduserRoutingModule, CommonModule],
    providers: [{ provide: APP_BASE_HREF, useValue : '/' }],
    declarations: [AdduserComponent]
})
export class AdduserModule{ }