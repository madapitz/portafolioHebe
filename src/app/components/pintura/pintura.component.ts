import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.scss']
})
export class PinturaComponent implements OnInit {

  @Input() nombre:string;

  constructor() { }

  ngOnInit() {
  }

}
