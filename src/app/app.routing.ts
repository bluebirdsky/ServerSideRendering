import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page2/:Id', component: Page3Component },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
