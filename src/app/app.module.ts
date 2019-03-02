import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarreComponent } from './components/shared/navbarre/navbarre.component';

import { Ng2ImgMaxModule } from 'ng2-img-max';
import { PinturaComponent } from './components/pintura/pintura.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    NavbarreComponent,
    PinturaComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    Ng2ImgMaxModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
