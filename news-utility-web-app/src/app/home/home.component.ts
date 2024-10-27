import { Component, inject } from '@angular/core';
import { NewsService } from '../services/news.service';
import { FiltersComponent } from "./filters/filters.component";
import { NewsCardsComponent } from "./news-cards/news-cards.component";
import { RouterOutlet } from '@angular/router';
import { News } from '../../models/news';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FiltersComponent, NewsCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  allNews: News[] = [];
  filteredNews: News[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchAllNews()
  }
  fetchAllNews() {
    this.newsService.getAllNews().subscribe((data) => {
      this.allNews = data.articles;
      this.filteredNews = this.allNews;
    })
  }

  searchNews(event: any) {
    if (event) {
      this.filteredNews = this.allNews.filter(news => news.title.includes(event));
      //console.log(this.filteredNews)
    } else {
      this.filteredNews = this.allNews;
    }
  }

  filteredNewsByDate(data: any) {
    this.newsService.startDate = data.fromDate;
    this.newsService.endDate = data.toDate;
    this.fetchAllNews()
  }

}
