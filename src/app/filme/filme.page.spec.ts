import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmePage } from './filme.page';

describe('FilmePage', () => {
  let component: FilmePage;
  let fixture: ComponentFixture<FilmePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
