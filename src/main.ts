import './style.css'

export class TestA {
  static myStaticProperty: number[];

  static {
    this.myStaticProperty = [1,2,3,4,5];
    console.log("Static initialization block executed", this.myStaticProperty.at(-2));
  }  
}
