

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-butterfly',
  templateUrl: `./butterfly.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvButterfly {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
