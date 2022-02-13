class Meal {
  // @ts-ignore
  [x: string | boolean | number]: string | boolean | number | string[];
  constructor(
    id: string,
    categoryIdList: string[],
    title: string,
    budget: string,
    difficulty: string,
    imgPath: string,
    duration: number,
    ingredients: string[],
    instructions: string[],
    steps: boolean,
    isGlutenFree: boolean,
    isVegan: boolean,
    isVeg: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.budget = budget;
    this.categoryIdList = categoryIdList;
    this.title = title;
    this.difficulty = difficulty;
    this.imgPath = imgPath;
    this.duration = duration;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVeg = isVeg;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
