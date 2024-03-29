class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")
      };
  
    this.el.reset.addEventListener("click", () => {
        const inputMinutes = document.getElementById("myName").value;
        


        if (inputMinutes < 1000) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateInterfaceTime();
        }
      });

      this.interval = null;
      this.remainingSeconds = 0;
      const btn= document.getElementById("btn");


      this.el.reset.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });

  
    }
  

    
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    }
  
    inputDissapear () {
      document.getElementById("btn").style.display="none"
      document.getElementById("myName").style.display="none"
    }
    bignumberAppear () {
      document.getElementById("largeNumber").style.opacity="1"
    }

    start() {
      if (this.remainingSeconds === 0) return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
        this.inputDissapear();
        this.bignumberAppear();

    }
  
    stop() {
      clearInterval(this.interval);
  
      this.interval = null;
  

    }
  static getHTML() {
      return `
      <div class="timer" >
      <div class="bigNumber">
      <span class="timer__part timer__part--minutes" id="largeNumber">00</span>
   </div>
  <div class="stuff"> 
      <input type="number" id="myName" placeholder="Enter Time"> 
      <button type="button" class="timer__btn timer__btn--reset" id="btn">
          <span >START</span>
      </button>
  </div>
          `;
    }
  }
 
  new Timer(
      document.querySelector(".timer")
  );