import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  init() { }

  preload() {
    this.load.spritesheet('indoor', 'textures/roguelikeIndoor_transparent.png', {
      frameWidth: 16
    })
  }

  create() {
    this.scene.start('game');
  }

  update() { }
}