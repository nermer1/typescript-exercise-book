/* function identity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
} */


/* function identity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
} */

//identity(["1"]);

// 제네릭 타입
/* function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity */

type Bus = {
    color : string,
    model : boolean,
    price : number
}

type TypeChanger <T> = {
    [key in keyof T]: string | number;
};

type newType = TypeChanger<Bus>;

let obj: newType = {
    color: 'red',
    model : 'kia',
    price :300
}


/* type Bus = {
    color : string,
    model : boolean,
    price : number
  }
  
  type TypeChanger <MyType, T> = {
    [key in keyof MyType]: T;
  };
  
  type NewBus = TypeChanger<Bus, boolean>;
  type NewBus2 = TypeChanger<Bus, string[]> */

  /* interface Type {
    [key: string]: number | Type
  }

  let a: Type = {
    'font-size' : {
      'font-size' : {
        'font-size' : 14
      }
    }
  } */

  type Type1 = {
    [key: string]: string|number
  };

  let obj2: Type1 = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
  }

  interface Type2 {
    [key: string]: Type2|number
  }

  let obj3: Type2 = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }


  interface CarType {
    model: string,
    price: number
  }

  class Car implements CarType{
    model: string;
    price: number = 1000;
    constructor(a: string) {
        this.model = a;
    }
  }