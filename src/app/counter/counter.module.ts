import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { BalanceComponent } from './components/balance/balance.component';


@NgModule({
    declarations: [
        CounterComponent,
        BalanceComponent
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule {

}