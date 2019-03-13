import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TsCheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TsReactiveFormBaseComponent } from './checkbox/reactive-form-base.component';
import { AppComponent } from './app.component';
import { TsWindowService } from './window.service';

@NgModule({
  declarations: [
    TsCheckboxComponent,
    TsReactiveFormBaseComponent,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TsWindowService],
  entryComponents: [TsCheckboxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() { 
    const el = createCustomElement(TsCheckboxComponent, { injector: this.injector });
    customElements.define('ts-checkbox', el);
  }
}