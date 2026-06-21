import { OptionCheckboxT } from '@/common/types/dom';
import { v4 } from 'uuid';

export class SearchRecipesUiFct {
  public static readonly optionsPrepTime: OptionCheckboxT[] = [0, 5, 10].map((time) => ({
    id: v4(),
    val: String(time),
    label: `${time} Minutes`,
  }));

  public static readonly optionsCookTime: OptionCheckboxT[] = [0, 5, 10, 15, 20].map((time) => ({
    id: v4(),
    val: String(time),
    label: `${time} Minutes`,
  }));
}
