import { Component, inject } from '@angular/core';
import { NewsService } from '../services/news.service';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from "./filters/filters.component";
import { NewsCardsComponent } from "./news-cards/news-cards.component";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FiltersComponent, NewsCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  allNews: any[] = [];
  filteredNews: any[] = [];
  router = inject(Router);
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
      console.log(this.filteredNews)
    } else {
      this.filteredNews = this.allNews;
    }
  }

  filteredNewsByDate(data: any) {
    this.newsService.startDate = data.fromDate;
    this.newsService.endDate = data.toDate;
    this.fetchAllNews()
  }

  newsDetails(event: any) {
    this.router.navigateByUrl('news-details');
    this.newsService.newsTitleForDetails = event;
  }

}
