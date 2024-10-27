import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { isPlatformBrowser } from '@angular/common';
import { News } from '../../models/news';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  key: string = "09fdd81fd08749f1bd8ca693bafbf165";
  startDate!: string;
  endDate!: string;

  newsForDetailedView = new BehaviorSubject<News>({
    title: '',
    publishedAt: '',
    urlToImage: '',
    author: '',
    description: '',
    content: '',
    url: ''
  });
  currentNews = this.newsForDetailedView.asObservable();

  constructor(private http: HttpClient) { }

  showDetailsNews(news: News) {
    this.newsForDetailedView.next(news);
  }

  getAllNews(): Observable<any> {
    return this.http.get<any>(`https://newsapi.org/v2/everything?q=apple&from=${this.startDate}&to=${this.endDate}&sortBy=publishedAt&apiKey=${this.key}`)
  }
}