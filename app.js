
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

function drawGenderIcon(x, y, gender, highlight = false) {
  const group = new Konva.Group({ x, y });

  // Gender symbols
  if (gender === 'male') {
    group.add(new Konva.Circle({
      x: 0,
      y: 0,
      radius: 20,
      stroke: 'blue',
      strokeWidth: 2,
    }));

    group.add(new Konva.Line({
      points: [0, -20, 15, -35],
      stroke: 'blue',
      strokeWidth: 2,
    }));

    group.add(new Konva.Line({
      points: [10, -35, 15, -35, 15, -30],
      stroke: 'blue',
      strokeWidth: 2,
    }));
  } else if (gender === 'female') {
    group.add(new Konva.Circle({
      x: 0,
      y: 0,
      radius: 20,
      stroke: 'pink',
      strokeWidth: 2,
    }));

    group.add(new Konva.Line({
      points: [0, 20, 0, 35],
      stroke: 'pink',
      strokeWidth: 2,
    }));

    group.add(new Konva.Line({
      points: [-5, 35, 5, 35],
      stroke: 'pink',
      strokeWidth: 2,
    }));
  } else if (gender === 'unknown') {
    group.add(new Konva.Line({
      points: [-20, 0, 0, -20, 20, 0, 0, 20, -20, 0],
      stroke: 'gray',
      strokeWidth: 2,
      closed: true,
    }));
  }

  // Optional bracket
  if (highlight) {
    const bracketWidth = 60;
    const bracketHeight = 60;
    group.add(new Konva.Line({
      points: [-bracketWidth / 2, -bracketHeight / 2, -bracketWidth / 2, bracketHeight / 2],
      stroke: 'black',
      strokeWidth: 2,
    }));

    group.add(new Konva.Line({
      points: [bracketWidth / 2, -bracketHeight / 2, bracketWidth / 2, bracketHeight / 2],
      stroke: 'black',
      strokeWidth: 2,
    }));
  }

  layer.add(group);
}

// Draw all
drawGenderIcon(100, 100, 'male', true);
drawGenderIcon(250, 100, 'female', false);
drawGenderIcon(400, 100, 'unknown', true);
