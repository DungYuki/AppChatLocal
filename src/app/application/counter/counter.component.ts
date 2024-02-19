import { Component, inject } from '@angular/core';
import { State, Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/counter/counter.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  private store = inject(Store);

  public count$ : Observable<number>;

  constructor() {
    this.count$ = this.store.pipe(select(state => state.counter));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
