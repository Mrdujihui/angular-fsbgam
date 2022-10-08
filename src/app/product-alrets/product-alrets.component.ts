import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alrets',
  templateUrl: './product-alrets.component.html',
  styleUrls: ['./product-alrets.component.css'],
})
export class ProductAlretsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
