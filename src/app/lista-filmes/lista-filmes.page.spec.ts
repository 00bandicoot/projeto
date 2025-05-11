import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFilmesPage } from './lista-filmes.page';

describe('ListaFilmesPage', () => {
  let component: ListaFilmesPage;
  let fixture: ComponentFixture<ListaFilmesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFilmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
