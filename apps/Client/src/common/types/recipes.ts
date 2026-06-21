export interface IngredientT {
  ingredient: string;
  id: string;
}

export interface InstructionT {
  instruction: string;
  id: string;
}

export interface RecipeT {
  id: string;
  name: string;
  description: string;
  servings: number;
  prep: string;
  cook: string;
  img: string;

  ingredients: IngredientT[];
  instructions: InstructionT[];
}
