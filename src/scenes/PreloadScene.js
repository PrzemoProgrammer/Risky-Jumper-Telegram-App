class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }
  preload() {
    // localStorage.setItem("bestScore", 0);
    // localStorage.setItem("nickname", "Usunac");
    // localStorage.setItem("id", 7370298718811313000);
    // localStorage.clear()

    this.load.on("complete", () => {
      // localStorage.clear();
      this.handleNextScene();
    });
    this.load.plugin(
      "rexinputtextplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js",
      true
    );
    this.load.plugin(
      "rexninepatchplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexninepatchplugin.min.js",
      true
    );

    this.load.setPath("./src/assets/images");
    // this.loadAtlas();
    this.loadImages();
    this.loadFonts();
    this.loadAudio();
  }
  create() {
    this.loadPlugin();
    this.addAnims();
    this.addAudio();
  }

  loadImages() {
    this.images = [
      "background",
      "playButton",
      "riskyJumperText",
      "settingsButton",
      "bg1",
      "floor",
      "replayButton",
      "scoreBoard",
      "achivButton",
      "ground",
      "platformFloor",
      "rankingButton",
      "rankScreenMedal",
      "rankScreenMedalColor",
      "newRecordUpdate",
      "medalSmaller",
      "smallerMedalColor",
      "backButton",
      "pauseButton",
      "pauseText",
      "settingsText",
      "soundOnOff",
      "slider",
      "rankingPlayerBg",
      "hand1",
      "hand2",
      "tutorialLine",
      "darkScreen",
      "shareButton",
      "firstPlace",
      "secondPlace",
      "thirdPlace",
      "leaderBoardStatus",
      "loginProfil",
      "medalShine",
      "medalText",
      "loading",
      "menuBg",
      "menuLayer1",
      "heroMenuIcon",
      "menuPlatform1",
      "menuPlatform2",
      "leaderboardText",
      "startButton",
      "metamask",
      "connect_metamask_text",
      "install_metamask_text",
      "false_icon",
      "correct_icon",
      "NFT_0",
      "NFT_1",
      "NFT_2",
      "NFT_3",
      "mint_nft_text",
      "mint_button",
      "mint_button",
      "choose_NFT_frame",
      "choose_skin_text",
      "sepolia_testnet_image",
      "tg-wallet-icon",
      "dailyReward",
      "informationWIndow",
      "coin",
      "okButton",
      "telegramStar",
    ];

    this.images.forEach((img) => {
      this.load.image(img, `${img}.png`);
    });
    for (let i = 1; i <= 2; i++) {
      this.load.image(`layer${i}`, `layer${i}.png`);
    }
    for (let i = 1; i <= 9; i++) {
      this.load.image(`floor${i}`, `floor${i}.png`);
    }

    for (let i = 0; i < 4; i++) {
      this.load.spritesheet(`player_${i}`, `player_${i}.png`, {
        frameWidth: 855 / 9,
        frameHeight: 95,
      });
    }
  }

  addAnims() {
    for (let i = 0; i < 4; i++) {
      this.anims.create({
        key: `moveRight_${i}`,
        frames: this.anims.generateFrameNumbers(`player_${i}`, {
          frames: [1, 2, 3, 2],
        }),
        frameRate: 8,
        repeat: -1,
      });
      this.anims.create({
        key: `idle_${i}`,
        frames: [{ key: `player_${i}`, frame: 0 }],
        frameRate: 20,
      });
      this.anims.create({
        key: `jump_${i}`,
        frames: [{ key: `player_${i}`, frame: 5 }],
        frameRate: 20,
      });
      this.anims.create({
        key: `preparing_${i}`,
        frames: [{ key: `player_${i}`, frame: 4 }],
        frameRate: 20,
      });
      this.anims.create({
        key: `fall_${i}`,
        frames: [{ key: `player_${i}`, frame: 6 }],
        frameRate: 20,
      });
      this.anims.create({
        key: `hurt_${i}`,
        frames: [{ key: `player_${i}`, frame: 8 }],
        frameRate: 20,
      });
      this.anims.create({
        key: `dead_${i}`,
        frames: [{ key: `player_${i}`, frame: 7 }],
        frameRate: 20,
      });
    }
  }

  handleNextScene() {
    this.scene.start("LoginScene");
    // this.scene
    //   .start("PlayScene")
    //   .pause("PlayScene")
    //   .start("BackgroundScene")
    //   .start("ConnectBlockchainScene")
    //   .swapPosition("PlayScene", "BackgroundScene")
    //   .swapPosition("BackgroundScene", "ConnectBlockchainScene");
  }

  loadPlugin() {
    this.load.plugin(
      "rexinputtextplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js",
      true
    );
    this.load.plugin(
      "rexninepatchplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexninepatchplugin.min.js",
      true
    );
  }

  loadFonts() {
    this.load.setPath("./src/assets/fonts");
    // this.load.bitmapFont("pixel2", "pixel2.png", "pixel2.json");
    // this.load.font("pixel", "pixel.ttf");
  }

  // loadAtlas() {
  //   this.load.atlas("atlas_1", "texture-0.png", "texture-0.json");
  //   this.load.atlas("atlas_2", "texture-1.png", "texture-1.json");
  // }

  loadAudio() {
    this.audio = [
      "mainMenu",
      "click",
      "hurt",
      "startJump",
      "endJump",
      "awardReward",
    ];
    this.audio.forEach((name) => {
      this.load.audio(name, `../audio/${name}.mp3`);
    });
  }
  addAudio() {
    this.game.audio = {};
    this.audio.forEach(
      (name) => (this.game.audio[name] = this.sound.add(name))
    );
    this.game.audio.mainMenu.setLoop(true);
    this.setupAudioVolume();
  }
  setupAudioVolume() {
    this.game.audio.hurt.setVolume(0.5);
  }
}
