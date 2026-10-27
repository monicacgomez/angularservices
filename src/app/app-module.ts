import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicesPersonas } from './services/service.personas';
import { PersonaApiComponent } from './components/persona-api-component/persona-api-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceCoches } from './services/service.coches';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';

@NgModule({
  declarations: [App, ComicsComponent, PersonaApiComponent, MenuComponent, CochesApiComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    ServicesPersonas,
    ServiceCoches,
  ],
  bootstrap: [App],
})
export class AppModule {}
