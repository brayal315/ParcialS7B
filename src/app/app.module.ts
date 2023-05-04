import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Componentes/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClientesComponent } from './Componentes/clientes/clientes.component';
import { FarmaciasComponent } from './Componentes/farmacias/farmacias.component';
import { FarmacosComponent } from './Componentes/farmacos/farmacos.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
//prueba
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './Componentes/tabla/tabla.component';
import { FormClientesComponent } from './Componentes/forms/Form-Clientes/form-clientes/form-clientes.component';
import { FormFarmacosComponent } from './Componentes/forms/form-farmacos/form-farmacos.component';
import { FormFarmaciasComponent } from './Componentes/forms/form-farmacias/form-farmacias.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientesComponent,
    FarmaciasComponent,
    FarmacosComponent,
    TablaComponent,
    FormClientesComponent,
    FormFarmacosComponent,
    FormFarmaciasComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
