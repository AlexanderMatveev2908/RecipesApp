import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionOne } from './sections/about_section_one/about-section-one';
import { AboutSectionTwo } from './sections/about_section_two/about-section-two';
import { AboutSectionThree } from './sections/about_section_three/about-section-three';
import { AboutSectionFour } from './sections/about_section_four/about-section-four';

@Component({
  selector: 'app-about-page',
  imports: [AboutSectionOne, AboutSectionTwo, AboutSectionThree, AboutSectionFour],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {}
