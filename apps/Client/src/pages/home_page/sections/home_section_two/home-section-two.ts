import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataHomeSectionTwo } from './ui_fct/index';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home-section-two',
  imports: [NgComponentOutlet],
  templateUrl: './home-section-two.html',
  styleUrl: './home-section-two.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionTwo {
  public readonly DataHomeSectionTwo = DataHomeSectionTwo;
}
