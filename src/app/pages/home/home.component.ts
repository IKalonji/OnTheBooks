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

  articles = [
    { title: 'Understanding Tax Deductions', shortDescription: 'Learn about common tax deductions for small businesses.', content: 'This is the full content of the article about tax deductions. It would contain detailed information, examples, and tips.' },
    { title: 'Accurate Bookkeeping', shortDescription: 'Why accurate bookkeeping is crucial for your business.', content: 'This is the full content of the article about bookkeeping. It would explain the importance of accurate records and best practices.' },
    { title: 'Choosing Accounting Software', shortDescription: 'A guide to choosing the best accounting software.', content: 'This is the full content of the article about choosing accounting software. It would compare different options and provide recommendations.' },
    { title: 'Preparing for Tax Season', shortDescription: 'Tips and tricks for a stress-free tax season.', content: 'This is the full content of the article about preparing for tax season. It would provide a checklist and timeline.' },
    { title: 'Financial Statements Explained', shortDescription: 'Understand the key financial statements for your business.', content: 'This is the full content of the article about financial statements. It would break down the balance sheet, income statement, and cash flow statement.' },
    { title: 'Managing Cash Flow', shortDescription: 'Effective strategies for managing your business\'s cash flow.', content: 'This is the full content of the article about managing cash flow. It would provide tips on how to improve cash flow and avoid shortfalls.' }
  ];

  selectedArticle: any = null;
  isArticleModalOpen = false;

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

  openArticleModal(article: any) {
    this.selectedArticle = article;
    this.isArticleModalOpen = true;
  }

  closeArticleModal() {
    this.isArticleModalOpen = false;
    this.selectedArticle = null;
  }
}
