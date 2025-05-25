const log = console.log;

const stage = new Konva.Stage({
  height: window.innerHeight,
  width: window.innerWidth,
  container: 'container',
});

const layer = new Konva.Layer();
stage.add(layer);

// Rectangle
const rect = new Konva.Rect({
  x: 20,
  y: 20,
  width: 100,
  height: 100,
  fill: 'pink',
  stroke: 'black',
  strokeWidth: 4,
  cornerRadius: 10,
  opacity: 1,
  draggable: true,
});
layer.add(rect);

// Circle
const circle = new Konva.Circle({
  x: 180,
  y: 70,
  radius: 50,
  fill: 'lightblue',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});
layer.add(circle);

// Ellipse
const ellipse = new Konva.Ellipse({
  x: 320,
  y: 70,
  radius: { x: 60, y: 40 },
  fill: 'lightgreen',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});
layer.add(ellipse);

// Line
const line = new Konva.Line({
  points: [400, 20, 500, 100, 450, 120],
  fill: '',
  stroke: 'orange',
  strokeWidth: 4,
  lineCap: 'round',
  lineJoin: 'round',
  draggable: true,
});
layer.add(line);

// Arrow
const arrow = new Konva.Arrow({
  points: [520, 20, 620, 100],
  pointerLength: 15,
  pointerWidth: 15,
  fill: 'red',
  stroke: 'red',
  strokeWidth: 4,
  draggable: true,
});
layer.add(arrow);

// Star
const star = new Konva.Star({
  x: 700,
  y: 70,
  numPoints: 5,
  innerRadius: 20,
  outerRadius: 40,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});
layer.add(star);

// Regular Polygon
const polygon = new Konva.RegularPolygon({
  x: 800,
  y: 70,
  sides: 6,
  radius: 40,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});
layer.add(polygon);

// Text
const text = new Konva.Text({
  x: 20,
  y: 150,
  text: 'Konva Shapes',
  fontSize: 30,
  fontFamily: 'Calibri',
  fill: 'black',
  draggable: true,
});
layer.add(text);

// Ring
const ring = new Konva.Ring({
  x: 200,
  y: 200,
  innerRadius: 30,
  outerRadius: 50,
  fill: 'cyan',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});
layer.add(ring);

// Wedge
const wedge = new Konva.Wedge({
  x: 320,
  y: 200,
  radius: 50,
  angle: 60,
  fill: 'magenta',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
  rotation: 30,
});
layer.add(wedge);

// Image (placeholder, needs an actual image)
const imageObj = new window.Image();
imageObj.onload = function () {
  const konvaImage = new Konva.Image({
    x: 400,
    y: 150,
    image: imageObj,
    width: 100,
    height: 100,
    draggable: true,
  });
  layer.add(konvaImage);
  layer.draw();
};
imageObj.src = 'https://konvajs.org/assets/lion.png';

// Redraw layer
layer.draw();