import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent implements OnInit {
  allNews: any[] = [];
  filteredNews: any[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchNewsDetails()
  }
  fetchNewsDetails() {
    this.newsService.getAllNews().subscribe((data) => {
      this.allNews = data.articles;
      this.filteredNews = this.allNews.filter(news => news.title.includes(this.newsService.newsTitleForDetails));
      console.log(this.filteredNews)
    });
  }

}
