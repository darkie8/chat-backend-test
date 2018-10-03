const moment = require('moment')
const momenttz = require('moment-timezone')
const timeZone = 'Asia/Kolkata'
let now = () => moment().format();


let getLocalTime = () => 
moment(now).tz(timeZone).format('MMMM Do YYYY, h:mm:ss');


let convertToLocalTime = (time) =>  momenttz.tz(getLocalTime(), timezone).clone().tz(time).format('MMMM Do YYYY, h:mm:ss')

module.exports = {
  now: now,
  getLocalTime: getLocalTime,
  convertToLocalTime: convertToLocalTime
}