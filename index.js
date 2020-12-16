var axios = require("axios");
var fd = require("axios");

module.exports = class Sticker {
  constructor() {
    this.root = 'http://api.sticker.ly/v3.1';
  }

  static async getStickers(n) {
    var stickers = await axios({
      url: this.root + '/status/overview?size=' + (n || 30)
    });
    return stickers.data;
  }
}
