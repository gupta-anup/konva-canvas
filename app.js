const log = console.log;

const stage = new Konva.Stage({
  height: window.innerHeight,
  width: window.innerWidth,
  container: 'container',
})

const layer = new Konva.Layer();
stage.add(layer);

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