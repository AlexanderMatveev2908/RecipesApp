

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-timer',
  templateUrl: `./timer.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvTimer {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
