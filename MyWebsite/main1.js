let btnclickNum;
let a;
let arr = []
// òm òm, click số và dấu và click số, òm òm, bấm dấu bằng thì ra kết quả
let num = document.querySelector(".number")

const $ = document.querySelector.bind(document)

const btnKQ = $('.buttonEqual')
const btnCong = $('.buttonAdd')
const btnClear = $('.buttonClear')

const Num = document.querySelectorAll('.btn')
console.log(Num.length)

for (let i = 0; i < Num.length; i++) {
    btnclickNum = document.querySelector(`.button${i}`);
    let rs = btnclickNum

    btnclickNum.onclick = function () {

        arr.push(Number(rs.innerText))
        console.log(arr)
        kq(arr)

        num.innerText += i


    };
}
function kq(arr) {
    let kq = 0;
    btnCong.onclick = function () {
        for (let i = 0; i < arr.length; ++i) {
            if (arr.length > 1)
                kq = arr[arr.length - 1 - 1] + arr[arr.length - 1]
        }
        num.innerText += btnCong.innerText
        console.log(kq)
        // handleTinhToan(num)
    }


}




/* function handleTinhToan(num) {
    console.log(num)
    btnKQ.onclick = function () {
        console.log(num)
    }

} */

btnClear.onclick = function () {
    num.innerText = ""
    arr = []
}

// Bó tay chấm com