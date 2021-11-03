import { Component, Input, OnInit } from '@angular/core';

interface Option {
  transport: string;
  tariffs: [
    {
      name: string;
      price: number;
      isAvailable: boolean;
    },
  ];
}

@Component({
  selector: 'app-offer-section',
  templateUrl: './offer-section.component.html',
  styleUrls: ['./offer-section.component.css']
})
export class OfferSectionComponent implements OnInit {
  @Input() option!: Option;
  constructor() { }

  ngOnInit(): void {
  }

}
