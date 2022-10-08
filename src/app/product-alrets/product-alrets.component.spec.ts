import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlretsComponent } from './product-alrets.component';

describe('ProductAlretsComponent', () => {
  let component: ProductAlretsComponent;
  let fixture: ComponentFixture<ProductAlretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlretsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAlretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
