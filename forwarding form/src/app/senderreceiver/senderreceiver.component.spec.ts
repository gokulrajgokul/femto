import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderreceiverComponent } from './senderreceiver.component';

describe('SenderreceiverComponent', () => {
  let component: SenderreceiverComponent;
  let fixture: ComponentFixture<SenderreceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderreceiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderreceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
