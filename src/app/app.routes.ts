import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

export const ROUTES:Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'portfolio', component: PortfolioComponent},
	{path: 'contact', component: ContactComponent},
	{path:'',pathMatch:'full',redirectTo:'home'},
	{path:'**',pathMatch:'full',redirectTo:'home'}
];