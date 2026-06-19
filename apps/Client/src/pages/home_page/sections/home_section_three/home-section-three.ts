import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';

@Component({
  selector: 'app-home-section-three',
  imports: [ImgLoading],
  templateUrl: './home-section-three.html',
  styleUrl: './home-section-three.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionThree {}
