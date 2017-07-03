import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';

const router: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'person',
        component: PersonComponent
    },
    {
        path: 'detail',
        component: DetailPersonComponent
    }
]

export const routing = RouterModule.forRoot(router);