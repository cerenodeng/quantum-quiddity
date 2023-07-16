import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import Game from './scenes/Game';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  backgroundColor: '#eeeeee',
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [Preloader, Game],
};

export default new Phaser.Game(config);