import {HTTP} from "../utils/http";

class BookModel extends HTTP {
  constructor() {
    super();
  }

  getHotList(success) {
    let params = {
      url: 'book/hot_list',
      success: success
    }
    this.request(params)
  }

  getDetail(bid, success) {
    let params = {
      url: 'book/' + bid + '/detail',
      success: success
    }
    this.request(params)
  }

  getLikeStatus(bid, success) {
    let params = {
      url: 'book/' + bid + '/favor',
    }
    this.request(params)
  }

  getMyBookCount(success) {
    let params = {
      url: 'book/favor/count',
      success: success
    }
    this.request(params)
  }

  getComment(bid, success) {
    let params = {
      url: 'book/' + bid + '/short_comment',
      success: success
    }
    this.request(params)
  }

  postComment(bid, comment, success) {
    let params = {
      url: 'book/add/short_comment',
      success: success,
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      },
      error: (err) => {
        wx.showToast({
          title: '评论失败'
        })
      }
    }
    this.request(params)
  }

}

export {BookModel}
