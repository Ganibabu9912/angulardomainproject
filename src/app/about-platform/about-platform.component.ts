import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-paltform',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './about-platform.component.html',
  styleUrl: './about-platform.component.css'
})
export class AboutPaltformComponent {
  activeImage: string | null = null;

  toggleImage(image: string) {
    this.activeImage = this.activeImage === image ? null : image;
  }
}