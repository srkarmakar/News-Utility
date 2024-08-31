import { Routes } from '@angular/router';
import { NewsDetailsComponent } from './home/news-details/news-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'news-details',
        component: NewsDetailsComponent
    },
];
