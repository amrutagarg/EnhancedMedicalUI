import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { ModulesRouting } from './modules.routing';
import { ModulesComponent } from './modules.component';
import { HeaderComponent } from './/shared/header/header.component';
import { FooterComponent } from './/shared/footer/footer.component';

@NgModule({
    imports: [CommonModule, ModulesRouting],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    declarations: [ModulesComponent, HeaderComponent, FooterComponent]
})
export class ModulesModule { }