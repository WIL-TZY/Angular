import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path: '**', component: NotfoundComponent},
];
