import { TestBed } from '@angular/core/testing';

import { MoviesCategoriesService } from './movies-categories.service';

describe('MoviesCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesCategoriesService = TestBed.get(MoviesCategoriesService);
    expect(service).toBeTruthy();
  });
});
