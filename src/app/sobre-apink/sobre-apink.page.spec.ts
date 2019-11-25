import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreApinkPage } from './sobre-apink.page';

describe('SobreApinkPage', () => {
  let component: SobreApinkPage;
  let fixture: ComponentFixture<SobreApinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreApinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreApinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
