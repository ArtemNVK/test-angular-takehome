import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationResult } from '../CalculationResult';
import { DataToCalculate } from '../DataToCalculate';
import { AeroflotTariffs, RailroadTariffs } from '../Tariffs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  result: any;

  constructor() { }

  calculateAeroflotTariffs(dataToCalculate: DataToCalculate) {
    const tariffs = AeroflotTariffs.tariffs;
    let options = [];

    for(let tariff of tariffs) {
      let result: any = {};
      if (dataToCalculate.luggageWeight > tariff.maxLuggage) {
        result.name = tariff.name;
        result.isAvailable = false;
      } else {
        let kmPrice = dataToCalculate.km * tariff.pricePerKm;
        if (tariff.discount) {
          kmPrice = dataToCalculate.age < tariff.discount?.age ? kmPrice - Math.floor((tariff.discount?.percent / 100) * kmPrice) : kmPrice; 
        }
        const luggagePrice = dataToCalculate.luggageWeight < tariff.freeLuggage ? 0 : tariff.pricePerLuggageGreaterThanFreeLuggage;
        result.name = tariff.name;
        result.price = kmPrice + luggagePrice;
        result.isAvailable = true;
        options.push(result);
      }
    }
    return options;
  }

  calculateRailroadTariffs(dataToCalculate: DataToCalculate) {
    const tariffs = RailroadTariffs.tariffs;
    let options = [];

    for(let tariff of tariffs) {
      let result: any = {};
      if (dataToCalculate.luggageWeight > tariff.maxLuggage) {
        result.name = tariff.name;
        result.isAvailable = false;
      } else {
        let kmPrice = dataToCalculate.km * tariff.pricePerKm;
        if (tariff.discount) {
          kmPrice = dataToCalculate.age < tariff.discount?.age ? kmPrice - Math.floor((tariff.discount?.percent / 100) * kmPrice) : kmPrice; 
        }
        let luggageToBePaid = dataToCalculate.luggageWeight - tariff.freeLuggage;
        const luggagePrice = dataToCalculate.luggageWeight < tariff.freeLuggage ? 0 : tariff.pricePer1kgLuggageGreaterThanFreeLuggage * luggageToBePaid;
        result.name = tariff.name;
        result.price = kmPrice + luggagePrice;
        result.isAvailable = true;
        options.push(result);
      }
    }
    return options;
  }

  calculate(dataToCalculate: DataToCalculate): Observable<CalculationResult[]> {
    const aeroflotOptions = this.calculateAeroflotTariffs(dataToCalculate);
    const railroadOptions = this.calculateRailroadTariffs(dataToCalculate);
    
    this.result = [
      {
        transport: 'Аэрофлот',
        tariffs: aeroflotOptions,
      },
      {
        transport: 'РЖД',
        tariffs: railroadOptions,
      },
    ]

    return this.result;

  }
}
