import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';
import { NgComponentOutlet } from '@angular/common';
import { SvgT } from '@/common/types/general';
import { SvgAdvBlueWave } from '@/common/components/svgs/advanced/blue_wave/blue-wave';

@Component({
  selector: 'app-home-section-one',
  imports: [ImgLoading, NgComponentOutlet],
  templateUrl: './home-section-one.html',
  styleUrl: './home-section-one.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionOne {
  public readonly SvgBgBlueWave: SvgT = SvgAdvBlueWave;
}
