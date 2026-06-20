import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionTwoData } from './ui_fct';
import { SvgT } from '@/common/types/general';
import { SvgAdvArrowRight } from '@/common/components/svgs/advanced/arrow_right/arrow-right';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-about-section-two',
  imports: [NgComponentOutlet],
  templateUrl: './about-section-two.html',
  styleUrl: './about-section-two.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionTwo {
  public readonly AboutSectionTwoData = AboutSectionTwoData;

  public readonly SvgRight: SvgT = SvgAdvArrowRight;
}
