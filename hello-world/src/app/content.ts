export default class Content {

  // putting "public" or "private" into the constructor parameter
  // will automatically create a member variable
  // and automatically do the assignment

  constructor (
    public title: string,
    public text: string,
    public important: boolean) {

  }
}

/* typescript has a shortcut for this syntax */

/*
export default class Content {

  public title: string;
  public text: string;

  constructor(title: string, text: string) {

    this.title = title;
    this.text = text;
  }

}
*/
