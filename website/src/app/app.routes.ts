import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
// import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'home', component: HeaderComponent},
    {path: 'about', component: AboutComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'services', component: ServicesComponent}
];
