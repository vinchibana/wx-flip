import {BookModel} from "../../models/book";
import {LikeModel} from "../../models/like";

let bookModel = new BookModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false
  },

  onLoad(options) {
    const bid = options.bid
    bookModel.getDetail(bid, (res) => {
      this.setData({
        book: res
      })
    })
    bookModel.getLikeStatus(bid, (res) => {
      this.setData({
        likeStatus: res
      })
    })
    bookModel.getComment(bid, (res) => {
      this.setData({
        comments: res.comments
      })
    })
    bookModel.getMyBookCount()
  },

  onFakePost(event) {
    this.setData({
      posting: true
    })
  },

  onPost() {
  },
  onCancel() {
    this.setData({
      posting: false
    })
  },
  onLike(event) {
    const like_or_cancel = event.detail.behavior
    likeModel.like(like_or_cancel, this.data.book.id, 400)
  }
})
