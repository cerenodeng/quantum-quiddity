import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  init() { }

  preload() { }

  create() {
    for (let row = 0; row < 25; row++)
      for (let col = 0; col < 20; col++) {
        if ((row * 20 + col) > 485) break;
        this.add.image(10 + 15 * col, 10 + 15 * row, 'indoor', row * 20 + col);
        this.add.text(3 + 15 * col, 3 + 15 * row, row * 20 + col, { color: '#000', fontSize: '8px' });
      }
  }

  update() { }
}