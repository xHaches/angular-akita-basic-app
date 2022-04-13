import { Query } from '@datorama/akita';
import { CounterState, CounterStore } from './counter.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CounterQuery extends Query<CounterState> {
    allState$ = this.select();
    selectName$ = this.select('name');
    selectCount$ = this.select('count');

    // Returns { name, count }
    multiProps$ = this.select(['name', 'count']);

    // Returns [name, count]
    multiPropsCallback$ = this.select(
        [state => state.name, state => state.count]
    )

    constructor(protected override store: CounterStore) {
        super(store);
    }
}