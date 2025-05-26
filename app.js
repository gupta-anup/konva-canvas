const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

// draw bracket function
function drawBrackets(x, y, width, height, padding = 5) {
  const left = new Konva.Line({
    points: [
      x - padding, y - padding,
      x - padding - 5, y - padding,
      x - padding - 5, y + height + padding,
      x - padding, y + height + padding
    ],
    stroke: 'black',
    strokeWidth: 2
  });
  const right = new Konva.Line({
    points: [
      x + width + padding, y - padding,
      x + width + padding + 5, y - padding,
      x + width + padding + 5, y + height + padding,
      x + width + padding, y + height + padding
    ],
    stroke: 'black',
    strokeWidth: 2
  });
  layer.add(left, right);
}

const dad = new Konva.Rect({
  x: 150,
  y: 50,
  width: 40,
  height: 40,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(dad);

const mom = new Konva.Circle({
  x: 250,
  y: 70,
  radius: 20,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(mom);

// connect dad and mom
layer.add(new Konva.Line({
  points: [190, 70, 230, 70],
  stroke: 'black',
  strokeWidth: 2,
}));

// line to children
layer.add(new Konva.Line({
  points: [210, 70, 210, 120],
  stroke: 'black',
  strokeWidth: 2,
}));

// line connecting children
layer.add(new Konva.Line({
  points: [119, 120, 301, 120],
  stroke: 'black',
  strokeWidth: 2,
}));

// son
const son = new Konva.Rect({
  x: 100,
  y: 140,
  width: 40,
  height: 40,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(son);
layer.add(new Konva.Line({
  points: [120, 120, 120, 140],
  stroke: 'black',
  strokeWidth: 2,
}));

// daughter
const daughter = new Konva.Circle({
  x: 210,
  y: 160,
  radius: 20,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(daughter);
layer.add(new Konva.Line({
  points: [210, 120, 210, 140],
  stroke: 'black',
  strokeWidth: 2,
}));

// adopted Son
const adopted = new Konva.Rect({
  x: 280,
  y: 140,
  width: 40,
  height: 40,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(adopted);

// dashed line for adopted
layer.add(new Konva.Line({
  points: [300, 120, 300, 140],
  stroke: 'black',
  strokeWidth: 2,
  dash: [5, 5],
}));

// brackets around adopted
drawBrackets(adopted.x(), adopted.y(), adopted.width(), adopted.height());