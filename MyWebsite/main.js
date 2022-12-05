let btnclickNum;
let a;
let arr = []
let num = document.querySelector("#number")

const $ = document.querySelector.bind(document)

const btnKQ = $('#buttonEqual')
const btnCong = $('#buttonAdd')


const Num = document.querySelectorAll('[name=btn]')
console.log(Num.length)

for (let i = 0; i < Num.length; i++) {
    btnclickNum = document.querySelector(`#button${i}`);
    let rs = btnclickNum

    btnclickNum.onclick = function () {

        // thêm số vừa nhập vào 1 cái  array
        // arr.push(Number(rs.innerText))
        // 
        // 
        // kq(arr)

        num.innerText += i
        // console.log(num.innerText)
        ketqua(num.innerText)
    };
}

function ketqua(num) {
    console.log(num)

    btnCong.onclick = function () {
        arr.push(Number(num))
        console.log(arr)
    }
}

/* 
function kq(arr) {
    let kq = 0;
    btnCong.onclick = function () {
        for (let i = 0; i < arr.length; ++i) {
            if (arr.length > 1)
                kq = arr[arr.length - 1 - 1] + arr[arr.length - 1]
        }
        num.innerText += btnCong.innerText
        console.log(kq)

    }


}
 */


const btnClear = $('#buttonClear')

btnClear.onclick = function () {
    num.innerText = ""
    arr = []
}