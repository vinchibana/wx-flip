import {HTTP} from '../utils/http'

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)
      }
    })
  }

  getClassic(index, flag, sCallback) {
    let key = flag == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `classic/${index}/${flag}`,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
    } else {
      sCallback(classic)
    }

  }

  isFirst(index) {
    return index == 1
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex == index
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex() {
    return wx.getStorageSync('latest')
  }

  _getKey(index) {
    return 'classic-' + index
  }
}

export {ClassicModel}
