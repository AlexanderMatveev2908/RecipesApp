

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-search',
  templateUrl: `./search.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvSearch {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
