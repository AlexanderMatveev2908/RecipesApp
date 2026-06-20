import { SvgAdvButterfly } from '@/common/components/svgs/advanced/butterfly/butterfly';
import { SvgAdvInsta } from '@/common/components/svgs/advanced/insta/insta';
import { SvgAdvTiktok } from '@/common/components/svgs/advanced/tiktok/tiktok';
import { SvgT } from '@/common/types/general';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgComponentOutlet],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public readonly SvgButterfly: SvgT = SvgAdvButterfly;
  public readonly SvgInsta: SvgT = SvgAdvInsta;
  public readonly SvgTikTok: SvgT = SvgAdvTiktok;
}
