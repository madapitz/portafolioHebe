import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  pinturas:string[] = ['p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg','p6.jpg','p7.jpg','p8.jpg', 'p9.jpg', 'p10.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
