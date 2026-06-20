import { SvgAdvArrowRight } from '@/common/components/svgs/advanced/arrow_right/arrow-right';
import { SvgT } from '@/common/types/general';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionThreeData } from './ui_fct';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-about-section-three',
  imports: [NgComponentOutlet],
  templateUrl: './about-section-three.html',
  styleUrl: './about-section-three.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionThree {
  public readonly SvgRight: SvgT = SvgAdvArrowRight;

  public readonly AboutSectionThreeData = AboutSectionThreeData;
}
