import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {title: "Home", path: '', component: HomeComponent},
    {title: "Home", path: 'home', component: HomeComponent},
    {title: "404", path: '**', component: NotfoundComponent},
];
