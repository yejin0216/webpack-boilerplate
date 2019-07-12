// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
}

let books = [{"num":"XEM000052822","name":"(1시간에 1권)퀀텀 독서법 : 하루에 30분 3주면 된다!","auth":"김병완 지음","pub":"청림출판","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000066710","name":"(The)Best living guide 65 : 이케아에서 에르메스까지","auth":"정은주 지음","pub":"몽스북","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000063719","name":"(UNION)100시간 영어","auth":"정엄현 지음","pub":"인해","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000063665","name":"(강유석의)착한 중고차","auth":"강유석 지음","pub":"42미디어컨텐츠","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000064989","name":"(8문장으로 끝내는)유럽여행 영어회화","auth":"Mike Hwang 지음","pub":"마이클리시","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000065057","name":"\t(꽃보다 아름다운)청춘 : 옌거링 장편소설","auth":"\t옌거링 지음 ; 문현선 옮김","pub":"더","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000063805","name":"\t(나의 첫 자유여행)뉴욕 = New York","auth":"김미현 지음","pub":"동양북","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000066731","name":"\t(동의보감으로 시작하는)마흔의 몸공부","auth":"박용환 지음","pub":"이와","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000061954","name":"\t(들어주고, 인내하고, 기다리는)유대인 부모처럼","auth":"장화용 지음","pub":"스마트비즈니스","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000064944","name":"\t(밑바닥부터 시작하는)주식투자","auth":"이재준 지음","pub":"원앤원북스","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000064945","name":"\t(반드시 전달되는)메시지의 법칙","auth":"캠 바버 지음 ; 서현정 옮김","pub":"라이팅하우스","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000066743","name":"말하기 영어표현","auth":"이시원 지음","pub":"시원스쿨닷컴","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000064952","name":"긍정 훈육","auth":"사라 오크웰-스미스 지음 ; 최은경 옮김","pub":"북로그컴퍼니","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000060728","name":"4차산업혁명","auth":"최진기 지음","pub":"이지퍼블리씽","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000066684","name":"아웃사이더의 성공 노트","auth":"제니퍼 로몰리니 지음 ; 박아람 옮김","pub":"책읽는수요일","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000066796","name":"\t100년 후에 다시 읽는 독립선언서","auth":"조성일 지음","pub":"창","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000063769","name":"400년 전, 그 법정에서는 무슨 일이 있었나? : 갈릴레오 재판","auth":"다나카 이치로 지음 ; 서수지 옮김","pub":"사람과나무사이","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000061938","name":"감정 식사","auth":"수잔 앨버스 지음 ; 강유리 옮김","pub":"생각속의집","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000062043","name":"검은 모래","auth":"구소은 지음","pub":"바른북","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000064997","name":"고백이 참 희망적이네,유강희 시집","auth":"유강희 지음","pub":"문학동네","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
  {"num":"XEM000065077","name":"B급 세계사","auth":"김상훈 지음","pub":"행복한작업","도서상태":"1","반납예정일":"2019-07-19","슬롯번호":"1"},
]
const request = window.indexedDB.open("BookList");










