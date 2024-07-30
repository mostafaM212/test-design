import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MusicListComponent } from './layout/music-list/music-list.component';
import { MusicsRoutes } from './layout/music-list/musics.routing';

export const routes: Routes = [
       {
              path: '',
              component: LayoutComponent,
              children: MusicsRoutes
       }
];
