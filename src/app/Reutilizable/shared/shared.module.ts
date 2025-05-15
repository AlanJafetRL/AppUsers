import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { CarouselComponent } from '../Components/carousel/carousel.component';
import { ContactComponent } from '../Components/contact/contact.component';


@NgModule({
  declarations: [CarouselComponent, ContactComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    CarouselComponent,
    ContactComponent,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule

  ]
})
export class SharedModule { }
