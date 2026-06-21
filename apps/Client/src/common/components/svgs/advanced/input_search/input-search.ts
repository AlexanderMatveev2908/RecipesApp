

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-input-search',
  templateUrl: `./input-search.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvInputSearch {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
