import { Nullable, OrNone, SvgT } from '@/common/types/general';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  InputSignal,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { SvgAdvArrowDown } from '../../svgs/advanced/arrow_down/arrow-down';
import { NgComponentOutlet } from '@angular/common';
import { OptionCheckboxT, RefDomT } from '@/common/types/dom';
import { UseFormFieldDir } from '@/core/directives/use_form_field_dir';

@Component({
  selector: 'app-checkbox-input',
  imports: [NgComponentOutlet],
  templateUrl: './checkbox-input.html',
  styleUrl: './checkbox-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxInput extends UseFormFieldDir implements OnInit {
  public readonly label: InputSignal<string> = input.required();
  public readonly optionsCheckbox: InputSignal<OptionCheckboxT[]> = input.required();

  public readonly SvgDown: SvgT = SvgAdvArrowDown;

  public readonly isDrop: WritableSignal<boolean> = signal(false);

  @ViewChild('btnRef') btnRef: RefDomT;
  @ViewChild('dropRef') dropRef: RefDomT;

  public toggleDrop() {
    this.isDrop.set(!this.isDrop());
  }

  ngOnInit(): void {
    this.setupField();
  }

  public handleClick(optVal: string) {
    this.ctrl().markAsDirty();
    this.ctrl().markAsTouched();

    let curr: string[] = this.val?.() as unknown as string[];
    if (!curr) curr = [];

    if (curr?.includes(optVal)) this.ctrl().setValue(curr.filter((el) => el !== optVal));
    else this.ctrl().setValue([...curr, optVal]);
  }

  public isChecked(optVal: string) {
    let curr = this.val?.() as unknown as string[];
    if (!curr) curr = [];

    return curr.includes(optVal);
  }

  @HostListener('document:click', ['$event'])
  public closeDropOnOut(e: MouseEvent): void {
    const target = e.target as Node;

    const btnEl = this.btnRef?.nativeElement;
    const dropEl = this.dropRef?.nativeElement;

    const clickedBtn = btnEl?.contains(target);
    const clickedDrop = dropEl?.contains(target);

    if (!clickedBtn && !clickedDrop) {
      this.isDrop.set(false);
    }
  }
}
