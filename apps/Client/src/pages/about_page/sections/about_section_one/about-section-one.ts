import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';

@Component({
  selector: 'app-about-section-one',
  imports: [ImgLoading],
  templateUrl: './about-section-one.html',
  styleUrl: './about-section-one.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionOne {}
