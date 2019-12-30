import * as blessed from 'blessed';
import CubeTimer, { TickEvent, EventType } from 'can-cube-timer';
import { formatTime } from './utils';

const timer = new CubeTimer({
  interval: 10,
});

const screen = blessed.screen({
  smartCSR: true,
});

screen.title = "Can's Cubing Timer";

const timerBox = blessed.text({
  top: 'center',
  left: 'center',
  width: 'shrink',
  align: 'right',
  height: 'shrink',
  content: 'test',
  tags: true,
});

screen.append(timerBox);
screen.cursorColor('#292D3E');

timer.on(EventType.Tick, (event: TickEvent) => {
  timerBox.setContent(`${formatTime(event.time)}`);
  screen.render();
});

screen.key('return', () => {
  timer.start();
  screen.render();
});

screen.key(['escape', 'q', 'C-c'], () => {
  timer.stop();
  return process.exit(0);
});

screen.render();
