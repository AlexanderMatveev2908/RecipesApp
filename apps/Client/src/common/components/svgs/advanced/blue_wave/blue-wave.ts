

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-blue-wave',
  templateUrl: `./blue-wave.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvBlueWave {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
