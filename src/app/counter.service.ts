import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';
import { CounterQuery } from './counter.query';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(
    private store: CounterStore,
    private counterQuery: CounterQuery
  ) { }

  updateValue(newValue: number) {
    this.store.setValue(newValue);
  }

  get value() {
    return this.counterQuery.getValue();
  }

  getValue$() {
    return this.counterQuery.selectCount$;
  }
}
