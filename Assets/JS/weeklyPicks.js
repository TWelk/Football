const searchWeek = document.querySelector('#searchbtn')
const selectedWeek = document.querySelector("#weekSelected")
let w

searchWeek.addEventListener('click', function(e) {
    e.preventDefault()
    w = selectedWeek.value
    w = w.split('Week ')[1]
    var tbody = document.getElementsByClassName('active')
    tbody[0].classList.remove('active')
    var weekEl = document.getElementById('week' + w)
    weekEl.classList.add('active')
})