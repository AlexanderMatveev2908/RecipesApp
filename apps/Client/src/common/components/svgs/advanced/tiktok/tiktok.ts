

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-tiktok',
  templateUrl: `./tiktok.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvTiktok {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
