import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Se obtiene el valor de forma asíncrona, al escuchar unicamente este cambio no hay fuga de memoria
  value!: Observable<number>;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.value = this.counterService.getValue$();
  }

  change(newValue: number) {
    console.log('funcion change')
    this.counterService.updateValue(newValue);
  }

  // se obtiene el valor de forma sincrona, para llamarlo en la funcion en html, se obtiene como queremos sin fugas de memoria
  get currentCount() {
    console.log('getter currentCount')
    return this.counterService.value.count;
  }

}
