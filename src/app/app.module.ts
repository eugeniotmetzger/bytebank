import { NovaTrasferenciaComponent } from './nova-trasferencia/nova-trasferencia.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt,'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTrasferenciaComponent,
    ExtratoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
