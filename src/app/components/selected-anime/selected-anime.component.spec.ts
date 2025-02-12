import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAnimeComponent } from './selected-anime.component';

describe('SelectedAnimeComponent', () => {
  let component: SelectedAnimeComponent;
  let fixture: ComponentFixture<SelectedAnimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedAnimeComponent]
    });
    fixture = TestBed.createComponent(SelectedAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
