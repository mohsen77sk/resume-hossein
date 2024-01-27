import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ProfileHeaderComponent } from '../../shared/profile-header/profile-header.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, ProfileHeaderComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CertificatesComponent {}
