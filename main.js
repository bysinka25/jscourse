class First {
  hello() {
    console.log("Привет я метод родителя!");
  }
}
const first1 = new First();
class Second extends First {
  hello() {
    first1.hello();
    console.log("А я наследуемый метод!");
  }
}
const second1 = new Second();
second1.hello();
