import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonaApiComponent } from './components/persona-api-component/persona-api-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';

const routes: Routes = [
  {path:"", component: ComicsComponent},
  {path: "personas", component: PersonaApiComponent}, 
  {path: "coches", component: CochesApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
