import { SvgT } from '@/common/types/general';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { SvgAdvArrowDown } from '../../svgs/advanced/arrow_down/arrow-down';
import { NgComponentOutlet } from '@angular/common';
import { OptionCheckboxT } from '@/common/types/dom';

@Component({
  selector: 'app-checkbox-input',
  imports: [NgComponentOutlet],
  templateUrl: './checkbox-input.html',
  styleUrl: './checkbox-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxInput {
  public readonly label: InputSignal<string> = input.required();
  public readonly optionsCheckbox: InputSignal<OptionCheckboxT[]> = input.required();

  public readonly SvgDown: SvgT = SvgAdvArrowDown;

  public readonly isDrop: WritableSignal<boolean> = signal(false);

  public toggleDrop() {
    this.isDrop.set(!this.isDrop());
  }
}
