var numberList = [
  {
    color: ["Red"]
  },
  {
    color: ["Green"]
  },
  {
    color: ["Blue"]
  }
];

var elements = [];

function number(data) {
  var that = this;
  this.begin = 0;
  this.color = data.color;
  this.ele = document.createElement("div");
  this.eleBegin = document.createElement("div");
  this.eleBegin.innerHTML = this.begin;
  this.eleColor = document.createElement("div");
  this.ele.addEventListener("click", function () {
      that.increaseNum();
    });
  this.eleBegin.style.fontSize = "18px";
  this.eleBegin.style.color = "white";
  this.eleBegin.style.width = "200px";
  this.eleBegin.style.height = "100px";
  this.eleBegin.style.borderRadius = "10px";
  this.eleBegin.style.display = "flex";
  this.eleBegin.style.alignItems = "center";
  this.eleBegin.style.justifyContent = "center";
  if (data.color == "Red") {
    this.eleBegin.style.backgroundColor = "red";
  } else if (data.color == "Green") {
    this.eleBegin.style.backgroundColor = "green";
  } else if (data.color == "Blue") {
    this.eleBegin.style.backgroundColor = "blue";
  }
  this.ele.appendChild(this.eleBegin);
  this.ele.appendChild(this.eleColor);
  document.body.appendChild(this.ele);
}

number.prototype.increaseNum = function () {
  this.begin = this.begin + 1;
  this.eleBegin.innerHTML = this.begin;
};

for (var ii = 0; ii < numberList.length; ii++) {
  elements.push(new number(numberList[ii]));
}

// Using JavaScript Constructors, append a div into the body of the HTML, and have it so when I click on that div, it increases the number value inside of it by 1, with its starting value at 0 printed inside of it. You will need to use prototypes to make your clicking functionality work.