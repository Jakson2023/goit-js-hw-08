import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(dataTime, 1000));
function dataTime(data) {
  let timeSet = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(timeSet));
}
player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time') || 0)
);
