import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  init() { }

  preload() {
    this.load.spritesheet('indoor', 'textures/roguelikeIndoor_transparent.png', {
      frameWidth: 16, frameHeight: 16, spacing: 1, startFrame: 0, endFrame: 485
    });
  }

  create() {
    this.scene.start('game');
  }

  update() { }
}