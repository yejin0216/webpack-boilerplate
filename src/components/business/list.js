/**
 * 도서 목록을 세팅하는 화면이다. 
 * 
 * @author yejin kim
 */
import { __book_data } from "../data/book.js"

export const makeList = () => {
  let template = "";
  let book = __book_data.map(book => {
    template +=
      `<div class="row row__list">
        <div class="col-md-1">${book.num}</div>
        <div class="col-md-4">${book.name}</div>
        <div class="col-md-2">${book.auth}</div>
        <div class="col-md-2">${book.pub}</div>
        <div class="col-md-1">${book.rtn_dt != "" ? `${book.sttus}` : `<button>대여</button>`}</div>
        <div class="col-md-2">${book.rtn_dt}</div>
      </div>`;
  });
  document.getElementById("result").innerHTML = template;
}

