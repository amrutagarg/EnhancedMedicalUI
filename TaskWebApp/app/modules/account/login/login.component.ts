import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../../models/user.model';
import { AccountServices } from '../accountServices';


@Component({
    selector: 'login-app',
    styleUrls: ['app/modules/account/login/login.css'],
    templateUrl: 'app/modules/account/login/login.component.html'
    
})
export class LoginComponent {
    constructor(private _route: Router, private _account: AccountServices) { }
    users: UserModel[];
    model = {};
    login(model: any) {
        this._account.login(model)
            .subscribe(data => {
                if (data != null) {
                    this.users = data;
                    sessionStorage.setItem('userName', data.firstname + " "+data.lastname);
                    this._route.navigate(['/dashboard']);
                }                
            },
            error => {
                if (error) {
                    console.log(error)
                }
            });          
    }

   
}