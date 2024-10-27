import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../../models/news';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})

export class NewsDetailsComponent implements OnInit, AfterViewInit {
  initialValue: News = {
    title: '',
    publishedAt: '',
    urlToImage: '',
    author: '',
    description: '',
    content: '',
    url: ''
  }
  news!: News;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.fetchNewsDetails()
  }

  ngAfterViewInit(): void {
    this.fetchNewsDetails();
  }

  fetchNewsDetails() {
    this.newsService.currentNews.subscribe((data: News) => {
      this.news = data;
    })
  }

}
