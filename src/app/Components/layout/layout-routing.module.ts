import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { InicioComponent } from './Pages/inicio/inicio.component';
import { PonentesComponent } from './Pages/ponentes/ponentes.component';
import { TalleresComponent } from './Pages/talleres/talleres.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: '', redirectTo: 'inicio', pathMatch:'full'}, // Redirige a 'inicio' por defecto
    // Rutas hijas del LayoutComponent
    {path: 'inicio', component:InicioComponent},
    {path: 'ponentes', component:PonentesComponent},
    {path: 'talleres',component:TalleresComponent},
    {path: 'contacto',component:ContactoComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
