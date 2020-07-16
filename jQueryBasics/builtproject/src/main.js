import jQuery from 'jquery'
const $ = jQuery

$.post('https://supernotes.duckdns.org/checkLogin', res => {
  alert(res)
})