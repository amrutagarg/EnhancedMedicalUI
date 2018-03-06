import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'modules-app',
    templateUrl: 'app/modules/modules.component.html'
})

export class ModulesComponent implements OnInit {
    constructor(public router: Router) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/login']);
        }

        
    }
}