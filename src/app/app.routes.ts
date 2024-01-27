import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './modules/home/home.component';
import { CertificatesComponent } from './modules/certificates/certificates.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
      },
      {
        path: 'certificates',
        component: CertificatesComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];
