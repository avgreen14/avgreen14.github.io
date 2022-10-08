const { styler, spring, listen, pointer, value } = window.popmotion;

const ball1 = document.querySelector('img');
const divStyler1 = styler(ball1);
const ballXY1 = value({ x: 0, y: 0 }, divStyler1.set);

listen(ball1, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY1.get()).start(ballXY1);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY1.get(),
      velocity: ballXY1.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 500,
    }).start(ballXY1);
  });
if (screen.width <= 699) {
    document.location = "index-mobile.html";
    }
