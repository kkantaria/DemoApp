import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MatRippleModule, MatNativeDateModule} from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { StartupComponent } from './startup/startup.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    PagesComponent,
    StartupComponent,
  ],
  imports: [
    PagesRoutingModule,
    MatRippleModule,
    MatButtonModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatCardModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule
  ],
  exports: [
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class PagesModule { }
