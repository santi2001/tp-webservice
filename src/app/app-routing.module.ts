import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuntoAComponent } from './component/punto-a/punto-a.component';
import { PuntoBComponent } from './component/punto-b/punto-b.component';
import { PuntoCComponent } from './component/punto-c/punto-c.component';
import { PuntoDComponent } from './component/punto-d/punto-d.component';


const routes: Routes = [
  {path : 'puntoA', component : PuntoAComponent},
  {path : 'puntoB',component : PuntoBComponent},
  {path : 'puntoC', component : PuntoCComponent},
  {path : 'puntoD',component : PuntoDComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
