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
      desc: 'I have accumulated five years of extensive experience working with Adobe Illustrator, utilizing this indispensable application in nearly all of my projects. Its remarkable functionality and practicality have proven to be invaluable to me.',
    },
    {
      img: 'assets/photoshop.svg',
      name: 'Adobe Photoshop',
      desc: '"I possess a wealth of eight years\' experience working with Adobe Photoshop, which served as my primary application during my tenure as a graphic designer. Currently, it has transformed into an invaluable tool for me to refine and enhance textures and resources for my projects.',
    },
    {
      img: 'assets/xd.svg',
      name: 'Adobe Xd',
      desc: 'I have garnered four years of valuable experience working with Adobe XD, a discovery that filled me with overwhelming joy. This exceptional application has become my go-to tool for official UI projects.',
    },
    {
      img: 'assets/figma.svg',
      name: 'Figma',
      desc: 'I have accumulated four years of hands-on experience working with Figma, which became my preferred choice after identifying certain limitations in XD. With its superior interface and an array of impressive features, Figma has proven to be a remarkable tool. Notably, it enables seamless project oversight for design leads and employers alike, enhancing collaboration and efficiency.',
    },
  ];

  portfolio: Array<string> = ['assets/Hossein_Hekmati_CV-01.png', '', '', ''];
}
