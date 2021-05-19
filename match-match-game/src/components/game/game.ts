import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { GameContainer } from '../game__container/game__container';

const FLIP_DELAY = 500;

export class Game extends BaseComponent {
  private readonly gameContainer: GameContainer;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.gameContainer = new GameContainer();
    this.element.appendChild(this.gameContainer.element);
  }

  newGame(images: string[]) {
    this.gameContainer.clear();
    const cards = images
      .concat(images)
      .map(url => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach(card => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.gameContainer.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
