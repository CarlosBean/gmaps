import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { EditMapComponent } from './components/edit-map/edit-map.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    EditMapComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    EditMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9MC5YRuZpISFdyOFK0BE34c5oFTmrMcY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
