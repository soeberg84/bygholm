import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { SessionOneComponent } from './components/sessionone/sessionone.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule, MatInputModule} from '@angular/material';
import { MatRadioModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';

const appRoutes: Routes = [
  { path: '', component: HelloComponent },
  { path: '1', component: FirstComponent },
  { path: '2', component: SecondComponent },
  { path: '3', component: ThirdComponent },
  { path: 'all', component: HelloComponent },
  { path: 'test', component: SessionOneComponent },
];

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonToggleModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,  MatInputModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatTabsModule,  
  RouterModule.forRoot( appRoutes )],
  declarations: [ AppComponent, HelloComponent, SessionOneComponent, FirstComponent, SecondComponent, ThirdComponent ],
  providers: [
  
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
