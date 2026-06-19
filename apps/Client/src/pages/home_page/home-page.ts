import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeSectionOne } from './sections/home_section_one/home-section-one';

@Component({
  selector: 'app-home-page',
  imports: [HomeSectionOne],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
