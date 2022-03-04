import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FatherComponentComponent } from './father-component/father-component.component';
import { SonComponentComponent } from './father-component/son-component/son-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponentComponent,
    SonComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Si queremos usar "ngModel", este modulo es necesario importarlo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
