import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RegistroListComponent } from './registros/registro-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'registrar', pathMatch: 'full'
      },
      {
        path: 'registros', component: RegistroListComponent
      },
      {
        path: 'registrar', component: RegistrarComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
