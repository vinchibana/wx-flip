// components/book/index.js
Component({

  properties: {
    book: Object
  },

  data: {
    title: String,
    author: String,
    img: String
  },

  methods: {
    onTap(event) {
      const bid = this.properties.book.id
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${bid}`
      })
    }
  }
})
