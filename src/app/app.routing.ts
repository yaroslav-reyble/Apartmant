import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: WrapperComponent,
    children: [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }],
  },
  {
    path: '',
    component: WrapperComponent,
    children: [{ path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }],
  },
];

export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
