import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from '@angular/core';

export interface CounterState {
    count: number;
    name: string;
}

export function createInitialState(): CounterState {
    return {
        count: 0,
        name: ''
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'value' })
export class CounterStore extends Store<CounterState> {
    constructor() {
        super(createInitialState());
    }

    setValue(value: number) {
        this.update({ count: value });
    }
}