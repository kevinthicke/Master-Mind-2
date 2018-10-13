var line = document.querySelector(".line");
var button = document.querySelector("button");

class Circle{
    constructor(color){
        this.color = color;
    }
    get createCircle(){
        return this._createCircle;
    }

    _createCircle(){
        this.name = document.createElement("div");
        this.name.className = `circle ${this.color}`;
        line.appendChild(this.name);
    }
}

const unknownColors = ["red", "blue", "green", "violet"];

var createCircles = () => { 
    for (let index of unknownColors){ 
        let circle = new Circle(index);
        circle.createCircle();
    }
}

createCircles();

var getCircles = () => {
    let arrayOfCircles = [];
    for (let index of unknownColors){ 
        let circle = document.querySelector(`.${index}`);
        arrayOfCircles.push(circle);
    }
    return arrayOfCircles;
}

var arrayOfCircles = getCircles();

var changeColorsInCircles = () => {
    for (var circle of arrayOfCircles){

        circle.onclick = function (){
            randomIndex = Math.floor(Math.random()*unknownColors.length);
            circle.style.backgroundColor = unknownColors[randomIndex];
        }
    }
}

changeColorsInCircles();

/*button.onclick = function(){
    for (var index of unknownColors){
        let circle = document.querySelector(`.${index}`);
        randomIndex = Math.floor(Math.random()*unknownColors.length);
        circle.style.backgroundColor = unknownColors[randomIndex];
    }
}*/