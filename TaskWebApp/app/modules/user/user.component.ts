import { Component, OnInit } from '@angular/core';
import { UserService } from './userServices';

@Component({
    selector: 'user-app',
    templateUrl: 'app/modules/user/user.component.html'
})
export class UserComponent implements OnInit {
    users: any;
    constructor(private _services: UserService) { }
    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this._services.get()
            .subscribe(data => { this.users = data },
            error => {
                if (error) {
                    console.log(error)
                }
            });
    }
    
    
}