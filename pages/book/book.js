import {BookModel} from "../../models/book";

let bookModel = new BookModel()

Page({

  data: {
    books: Object
  },

  onLoad(options) {
    bookModel.getHotList((data) => {
      this.setData({
        books: data
      })
    })
  },

})
