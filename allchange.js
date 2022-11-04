var bingbong = document.querySelectorAll(".yas");

function clickText() {
  bingbong.innerText = "삥뽕";
}

// bingbong.forEach((b) =>
//   b.addEventListener("click", (event) => {
//     event.target.innerText = "삥뽕";
//   })
// );

// foreach 반복문은 오직 Array 객체에서만 사용가능한 메서드입니다. (ES6부터는 Map,Set 지원)

// 배열의 요소들을 반복하여 작업을 수행할수 있습니다.

// foreach구문의 인자로 callback함수를 등록할수 있고, 배열의 각 요소들이 반복될 때 이 callback 함수가 호출됨
// callback 함수에서 배열요소의 인덱스와 값에 접근할수 있음

bingbong.forEach(function (b) {
  return b.addEventListener("click", function (event) {
    return (event.target.innerText = "삥뽕");
  });
});

// a => b
//  =
// function(a) {
//     return b
// }
