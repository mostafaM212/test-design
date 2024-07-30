import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from './music-list.component';
import { ViewMusicComponent } from './view-music/view-music.component';

export const MusicsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MusicListComponent
      },
      {
        path: 'view/:id',
        component: ViewMusicComponent
      }
    ]
  }
];


