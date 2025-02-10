class Mech {
  constructor(name, type, weapon, motor) {
    this.name = name;
    this.type = type;
    this.weapon = weapon;
    this.motor = motor;
  }

  reportLoadout() {
    return `Hello, my name is ${this.name}.<br>
    I am a ${this.type} type mech.<br>
    I carry a ${this.weapon} type weapon and utilize a ${this.motor} type motor.`;
  }
}

class MechBuilder {
  constructor() {
    this.submitBtn = document.getElementById("submit-btn");
    this.mechNameInput = document.getElementById("mech-name-input");
    this.mechTypeInput = document.getElementById("mech-type-input");
    this.mechWeaponInput = document.getElementById("mech-weapon-input");
    this.mechMotorInput = document.getElementById("mech-motor-input");
    this.output = document.querySelector(".mech-output");

    this.submitBtn.addEventListener("click", () => this.createMech());
  }

  createMech() {
    const mechName = this.mechNameInput.value;
    const mechType = this.mechTypeInput.value;
    const mechWeapon = this.mechWeaponInput.value;
    const mechMotor = this.mechMotorInput.value;

    const newMech = new Mech(mechName, mechType, mechWeapon, mechMotor);
    this.displayMechInfo(newMech);
  }

  displayMechInfo(mech) {
    this.output.innerHTML = mech.reportLoadout();
  }
}

// intializes the application
document.addEventListener("DOMContentLoaded", () => {
  new MechBuilder();
});
