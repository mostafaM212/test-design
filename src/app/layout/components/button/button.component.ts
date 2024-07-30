import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule]
})
export class ButtonComponent implements OnInit {
  icon = input<IconProp>(faHeart)
  active = input<boolean>(false)

  size = input<string>('w-11 h-11')
  BtnSize = input<string>('w-10 h-10')


  faHeart = faHeart
  constructor() { }

  ngOnInit() {
  }

}
