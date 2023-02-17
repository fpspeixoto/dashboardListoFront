import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';

interface Card {
  brand: string;
  brandName: string;
  code: string;
  active: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }
  cards: Card[] = [
    { brand: 'VISA', brandName: 'Visa', code: '1234', active: true },
    { brand: 'MASTERCARD', brandName: 'Mastercard', code: '5678', active: false },
    { brand: 'AMEX', brandName: 'American Express', code: '9876', active: true }
  ];

  toggleActive(card: Card): void {
    card.active = !card.active;
    this.dashboardService.updateStatus(1, "ativo");
  }
}
