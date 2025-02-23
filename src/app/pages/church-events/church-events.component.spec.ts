import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchEventsComponent } from './church-events.component';

describe('ChurchEventsComponent', () => {
  let component: ChurchEventsComponent;
  let fixture: ComponentFixture<ChurchEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
