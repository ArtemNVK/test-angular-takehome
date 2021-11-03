import { Component } from '@angular/core';
import { DataToCalculate } from './DataToCalculate';
import { CalculationService } from './services/calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: any = [];

  constructor(private calculationService: CalculationService) {}

  calculateResult(dataToCalculate: DataToCalculate) {
    this.options = this.calculationService.calculate(dataToCalculate);
    console.log('РАССЧЕТ', this.options);
  }

}
