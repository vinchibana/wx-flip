import {KeywordModel} from '../../models/keyword'
import {BookModel} from "../../models/book";

const keywordModel = new KeywordModel()
Component({

  properties: {
    more: {
      type: String,
      observer: function () {
        if (!this.data.q) return
        const length = this.data.dataArray.length
        keywordModel.search(length, this.data.q, (res) => {
          const tmpArray = this.data.dataArray.concat(res.books)
          this.setData({
            dataArray: tmpArray
          })
        })
      }
    }
  },

  data: {
    historyWords: [],
    hotWords: [],
    dataArray: [],
    searching: false,
    q: ''
  },

  attached() {
    const historyWords = keywordModel.getHistory()
    keywordModel.getHot((res) => {
      this.setData({
        hotWords: res.hot
      })
    })
    this.setData({
      historyWords: historyWords
    })
  },

  methods: {
    onCancel(event) {
      this.triggerEvent('cancel', {}, {})
    },
    onExit(event) {
      this.setData({
        searching: false
      })
    },
    onConfirm(event) {
      this.setData({
        searching: true
      })
      // input
      const q = event.detail.value || event.detail.text
      keywordModel.search(0, q, (res) => {
        this.setData({
          dataArray: res.books,
          q: q
        })
        keywordModel.addToHistory(q)
      })
    }
  }
})
