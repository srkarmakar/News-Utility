import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Output() search = new EventEmitter<any>();
  @Output() filterDateRange = new EventEmitter<any>();
  value!: string;
  dateRange: any = {
    fromDate: '',
    toDate: ''
  }

  constructor(private newsService: NewsService) {
    const currDate = new Date();
    this.dateRange.fromDate = this.formatStartDate(currDate);
    this.dateRange.toDate = this.formatEndDate(currDate);
    this.newsService.startDate = this.dateRange.fromDate;
    this.newsService.endDate = this.dateRange.toDate;
  }

  searchClick() {
    this.search.emit(this.value);
  }

  filterNews() {
    this.filterDateRange.emit(this.dateRange);
  }

  formatStartDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + (date.getDate() - 10)).slice(-2);
    return `${year}-${month}-${day}`;
  }
  formatEndDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
