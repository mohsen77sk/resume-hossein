import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  expertise: Array<{ img: string; name: string; desc: string }> = [
    {
      img: 'assets/illustrator.svg',
      name: 'Adobe Illustrator',
      desc: 'I have 5 years of experience working with Adobe Illustrator, I use this app in almost all of my projects, it’s really handy.',
    },
    {
      img: 'assets/photoshop.svg',
      name: 'Adobe Photoshop',
      desc: 'I have 7 years of experience working with Adobe Photoshop, It was my primary app when I was a graphic designer and now, it’s more like a tool for me to edit and polish textures and resources for my projects. ',
    },
    {
      img: 'assets/xd.svg',
      name: 'Adobe Xd',
      desc: 'I have 3 years of experience working with Adobe XD, I was overwhelmed with joy when I figured out that there’s such an app like this, I’ve used this app for UI projects officially.',
    },
    {
      img: 'assets/figma.svg',
      name: 'Figma',
      desc: 'I have 2 years of experience working with Figma. I came to this app when I saw some flaws in Xd, it has a far better interface plus some cool features and more of that, The head of design or the employer can oversee the project so easily.',
    },
  ];

  portfolio: Array<string> = ['assets/Hossein_Hekmati_CV-01.png', '', '', ''];
}
