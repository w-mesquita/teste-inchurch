import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewEditEventComponent } from './modal-new-edit-event.component';

describe('ModalNewEditEventComponent', () => {
  let component: ModalNewEditEventComponent;
  let fixture: ComponentFixture<ModalNewEditEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewEditEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
