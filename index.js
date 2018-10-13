var line = document.querySelector(".line");
var button = document.querySelector("button");

class Circle {
    constructor(color) {
        this.color = color;
    }
    get createCircle() {
        return this._createCircle;
    }

    _createCircle() {
        this.name = document.createElement("div");
        this.name.className = `circle ${this.color}`;
        line.appendChild(this.name);
    }
}

const unknownColors = ["red", "blue", "green", "violet"];

var createCircles = () => {
    let arrayOfCircles = [];
    for (let index of unknownColors) {
        let circle = new Circle(index);
        circle.createCircle();
        arrayOfCircles.push(circle);
    }
    return arrayOfCircles;
}

let arrayOfCircles = createCircles();

var asignColorsClick = () => {
    for (let index in arrayOfCircles){
        arrayOfCircles[index].name.onclick = () => {
           randomIndex = Math.floor(Math.random()*arrayOfCircles.length);
            arrayOfCircles[index].name.style.backgroundColor = unknownColors[randomIndex];
        }
    }
}

asignColorsClick();