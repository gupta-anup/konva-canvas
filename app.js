const log = console.log;

const stage = new Konva.Stage({
  height: window.innerHeight,
  width: window.innerWidth,
  container: 'container',
})

const layer = new Konva.Layer();
stage.add(layer);