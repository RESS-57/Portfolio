class BinaryDisplay {
  constructor() {
    this.numberContainer = document.querySelector(".number-container");
    this.lights = document.querySelectorAll(".light");
    this.binaryNumbers = [];
    this.maxNumbers = 12;
  }

  generateRandomBinary() {
    return Math.floor(Math.random() * 256)
      .toString(2)
      .padStart(8, "0");
  }

  updateDisplay() {
    const newBinary = this.generateRandomBinary();
    this.binaryNumbers.unshift(newBinary);
    if (this.binaryNumbers.length > this.maxNumbers) {
      this.binaryNumbers.pop();
    }

    this.renderNumbers();
    this.updateLights(newBinary);
  }

  renderNumbers() {
    this.numberContainer.innerHTML = "";
    this.binaryNumbers.forEach((binary) => {
      const numberElement = document.createElement("div");
      numberElement.classList.add("number");
      numberElement.textContent = binary;
      this.numberContainer.appendChild(numberElement);
    });
  }

  updateLights(binary) {
    this.lights.forEach((light, index) => {
      light.classList.toggle("on", binary[index] === "1");
    });
  }

  start() {
    this.updateDisplay();
    setInterval(() => this.updateDisplay(), 600);
  }
}

// Usage
const binaryDisplay = new BinaryDisplay();
binaryDisplay.start();
