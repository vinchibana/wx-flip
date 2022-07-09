import {HTTP} from "../utils/http";

class KeywordModel extends HTTP {
  maxlength = 10
  key = 'q'

  getHistory() {
    const words = wx.getStorageSync(this.key)
    if (!words) {
      return []
    } else {
      return words
    }
  }

  getHot(success) {
    let params = {
      url: 'book/hot_keyword',
      success: success
    }
    this.request(params)
  }

  addToHistory(keyword) {
    let words = this.getHistory()
    const has = words.includes(keyword)
    if (!has) {
      const length = words.length
      if (length >= this.maxlength) {
        words.pop()
      }
      words.unshift(keyword)
      wx.setStorageSync(this.key, words)
    }
  }


  search(start, q, success) {
    let params = {
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      },
      success: success,
    }
    this.request(params)
  }
}

export {KeywordModel}
