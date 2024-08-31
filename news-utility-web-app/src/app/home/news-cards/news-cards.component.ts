import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-news-cards',
  standalone: true,
  imports: [],
  templateUrl: './news-cards.component.html',
  styleUrl: './news-cards.component.scss'
})
export class NewsCardsComponent {
  @Input() news: any;
  @Output() newsTitle = new EventEmitter<string>()

  newsdetails(){
    this.newsTitle.emit(this.news.title)
  }
}
