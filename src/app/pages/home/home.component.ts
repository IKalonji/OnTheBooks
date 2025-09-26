import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('articleCarousel') articleCarousel!: ElementRef;

  services = [
    { title: 'Tax Preparation', description: 'Individual and business tax preparation services.', flipped: false },
    { title: 'Bookkeeping', description: 'Accurate and timely bookkeeping services to keep your financials in order.', flipped: false },
    { title: 'Payroll Services', description: 'Complete payroll solutions for your business.', flipped: false },
    { title: 'Financial Consulting', description: 'Expert financial consulting to help your business grow.', flipped: false },
    { title: 'SARS Representation', description: 'Professional representation in case of an SARS audit.', flipped: false },
    { title: 'Accounting Software Services', description: 'Set up, training, and support for Xero, Quickbooks, Sage Accounting.', flipped: false }
  ];

  scrollLeft() {
    this.articleCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.articleCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  flipCard(index: number) {
    this.services[index].flipped = !this.services[index].flipped;
  }

  unflipCard(index: number) {
    this.services[index].flipped = false;
  }
}
