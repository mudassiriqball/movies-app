import { MoviesCategoriesService } from './../../Services/movies-categories.service';
import { MoviesListService } from './../../Services/movies-list.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import './../../../assets/images/img.jpg';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.page.html',
  styleUrls: ['./movies-detail.page.scss'],
})
export class MoviesDetailPage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,
    private moviesListService: MoviesListService,
    private moviesCategoriesService: MoviesCategoriesService,

  ) { }

  currentMovie: any;
  defaulturl: any;
  // movieName;

  ngOnInit() {
    const movieName = this.moviesListService.getCurrentMovie();
    this.currentMovie = this.moviesListService.ffilterItems(movieName);
    this.defaulturl = this.moviesCategoriesService.getCurrentCategory();
  }

  async deleteMovie() {
    const aalert = await this.alertController.create({
      header: 'Alert',
      message: `Are you sure you want to remove ${this.currentMovie.name}?`,
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            this.moviesListService.deleteMovie(this.currentMovie.name);
            this.router.navigateByUrl(`/home/{{this.defaulturl}}`);
          }
        }
      ]
    });
    aalert.present();
  }

}
