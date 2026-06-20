import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeSectionOne } from './sections/home_section_one/home-section-one';
import { HomeSectionTwo } from './sections/home_section_two/home-section-two';
import { HomeSectionThree } from './sections/home_section_three/home-section-three';

@Component({
  selector: 'app-home-page',
  imports: [HomeSectionOne, HomeSectionTwo, HomeSectionThree],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
