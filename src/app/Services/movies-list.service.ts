
import { MoviesCategoriesService } from './movies-categories.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  currentMovie = 'Joker 2019';
  public movies: any = [];

  constructor(
    private moviesCategoriesService: MoviesCategoriesService,
  ) {
    this.movies = [
      {
        cate: 'English Movies',
        name: 'Joker 2019',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Avengers: Infinity War',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Hobs and Shows',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Inception 2017',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Captian Marvel',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'The Spider Man 1',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Captian America 2',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Thor 2016',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Doctor Strange',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'The Hulk 2017',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Gemini Man 2019',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'Gemini Man 2019',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },
      {
        cate: 'English Movies',
        name: 'The Flash 6 2019',
        discription: 'Nine months after "The Particle Accelerator" explosion, Barry Allen wakes up from his coma and discovers that the explosion gave him the power of super speed. Others were affected and...',
        country: 'United States',
        genre: 'Drama, Sci-Fi, Adventure, Action',
        stars: 'Danielle Panabaker, Grant Gustin, Candice Patton, Carlos Valdes'
      },
      {
        cate: 'English Movies',
        name: 'Avengers: Endgame 2019',
        discription: 'Avengers: Endgame picks up after the events of Avengers: Infinity War, which saw the Avengers divided and defeated. Thanos won the day and used the Infinity Stones to snap away...',
        country: 'United States',
        genre: 'Sci-Fi, Adventure, Action, Fantasy',
        stars: 'Mark Ruffalo, Chris Hemsworth, Chris Evans, Robert Downey Jr'
      },
      {
        cate: 'English Movies',
        name: 'Ant Man 2019',
        discription: 'Joker centers around an origin of the iconic arch nemesis and is an original, standalone story not seen before on the big screen. Todd Phillips exploration of Arthur Fleck(Joaquin...',
        country: 'United States, Canada',
        genre: 'Drama, Thriller, Crime',
        stars: 'Frances Conroy, Robert De Niro, Joaquin Phoenix, Zazie Beetz'
      },


      {
        cate: 'Pakistani Movies',
        name: 'Lahore sy Karachi',
        discription: 'A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that hes being hunted by a younger clone of himself, Henry...',
        country: 'United States, China',
        genre: 'Drama, Thriller, Sci-Fi, Action',
        stars: 'Clive Owen, Mary Elizabeth Winstead, Will Smith, Benedict Wong'
      },     
      {
        cate: 'Pakistani Movies',
        name: 'Donkey Raja',
        discription: 'A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that hes being hunted by a younger clone of himself, Henry...',
        country: 'United States, China',
        genre: 'Drama, Thriller, Sci-Fi, Action',
        stars: 'Clive Owen, Mary Elizabeth Winstead, Will Smith, Benedict Wong'
      },
      {
        cate: 'Pakistani Movies',
        name: 'Shilwar Ka Daku',
        discription: 'A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that hes being hunted by a younger clone of himself, Henry...',
        country: 'United States, China',
        genre: 'Drama, Thriller, Sci-Fi, Action',
        stars: 'Clive Owen, Mary Elizabeth Winstead, Will Smith, Benedict Wong'
      },
      {
        cate: 'Pakistani Movies',
        name: 'Kalabaz Dil 2016',
        discription: 'A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that hes being hunted by a younger clone of himself, Henry...',
        country: 'United States, China',
        genre: 'Drama, Thriller, Sci-Fi, Action',
        stars: 'Clive Owen, Mary Elizabeth Winstead, Will Smith, Benedict Wong'
      },
      {
        cate: 'Pakistani Movies',
        name: 'Nothing In Pakistan',
        discription: 'A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that hes being hunted by a younger clone of himself, Henry...',
        country: 'United States, China',
        genre: 'Drama, Thriller, Sci-Fi, Action',
        stars: 'Clive Owen, Mary Elizabeth Winstead, Will Smith, Benedict Wong'
      },



      {
        cate: 'Indians Movies',
        name: 'Kabir Sing',
        discription: 'Nine months after "The Particle Accelerator" explosion, Barry Allen wakes up from his coma and discovers that the explosion gave him the power of super speed. Others were affected and...',
        country: 'United States',
        genre: 'Drama, Sci-Fi, Adventure, Action',
        stars: 'Danielle Panabaker, Grant Gustin, Candice Patton, Carlos Valdes'
      },
      {
        cate: 'Indians Movies',
        name: 'Gabar Sing',
        discription: 'Nine months after "The Particle Accelerator" explosion, Barry Allen wakes up from his coma and discovers that the explosion gave him the power of super speed. Others were affected and...',
        country: 'United States',
        genre: 'Drama, Sci-Fi, Adventure, Action',
        stars: 'Danielle Panabaker, Grant Gustin, Candice Patton, Carlos Valdes'
      },
      {
        cate: 'Indians Movies',
        name: 'Marjavaan 2019',
        discription: 'Nine months after "The Particle Accelerator" explosion, Barry Allen wakes up from his coma and discovers that the explosion gave him the power of super speed. Others were affected and...',
        country: 'United States',
        genre: 'Drama, Sci-Fi, Adventure, Action',
        stars: 'Danielle Panabaker, Grant Gustin, Candice Patton, Carlos Valdes'
      },
      {
        cate: 'Indians Movies',
        name: 'Fuck Indians',
        discription: 'Nine months after "The Particle Accelerator" explosion, Barry Allen wakes up from his coma and discovers that the explosion gave him the power of super speed. Others were affected and...',
        country: 'United States',
        genre: 'Drama, Sci-Fi, Adventure, Action',
        stars: 'Danielle Panabaker, Grant Gustin, Candice Patton, Carlos Valdes'
      },
      {
        cate: 'Indians Movies',
        name: 'Dilwaly 2015',
        discription: 'Nine months after "The Particle Accelerator" explosion, Barry Allen wakes up from his coma and discovers that the explosion gave him the power of super speed. Others were affected and...',
        country: 'United States',
        genre: 'Drama, Sci-Fi, Adventure, Action',
        stars: 'Danielle Panabaker, Grant Gustin, Candice Patton, Carlos Valdes'
      },


      {
        cate: 'Punjabi Movies',
        name: 'Guru Nanak 2019',
        discription: 'Avengers: Endgame picks up after the events of Avengers: Infinity War, which saw the Avengers divided and defeated. Thanos won the day and used the Infinity Stones to snap away...',
        country: 'United States',
        genre: 'Sci-Fi, Adventure, Action, Fantasy',
        stars: 'Mark Ruffalo, Chris Hemsworth, Chris Evans, Robert Downey Jr'
      },
      {
        cate: 'Punjabi Movies',
        name: 'Guru Of Punjab',
        discription: 'Avengers: Endgame picks up after the events of Avengers: Infinity War, which saw the Avengers divided and defeated. Thanos won the day and used the Infinity Stones to snap away...',
        country: 'United States',
        genre: 'Sci-Fi, Adventure, Action, Fantasy',
        stars: 'Mark Ruffalo, Chris Hemsworth, Chris Evans, Robert Downey Jr'
      },
      {
        cate: 'Punjabi Movies',
        name: 'Hmara Punjab',
        discription: 'Avengers: Endgame picks up after the events of Avengers: Infinity War, which saw the Avengers divided and defeated. Thanos won the day and used the Infinity Stones to snap away...',
        country: 'United States',
        genre: 'Sci-Fi, Adventure, Action, Fantasy',
        stars: 'Mark Ruffalo, Chris Hemsworth, Chris Evans, Robert Downey Jr'
      },
      {
        cate: 'Punjabi Movies',
        name: 'Desi Patola 2018',
        discription: 'Avengers: Endgame picks up after the events of Avengers: Infinity War, which saw the Avengers divided and defeated. Thanos won the day and used the Infinity Stones to snap away...',
        country: 'United States',
        genre: 'Sci-Fi, Adventure, Action, Fantasy',
        stars: 'Mark Ruffalo, Chris Hemsworth, Chris Evans, Robert Downey Jr'
      },
      {
        cate: 'Punjabi Movies',
        name: 'Sing Of Punjab',
        discription: 'Avengers: Endgame picks up after the events of Avengers: Infinity War, which saw the Avengers divided and defeated. Thanos won the day and used the Infinity Stones to snap away...',
        country: 'United States',
        genre: 'Sci-Fi, Adventure, Action, Fantasy',
        stars: 'Mark Ruffalo, Chris Hemsworth, Chris Evans, Robert Downey Jr'
      }
    ];
  }

  getMovies() {
    return this.movies;
  }

  getCurrentMovie() {
    return this.currentMovie;
  }

  deleteMovie(namee: any) {
    this.movies = this.movies.filter(e => {
      return e.name !== namee;
    });
  }

  ffilterItems(searchTerm: string) {
    return this.movies.find(item => {
      return item.name.includes(searchTerm);
    });
  }

  filterItems(searchTerm: string) {
    var movieslistt = [];
    var j = 0;
    this.movies.forEach(Data => {
      if (Data.cate == (this.moviesCategoriesService.getCurrentCategory())) {
        movieslistt[j] = Data;
        j++;
      }
    });
    return movieslistt.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
