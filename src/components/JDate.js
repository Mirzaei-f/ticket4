import moment from 'jalali-moment'

function JDate(date) {
    return moment.unix(parseInt(date)).locale("fa").format("YYYY/MM/DD");
}

function JTime(date) {
    return moment.unix(parseInt(date)).locale("fa").format("HH:mm");
}

export { JDate, JTime }