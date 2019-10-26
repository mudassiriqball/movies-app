import { Router } from '@angular/router';
import { MoviesListService } from './../../Services/movies-list.service';
import { MoviesCategoriesService } from './../../Services/movies-categories.service';
import { Component, OnInit } from '@angular/core';
import './../../../assets/images/img.jpg';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  constructor(
    private moviesCategoriesService: MoviesCategoriesService,
    private moviesListService: MoviesListService,
    private router: Router,
  ) { }

  moviesList: any;
  currentCategory: any;
  public searchTerm: string = "";
  items: any;

  ngOnInit() {
    this.currentCategory = this.moviesCategoriesService.getCurrentCategory();
    this.setFilteredItems();
  }


  changeUrl(movieName) {
    const nname = movieName.name;
    this.moviesListService.currentMovie = nname;
    const url = `home/${this.moviesCategoriesService.getCurrentCategory()}/${nname}`;
    this.router.navigateByUrl(url);
  }

  setFilteredItems() {
    this.moviesList = this.moviesListService.filterItems(this.searchTerm);
    this.moviesList.sort((a, b) => a.name.localeCompare(b.name));
  }
}
