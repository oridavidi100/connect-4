import Model from './model';
import View from './view';

class Controller {
    constructor() {
      this.Connect4 = new Connect4();
      this.view = new View();
  
      this.view.restartEvent.addListener(() => {
        document.querySelector('.board').remove();
        document.querySelector('.message').remove();
  
        const app = new Controller();
        app.run();
      });
      this.view.playEvent.addListener(move => {
        this.Connect4.play(move);
      });
  
      this.Connect4.updateCellEvent.addListener(data => {
        this.view.updateCell(data);
      });
      this.Connect4.victoryEvent.addListener(winner => {
        this.view.victory(winner);
      });
      this.Connect4.drawEvent.addListener(() => {
        this.view.draw();
      });
    }
  
    run() {
      this.view.render();
    }
  }


  
export default Controller;