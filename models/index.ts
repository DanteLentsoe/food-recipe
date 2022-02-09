class CategoriesModel {
  [x: string]: string;
  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default CategoriesModel;
