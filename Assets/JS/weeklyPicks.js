const searchWeek = document.querySelector('#searchbtn')
const selectedWeek = document.querySelector("#weekSelected")
const selectedPick = document.querySelectorAll('#pick1')
const selectedPick2 = document.querySelectorAll('#pick2')
const selectedPick3 = document.querySelectorAll('#pick3')
const selectedPick4 = document.querySelectorAll('#pick4')
const selectedPick5 = document.querySelectorAll('#pick5')
const selectedPick6 = document.querySelectorAll('#pick6')
const selectedPick7 = document.querySelectorAll('#pick7')
const selectedPick8 = document.querySelectorAll('#pick8')
const selectedPick9 = document.querySelectorAll('#pick9')
const selectedPick10 = document.querySelectorAll('#pick10')
const selectedPick11 = document.querySelectorAll('#pick11')
const selectedPick12 = document.querySelectorAll('#pick12')
const selectedPick13 = document.querySelectorAll('#pick13')
const selectedPick14 = document.querySelectorAll('#pick14')
const selectedPick15 = document.querySelectorAll('#pick15')
const selectedPick16 = document.querySelectorAll('#pick16')
const winner1 = document.querySelectorAll('#winner1')
const winner2 = document.querySelector('#winner2')
const winner3 = document.querySelector('#winner3')
const winner4 = document.querySelector('#winner4')
const winner5 = document.querySelector('#winner5')
const winner6 = document.querySelector('#winner6')
const winner7 = document.querySelector('#winner7')
const winner8 = document.querySelector('#winner8')
const winner9 = document.querySelector('#winner9')
const winner10 = document.querySelector('#winner10')
const winner11 = document.querySelector('#winner11')
const winner12 = document.querySelector('#winner12')
const winner13 = document.querySelector('#winner13')
const winner14 = document.querySelector('#winner14')
const winner15 = document.querySelector('#winner15')
const winner16 = document.querySelector('#winner16')
let w
let p

searchWeek.addEventListener('click', function(e) {
    e.preventDefault()
    w = selectedWeek.value
    w = w.split('Week ')[1]
    var tbody = document.getElementsByClassName('active')
    tbody[0].classList.remove('active')
    var weekEl = document.getElementById('week' + w)
    weekEl.classList.add('active')
    p = w - 1
        // create if statment to highlight backgound of winning picks
    for (let i = 0; i < selectedPick.length; i++) {
        console.log(winner1[p])
        console.log(selectedPick[i])
        if (selectedPick[i].textContent == winner1.textContent) {
            selectedPick[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick2.length; i++) {
        if (selectedPick2[i].textContent == winner2.textContent) {
            selectedPick2[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick3.length; i++) {
        if (selectedPick3[i].textContent == winner3.textContent) {
            selectedPick3[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick4.length; i++) {
        if (selectedPick4[i].textContent == winner4.textContent) {
            selectedPick4[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick5.length; i++) {
        if (selectedPick5[i].textContent == winner5.textContent) {
            selectedPick5[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick6.length; i++) {
        if (selectedPick6[i].textContent == winner6.textContent) {
            selectedPick6[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick7.length; i++) {
        if (selectedPick7[i].textContent == winner7.textContent) {
            selectedPick7[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick8.length; i++) {
        if (selectedPick8[i].textContent == winner8.textContent) {
            selectedPick8[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick9.length; i++) {
        if (selectedPick9[i].textContent == winner9.textContent) {
            selectedPick9[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick10.length; i++) {
        if (selectedPick10[i].textContent == winner10.textContent) {
            selectedPick10[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick11.length; i++) {
        if (selectedPick11[i].textContent == winner11.textContent) {
            selectedPick11[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick12.length; i++) {
        if (selectedPick12[i].textContent == winner12.textContent) {
            selectedPick12[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick13.length; i++) {
        if (selectedPick13[i].textContent == winner13.textContent) {
            selectedPick13[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick14.length; i++) {
        if (selectedPick14[i].textContent == winner14.textContent) {
            selectedPick14[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick15.length; i++) {
        if (selectedPick15[i].textContent == winner15.textContent) {
            selectedPick15[i].classList.add('winner')
        };
    }
    for (let i = 0; i < selectedPick16.length; i++) {
        if (selectedPick16[i].textContent == winner16.textContent) {
            selectedPick16[i].classList.add('winner')
        };
    }
})