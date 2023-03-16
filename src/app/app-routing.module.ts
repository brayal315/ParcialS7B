import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Componentes/clientes/clientes.component';
import { FarmaciasComponent } from './Componentes/farmacias/farmacias.component';
import { FarmacosComponent } from './Componentes/farmacos/farmacos.component';

const routes: Routes = [
  {path:"clientes",component:ClientesComponent},
  {path:"farmacias",component:FarmaciasComponent},
  {path:"farmacos",component:FarmacosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
