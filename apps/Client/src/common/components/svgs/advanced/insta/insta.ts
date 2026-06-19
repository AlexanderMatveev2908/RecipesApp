

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-insta',
  templateUrl: `./insta.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvInsta {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
