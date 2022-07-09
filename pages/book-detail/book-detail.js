import {BookModel} from "../../models/book";
import {LikeModel} from "../../models/like";

let bookModel = new BookModel();
let likeModel = new LikeModel();
Page({

  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false,
  },

  onLoad(options) {
    const bid = options.bid;
    bookModel.getDetail(bid, (res) => {
      this.setData({
        book: res,
      });
    });
    bookModel.getLikeStatus(bid, (res) => {
      this.setData({
        likeStatus: res,
      });
    });
    bookModel.getComment(bid, (res) => {
      this.setData({
        comments: res.comments,
      });
    });
  },

  onFakePost(event) {
    this.setData({
      posting: true,
    });
  },

  onPost(event) {
    const comment = event.detail.text || event.detail.value;
    if (!comment) return;
    if (comment.length > 12) {
      wx.showToast({
        title: "短评最多12个字",
        icon: "none",
      });
      return;
    }
    bookModel.postComment(this.data.book.id, comment, (res) => {
      wx.showToast({
        title: "+1",
        icon: "none",
      });
      this.data.comments.unshift({
        content: comment,
        nums: 1,
      });
      this.setData({
        comments: this.data.comments,
        posting: false,
      });
    });
  },

  onCancel() {
    this.setData({
      posting: false,
    });
  },
  onLike(event) {
    const like_or_cancel = event.detail.behavior;
    likeModel.like(like_or_cancel, this.data.book.id, 400);
  },
});
