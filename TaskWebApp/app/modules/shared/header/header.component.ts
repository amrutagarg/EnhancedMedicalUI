import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl: 'app/modules/shared/header/header.component.html'
})

export class HeaderComponent implements OnInit {
    userName: string;

    ngOnInit() {
        this.userName = sessionStorage.getItem('userName');
    }
    
}