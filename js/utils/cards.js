
export class CardModule {
    constructor() {
      this.cards = document.querySelectorAll(".card");
  
      this.cards.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
          // Code pour gérer l'effet de survol de la carte
          // ...
  
          el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
          el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  
          el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(184, 196, 211), transparent)`;
        });
  
        el.addEventListener("mouseleave", () => {
          el.children[0].style.transform = "rotateX(0) rotateY(0) scale(1)";
          el.children[1].style.transform = "rotateX(0) rotateY(0) scale(1)";
        });
      });
    }
  }


