import * as blessed from 'blessed';

const screen = blessed.screen({
  smartCSR: true,
});

screen.title = "Can's Cubing Timer";

const timerBox = blessed.box({
  top: 'center',
  left: 'center',
  width: '100%',
  height: '50%',
  content: '01:00',
  tags: true,
  border: { type: 'line' },
});

screen.append(timerBox);

timerBox.key('space', () => {
  timerBox.setContent('Space pressed!');
  screen.render();
});

screen.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0);
});

screen.render();
