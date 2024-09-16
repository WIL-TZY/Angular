import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
	RouterOutlet, 
	RouterLink,
	RouterLinkActive,
	AboutComponent, 
	ClientsComponent, 
	FooterComponent, 
	GalleryComponent, 
	HeaderComponent, 
	PricingComponent, 
	ServicesComponent, 
	TestimonialsComponent
	],
	templateUrl: './app.component.html',
	styleUrl: '/public/css/style.css', // ./app.component.css
})
export class AppComponent {
	title = 'Angular!'; 
}
