import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MoviesListService } from './../../Services/movies-list.service';
import { MoviesCategoriesService } from './../../Services/movies-categories.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {

  public movieForm: FormGroup;

  error_message = {
    'name': [
      {
        type: 'required', message: 'Movie name required'
      }],
    'description': [
      {
        type: 'minLength', message: 'Enter minimum 50 letters'
      }
    ],
  }
  constructor(
    private alertController: AlertController,
    private router: Router,
    private formBuilder: FormBuilder,
    private moviesListService: MoviesListService,
    private moviesCategoriesService: MoviesCategoriesService
  ) {
    this.movieForm = this.formBuilder.group({
      cate: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength[8],
      ])),
      discription: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength[8],
      ])),
      country: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength[8],

      ])),
      genre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength[8],

      ])),
      stars: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength[8],

      ])),
    })
  }
  defaulturl;
  ngOnInit() {
    this.defaulturl = "home/" + this.moviesCategoriesService.currentCategory;
  }
  onSubmit() {
    var abc: any = {
      'cate': this.movieForm.value.cate,
      'name': this.movieForm.value.name,
      'discription': this.movieForm.value.discription,
      'country': this.movieForm.value.country,
      'genre': this.movieForm.value.genre,
      'stars': this.movieForm.value.starts,
    }
    this.moviesListService.movies.push(abc);

    this.presentAlert();
    this.router.navigateByUrl(`home`);
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Movies',
      message: 'Your movie successfully added.',
      buttons: ['OK']
    });

    await alert.present();
  }
}