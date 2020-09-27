import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBulmaPaginationComponent } from './ngx-bulma-pagination.component';

describe('NgxBulmaPaginationComponent', () => {
  let component: NgxBulmaPaginationComponent;
  let fixture: ComponentFixture<NgxBulmaPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBulmaPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBulmaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
