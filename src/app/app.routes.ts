import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { DataFetchComponent } from './data-fetch/data-fetch.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    },

    {
        path: 'service',
        component: ServiceComponent
    },

    {
        path: 'data',
        component: DataFetchComponent
    }

    
];
