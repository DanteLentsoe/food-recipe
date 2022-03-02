class CategoriesModel {
  static find(arg0: (meal: any) => boolean) {
    throw new Error("Method not implemented.");
  }
  [x: string]: string;
  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default CategoriesModel;
