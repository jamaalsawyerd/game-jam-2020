const ShakePlugin = require('../plugins/rexshakepositionplugin');
const WebFontLoaderPlugin = require('../plugins/rexwebfontloader');
const AwaitLoaderPlugin = require('../plugins/rexawaitloaderplugin');
const HslAdjustPipelinePlugin = require('../plugins/rexhsladjustpipelineplugin');
const VideoPlugin = require('../plugins/rexvideoplugin');
const SoundFadePlugin = require('../plugins/rexsoundfadeplugin');

/**
 * Default configuration file for our Phaser games.
 */

const defaultConfig = {
  width: 960,
  height: 540,
  transparent: false,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 5000 }
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'phaser',
  },
  loader: {
    crossOrigin: 'anonymous',
  },
  plugins: {
    global: [{
      key: 'RexShake',
      plugin: ShakePlugin,
      start: true,
    },
    {
      key: 'RexHslAdjustPipeline',
      plugin: HslAdjustPipelinePlugin,
      start: true
    },
    {
      key: 'RexAwaitLoader',
      plugin: AwaitLoaderPlugin,
      start: true
    },
    {
      key: 'RexVideoPlugin',
      plugin: VideoPlugin,
      start: true
    },
    {
      key: 'RexSoundFadePlugin',
      plugin: SoundFadePlugin,
      start: true
    },
    {
      key: 'RexWebFontLoader',
      plugin: WebFontLoaderPlugin,
      start: true
    }],
  },
  dom: {
    createContainer: false
  }
};
module.exports = defaultConfig;
