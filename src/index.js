import $ from 'jquery';
import './style.scss';

let seconds = 0;
const setTime = () => {
  seconds += 1;
  $('#main').html(`youve been on the page for ${seconds}`);
};

setInterval(setTime, 1000);
