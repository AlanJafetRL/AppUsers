import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages', loadChildren: () => import("./Components/layout/layout.module").then(m => m.LayoutModule) }, // Ruta de páginas
  { path: '', redirectTo: 'pages/inicio', pathMatch: "full" },  // Ruta de inicio
  { path: '**', redirectTo: 'pages/inicio', pathMatch: "full" } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
