import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZooComponent } from './zoo/zoo.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ZooState], {

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
