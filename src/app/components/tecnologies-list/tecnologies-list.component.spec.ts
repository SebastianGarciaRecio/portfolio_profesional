import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiesListComponent } from './tecnologies-list.component';

describe('TecnologiesListComponent', () => {
  let component: TecnologiesListComponent;
  let fixture: ComponentFixture<TecnologiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
