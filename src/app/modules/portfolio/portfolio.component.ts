import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ProfileHeaderComponent } from '../../shared/profile-header/profile-header.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProfileHeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent {
  portfolio: Array<string> = [
    'assets/Hossein_Hekmati_CV-01.png',
    '',
    '',
    '',
    '',
    '',
  ];
}
