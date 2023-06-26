const seasonScheduleAPI = "https://api.sportradar.us/nfl/official/trial/v5/en/games/2022/REG/schedule.json?api_key=xywbpqjaddddgejnq8gjqmsn"
const weeklySchedule = "https://api.sportradar.us/nfl/official/trial/v5/en/games/2022/reg/02/schedule.JSON?api_key=xywbpqjaddddgejnq8gjqmsn"
    // const seasonSchedule = {
    //     scheduled: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // }

const searchWeek = document.querySelector('#searchbtn')
const selectedWeek = document.querySelector("#weekSelected")
const when1El = document.querySelector("#when1")
let w

var game = {
    0: {
        dateAndTime: '',
        team1: '',
        team2: '',
        team1Score: '',
        team2Score: '',
        status: '',
        sequence: ''
    }
    //,
    // 1:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 2:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 3:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 4:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 5:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 6:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 7:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 8:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 9:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 10:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 11:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 12:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 13:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 14:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
    // 15:{
    //     dateAndTime: '',
    //     team1: '',
    //     team2: '',
    //     team1Score: '',
    //     team2Score: '',
    //     status: '',
    //     sequence: ''
    // },
}

searchWeek.addEventListener('click', function(e) {
    e.preventDefault()
    w = selectedWeek.value
    w = w.split('Week ')[1]
    var tbody = document.getElementsByClassName('active')
    tbody[0].classList.remove('active')
    var weekEl = document.getElementById('week' + w)
    weekEl.classList.add('active')
    getSeasonSchedule(w)
})

function getSeasonSchedule(w) {
    fetch(seasonScheduleAPI)
        .then((response) => {
            let data = response.json()
            console.log(data)
            return data
        })
        .then((data) => {
            w = w - 1
            game[w].dateAndTime.value = data.weeks[w].games[w].scheduled
                // games[0].team1.value = data.
                // games[0].team2.value = data.
                // games[0].team1Score.value = data.
                // games[0].team2Score.value = data.
                // games[0].status.value = data.
                // games[0].sequence.value = data.
        })
        .then(function() {
            displayGames()
        })
}

function displayGames() {
    when1El.innerHTML = game[0].scheduled
}