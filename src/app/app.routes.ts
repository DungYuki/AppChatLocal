import { Routes } from '@angular/router';
import { CounterComponent } from './application/counter/counter.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/counter'
    },
    {
        path: 'counter',
        component: CounterComponent
    }
];
