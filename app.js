const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

// Male (Square)
const male = new Konva.Rect({
  x: 100,
  y: 100,
  width: 40,
  height: 40,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(male);

// Female (Circle)
const female = new Konva.Circle({
  x: 200,
  y: 120,
  radius: 20,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(female);

// Unknown (Diamond)
const diamond = new Konva.Line({
  points: [300, 100, 320, 120, 300, 140, 280, 120],
  stroke: 'black',
  strokeWidth: 2,
  closed: true,
});
layer.add(diamond);