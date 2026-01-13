/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

  class Component {
    constructor (public props:T) {

    }
  }

  class Page extends Component {
    pageInfo () {
      console.log(this.props.title);
    }
  }
*/

class Component<T> {
  constructor(public props: T) {}
}

interface IPage {
  title: string;
}

class Page extends Component<IPage> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
