import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulesComponent } from './modules.component';

const route: Routes = [
    {
        path: '', component: ModulesComponent,
        children: [
            { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
            { path: 'user', loadChildren: 'app/modules/user/user.module#UserModule' },
            { path: 'adduser', loadChildren: 'app/modules/user/adduser/adduser.module#AdduserModule' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class ModulesRouting { }