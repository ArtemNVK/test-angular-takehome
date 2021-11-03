import { Component, Input, OnInit } from '@angular/core';

interface Tariff {
  name: string;
  price: number;
  isAvailable: boolean;
}

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
  @Input() tariff!: Tariff;
  constructor() { }

  ngOnInit(): void {
  }

}
