import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'movies-list',
    loadChildren: './Components/movies-list/movies-list.module#MoviesListPageModule'
  },
  {
    path: 'movies-detail',
    loadChildren: './Components/movies-detail/movies-detail.module#MoviesDetailPageModule'
  },
  {
    path: 'add-movie',
    loadChildren: './Components/add-movie/add-movie.module#AddMoviePageModule'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren:
          './home/home.module#HomePageModule'
      },
      {
        path: ':movies-list',
        children: [
          {
            path: '',
            loadChildren: './Components/movies-list/movies-list.module#MoviesListPageModule'
          },
          {
            path: ':movies-detail',
            loadChildren: './Components/movies-detail/movies-detail.module#MoviesDetailPageModule'
          },
        ]
      },
      
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

