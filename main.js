const DomElement = function (
  selector,
  backgroundColor,
  width,
  height,
  fontSize
) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.backgroundColor = backgroundColor;
  this.fontSize = fontSize;
  this.create = function () {
    if (this.selector === ".block") {
      let div = document.createElement("div");
      div.className = this.selector;
      div.innerHTML = "А это class";
      document.body.append(div);
      div.style.cssText =
        "width: 100px; height: 200px; background-color: red; font-size: 20px;";
    } else if (this.selector === "#block") {
      let p = document.createElement("p");
      p.id = this.selector;
      p.innerHTML = "А это id";
      document.body.append(p);
      p.style.cssText = "font-size: 24px";
    }
  };
};

// const domElement = new DomElement();
const test1 = new DomElement(".block", "100px", "100px", "red", "20px");
const test2 = new DomElement("#block", "100px", "100px", "red", "20px");
// const test2 = new DomElement("#p");s
test1.create();
test2.create();
// test2.create();
console.log(test1);
console.log(test2);
