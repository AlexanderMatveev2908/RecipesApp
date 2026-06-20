import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionFourData } from './ui_fct';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';

@Component({
  selector: 'app-about-section-four',
  imports: [ImgLoading],
  templateUrl: './about-section-four.html',
  styleUrl: './about-section-four.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionFour {
  public readonly AboutSectionFourData = AboutSectionFourData;
}
