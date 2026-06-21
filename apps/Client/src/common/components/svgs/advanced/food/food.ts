

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-food',
  templateUrl: `./food.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvFood {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
