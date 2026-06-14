

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-app-logo',
  templateUrl: `./app-logo.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvAppLogo {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
