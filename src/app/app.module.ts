import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { OfferItemComponent } from './components/offer-item/offer-item.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    OfferItemComponent,
    OfferSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
