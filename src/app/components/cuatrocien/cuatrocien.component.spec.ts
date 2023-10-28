import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatrocienComponent } from './cuatrocien.component';

describe('CuatrocienComponent', () => {
  let component: CuatrocienComponent;
  let fixture: ComponentFixture<CuatrocienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuatrocienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuatrocienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
