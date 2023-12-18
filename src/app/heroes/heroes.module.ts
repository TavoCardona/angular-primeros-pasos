import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';
import { List2Component } from './components/list2/list2.component';




@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
        List2Component,
    ],
    exports: [
        HeroComponent,
        ListComponent,
        List2Component
    ], 
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}