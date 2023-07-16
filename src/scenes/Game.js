import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  init() { }

  preload() { }

  create() {
    this.add.image(10, 10, 'indoor', 0);
    this.add.image(24, 10, 'indoor', 1);
  }

  update() { }
}