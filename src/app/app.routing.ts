import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
