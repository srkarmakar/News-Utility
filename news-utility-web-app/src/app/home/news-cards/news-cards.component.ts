import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';
import { News } from '../../../models/news';

@Component({
  selector: 'app-news-cards',
  standalone: true,
  imports: [],
  templateUrl: './news-cards.component.html',
  styleUrl: './news-cards.component.scss'
})
export class NewsCardsComponent {
  @Input() news!: News;
  newsService = inject(NewsService);
  router = inject(Router);

  newsDetails(news: News) {
    this.newsService.showDetailsNews(news);
    this.router.navigateByUrl('/news-details');
  }
}
