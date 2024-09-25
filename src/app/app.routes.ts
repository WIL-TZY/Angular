import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
// import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {title: "My Page | Home", path: '', component: HeaderComponent},
    {title: "My Page | Home", path: 'home', component: HeaderComponent},
    {title: "My Page | About", path: 'about', component: AboutComponent},
    {title: "My Page | Clients", path: 'clients', component: ClientsComponent},
    {title: "My Page | Pricing", path: 'pricing', component: PricingComponent},
    {title: "My Page | Testimonials", path: 'testimonials', component: TestimonialsComponent},
    {title: "My Page | Gallery", path: 'gallery', component: GalleryComponent},
    {title: "My Page | Services", path: 'services', component: ServicesComponent},
    {title: "My Page | 404", path: '**', component: NotfoundComponent},
];
