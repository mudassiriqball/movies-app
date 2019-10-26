import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesCategoriesService {
  constructor() { }
  currentCategory = 'English Movies';

  moviesCategory = [
    {
      catarogy: 'English Movies'
    },
    {
      catarogy: 'Pakistani Movies'
    },
    {
      catarogy: 'Indians Movies'
    },
    {
      catarogy: 'Punjabi Movies'
    },
  ];

  getMoviesCategories() {
    return this.moviesCategory;
  }

  getCurrentCategory() {
    return this.currentCategory;
  }
}
