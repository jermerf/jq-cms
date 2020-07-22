/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeslaComponent } from './tesla.component';

describe('TeslaComponent', () => {
  let component: TeslaComponent;
  let fixture: ComponentFixture<TeslaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
