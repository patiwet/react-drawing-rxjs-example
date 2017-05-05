import drawingObservable from '../../observable/drawingObservable'

class DrawingStore {

  lines = []

  constructor () {
    drawingObservable.draw.subscribe(this.incLines)
    drawingObservable.clear.subscribe(this.clearLines)
  }

  incLines = (line) => {
    this.lines.push(line)
  }

  clearLines = () => {
    this.lines = []
  }
}

const drawingStore = new DrawingStore()
export default drawingStore
