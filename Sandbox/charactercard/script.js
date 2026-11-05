const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 80,

  attacked() {
    this.health -= 20;

    // Prevent health from going below zero
    if (this.health < 0) {
      this.health = 0;
    }

    updateCharacter();

    if (this.health === 0) {
      document.querySelector("#message").textContent =
        `${this.name} has died.`;

      document.querySelector("#attack-button").disabled = true;
      document.querySelector("#level-up-button").disabled = true;
    }
  },

  levelUp() {
    this.level += 1;
    updateCharacter();
  }
};

function updateCharacter() {
  document.querySelector("#health").textContent = character.health;
  document.querySelector("#level").textContent = character.level;
}

document.querySelector("#attack-button").addEventListener("click", () => {
  character.attacked();
});

document.querySelector("#level-up-button").addEventListener("click", () => {
  character.levelUp();
});