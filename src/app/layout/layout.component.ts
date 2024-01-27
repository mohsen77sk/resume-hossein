import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  navigation: Array<{ name: string; link: string }> = [
    { name: 'HOME', link: '/home' },
    { name: 'PORTFOLIO', link: '/portfolio' },
    { name: 'CERTIFICATES', link: '/certificates' },
    { name: 'CONTACT ME', link: '/contact' },
  ];
}
