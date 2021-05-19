import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[1];
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}

// STREAM of JEGIUS
// import { Component } from './app.api';
// import { CounterService, CounterServiceImplementation } from './counter.service';
// import { Page } from './page';

// export class App implements Component {
//   private readonly application: HTMLDivElement;

//   constructor(private readonly root: Element | null, private readonly counterService: CounterService) {
//     this.application = document.createElement('div');
//     counterService.subscribeOnCounter((counter: number) => console.log(counter));
//   }

//   increment(): void {
//     this.counter += 1;
//     console.log(this.counter);
//   }

//   render(): HTMLElement {
//     this.application.innerHTML = 'Hello Front Page';
//     this.root?.appendChild(this.application);
//     this.application.appendChild(new Page(this.application, this.counterService).render());
//     this.counterService

//     return this.application;
//   }
// }
