import { FormFieldT } from '@/common/types/dom';
import { SvgT } from '@/common/types/general';
import { UseFormFieldDir } from '@/core/directives/use_form_field_dir';
import { ChangeDetectionStrategy, Component, input, InputSignal, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SvgAdvSearch } from '../../svgs/advanced/search/search';
import { NgComponentOutlet } from '@angular/common';
import { SvgAdvInputSearch } from '../../svgs/advanced/input_search/input-search';

@Component({
  selector: 'app-txt-input',
  imports: [ReactiveFormsModule, NgComponentOutlet],
  templateUrl: './txt-input.html',
  styleUrl: './txt-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TxtInput extends UseFormFieldDir implements OnInit {
  public readonly field: InputSignal<FormFieldT> = input.required();

  ngOnInit(): void {
    this.setupField();
  }

  public readonly SvgSearch: SvgT = SvgAdvInputSearch;
}
