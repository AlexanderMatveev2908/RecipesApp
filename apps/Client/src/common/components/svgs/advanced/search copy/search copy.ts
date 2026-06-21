

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-search copy',
  templateUrl: `./search copy.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvSearchCopy {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
