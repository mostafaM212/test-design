import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward, faForward, faEllipsis, faHeart, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../components/button/button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, ButtonComponent, CommonModule, RouterModule]
})
export class MusicListComponent implements OnInit {

  faEllipsis = faEllipsis;
  faHeart = faHeart
  faPlay = faPlay
  faPause = faPause
  songs: any[] = [
    {
      name: 'song 1',
      play: false
    },
    {
      name: 'song 2',
      play: false
    },
    {
      name: 'song 3',
      play: true
    },
    {
      name: 'song 4',
      play: false
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
