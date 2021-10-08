import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { RegistroAmigoComponent } from './pages/registro-amigo/registro-amigo.component';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    BuscarComponent,
    RegistroAmigoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
