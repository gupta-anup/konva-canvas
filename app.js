const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

// Utility: Draw square bracket around a shape
function drawBrackets(x, y, width, height, padding = 5) {
  const leftBracket = new Konva.Line({
    points: [
      x - padding, y - padding,
      x - padding - 5, y - padding,
      x - padding - 5, y + height + padding,
      x - padding, y + height + padding
    ],
    stroke: 'black',
    strokeWidth: 2,
  });

  const rightBracket = new Konva.Line({
    points: [
      x + width + padding, y - padding,
      x + width + padding + 5, y - padding,
      x + width + padding + 5, y + height + padding,
      x + width + padding, y + height + padding
    ],
    stroke: 'black',
    strokeWidth: 2,
  });

  layer.add(leftBracket, rightBracket);
}

// Example data with condition
const male = new Konva.Rect({
  x: 100,
  y: 100,
  width: 40,
  height: 40,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(male);

const maleAdopted = true;
if (maleAdopted) {
  drawBrackets(male.x(), male.y(), male.width(), male.height());
}

const female = new Konva.Circle({
  x: 200,
  y: 120,
  radius: 20,
  stroke: 'black',
  strokeWidth: 2,
});
layer.add(female);

const femaleAdopted = true;
if (femaleAdopted) {
  drawBrackets(female.x() - female.radius(), female.y() - female.radius(), female.radius() * 2, female.radius() * 2);
}

const diamond = new Konva.Line({
  points: [300, 100, 320, 120, 300, 140, 280, 120],
  stroke: 'black',
  strokeWidth: 2,
  closed: true,
});
layer.add(diamond);

const unknownAdopted = true;
if (unknownAdopted) {
  drawBrackets(280, 100, 40, 40); // Approx bounding box of diamond
}

layer.draw();
