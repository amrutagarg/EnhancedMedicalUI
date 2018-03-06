import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
    { path: '', loadChildren: 'app/modules/modules.module#ModulesModule' },
    { path: 'login', loadChildren:'app/modules/account/login/login.module#LoginModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(route, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }