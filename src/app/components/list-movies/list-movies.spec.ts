import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovies } from './list-movies';

describe('ListMovies', () => {
  let component: ListMovies;
  let fixture: ComponentFixture<ListMovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
