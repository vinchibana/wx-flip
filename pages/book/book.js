import {BookModel} from "../../models/book";
import {random} from "../../utils/common";
let bookModel = new BookModel()

Page({

  data: {
    books: Object,
    searching: false,
    more: false
  },

  onLoad(options) {
    bookModel.getHotList((data) => {
      this.setData({
        books: data
      })
    })
  },

  onSearching(event) {
    this.setData({
      searching: true
    })
  },

  onCancel(event) {
    this.setData({
      searching: false
    })
  },

  onReachBottom(event) {
    this.setData({
      more: random(16)
    })
  }
})
