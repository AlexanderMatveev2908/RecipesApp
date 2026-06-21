import { FormControl, FormGroup } from '@angular/forms';
import z from 'zod';

export class SearchRecipesFormMng {
  public static readonly schema = z.object({
    maxPrepTime: z
      .array(z.string())
      .refine((vals) => vals.every((val) => ['0', '5', '10'].includes(val)), {
        message: 'Invalid prep time',
      }),

    maxCookTime: z
      .array(z.string())
      .refine((vals) => vals.every((val) => ['0', '5', '10', '15', '20'].includes(val)), {
        message: 'Invalid Cook Time',
      }),

    nameDish: z.string(),
  });

  public static readonly form: () => FormGroup = () =>
    new FormGroup({
      maxPrepTime: new FormControl([], {
        nonNullable: true,
      }),
      maxCookTime: new FormControl([], {
        nonNullable: true,
      }),
      nameDish: new FormControl('', {
        nonNullable: true,
      }),
    });
}

export type SearchRecipesFormT = z.infer<typeof SearchRecipesFormMng.schema>;
