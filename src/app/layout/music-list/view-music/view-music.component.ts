import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { faEllipsis, faHeart, faPlay, faPause, faArrowLeft, faBars, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-view-music',
  templateUrl: './view-music.component.html',
  styleUrls: ['./view-music.component.scss'],
  standalone: true,
  imports: [ButtonComponent, RouterModule, CommonModule, MatSliderModule]
})
export class ViewMusicComponent implements OnInit {
  faForward = faForward;
  faBackward = faBackward;
  faArrowLeft = faArrowLeft;
  faBars = faBars;
  faEllipsis = faEllipsis;
  faHeart = faHeart
  faPlay = faPlay
  faPause = faPause
  value: number = 0;

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
