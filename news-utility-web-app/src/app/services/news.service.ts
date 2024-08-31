import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  key: string = "09fdd81fd08749f1bd8ca693bafbf165";
  startDate!: string;
  endDate!: string;
  newsTitleForDetails!: string;
  constructor(private http: HttpClient) { }

  getAllNews() {
    return this.http.get<any>(`https://newsapi.org/v2/everything?q=apple&from=${this.startDate}&to=${this.endDate}&sortBy=publishedAt&apiKey=${this.key}`)
  }
}