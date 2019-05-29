import {HttpClientModule} from '@angular/common/http';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {MatTooltipModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SuperTooltipComponent} from './super-tooltip.component';

@NgModule({
  declarations : [ SuperTooltipComponent ],
  imports : [
    BrowserModule, BrowserAnimationsModule, MatTooltipModule, HttpClientModule
  ],
  entryComponents : [ SuperTooltipComponent ],
  providers : []
})
export class AppModule {
  constructor(
      private injector: Injector,
  ) {
    const customElement =
        createCustomElement(SuperTooltipComponent, {injector});
    customElements.define('super-tooltip', customElement);
  }

  ngDoBootstrap() {}
}
