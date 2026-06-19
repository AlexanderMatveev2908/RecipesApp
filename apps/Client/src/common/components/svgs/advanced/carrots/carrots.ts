

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-carrots',
  templateUrl: `./carrots.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvCarrots {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
