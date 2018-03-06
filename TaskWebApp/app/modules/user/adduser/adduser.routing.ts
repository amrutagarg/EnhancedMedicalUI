import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdduserComponent } from './adduser.component';

const route: Routes = [
    { path: '', component: AdduserComponent }
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class AdduserRoutingModule { }