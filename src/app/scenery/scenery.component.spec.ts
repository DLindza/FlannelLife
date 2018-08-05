import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneryComponent } from './scenery.component';

describe('SceneryComponent', () => {
  let component: SceneryComponent;
  let fixture: ComponentFixture<SceneryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
