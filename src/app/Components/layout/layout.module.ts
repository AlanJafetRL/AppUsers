import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { TalleresComponent } from './Pages/talleres/talleres.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { SharedModule } from '../../Reutilizable/shared/shared.module';
import { LayoutComponent } from './layout.component';
import { PonentesComponent } from './Pages/ponentes/ponentes.component';


@NgModule({
  declarations: [
    TalleresComponent,
    ContactoComponent,
    InicioComponent,
    LayoutComponent,
    PonentesComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class LayoutModule { }
