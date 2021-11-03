import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataToCalculate } from 'src/app/dataToCalculate';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  @Output() onCalculate: EventEmitter<DataToCalculate> = new EventEmitter();

  km!: number;
  age!: number;
  luggageWeight!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.km || !this.age || !this.luggageWeight) {
      alert('Пожалуйста, заполните все поля!');
      return;
    }

    const newData = {
      km: this.km,
      age: this.age,
      luggageWeight: this.luggageWeight,
    };

    this.onCalculate.emit(newData);
    console.log('ТЫ ТОЛЬКО ЧТО ВВЕЛ', newData);
    this.km;
    this.age;
    this.luggageWeight;
  }

}
