import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration.component';

const routes: Routes = [
    {
        path: '',
        component: RegistrationComponent,
    },
];

export const RegisterRoutes = RouterModule.forChild(routes);
