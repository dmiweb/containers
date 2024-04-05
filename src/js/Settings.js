export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);
    this.customSettings = {
      theme: ['light', 'gray', 'dark'],
      music: ['pop', 'rock', 'chillout', 'off', 'trance'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare']
    }
  }

  set config([key, value]) {
    const settingsKey = this.customSettings;

    if (Object.keys(settingsKey).includes(key) && settingsKey[key].includes(value)) {
      this.defaultSettings.set(key, value);
    }
  }

  get config() {
    return this.defaultSettings;
  }
}  