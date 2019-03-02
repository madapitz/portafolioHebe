import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.scss']
})
export class PinturaComponent implements OnInit {

  @Input() nombre:string;
  @Input('index') index:number;

  constructor() { }

  ngOnInit() {
  }

}
