import { MoviesCategoriesService } from './../Services/movies-categories.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../../assets/images/angry-birds.jpg';
import '../../assets/images/img.jpg';
import { MoviesListService } from '../Services/movies-list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private moviesCategoriesService: MoviesCategoriesService,
    private moviesListService: MoviesListService,
    private router: Router,
  ) { }

  moviesCategory: any;
  moviesList: any;
  currentCategory: any;
  public searchTerm: string = "";
  items: any;

  ngOnInit() {
    this.currentCategory = this.moviesCategoriesService.getCurrentCategory();
    this.moviesCategory = this.moviesCategoriesService.getMoviesCategories();
    this.setFilteredItems();
  }

  changeUrl(categoryObj) {
    const nname = categoryObj.catarogy;
    this.moviesCategoriesService.currentCategory = nname;
    const url = `home/${nname}`;
    this.router.navigateByUrl(url);
  }

  setFilteredItems() {
    this.moviesList = this.moviesListService.filterItems(this.searchTerm);
    this.moviesList.sort((a, b) => a.name.localeCompare(b.name));
  }

}
