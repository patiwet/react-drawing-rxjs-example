import Rx from 'rxjs'

class DrawingObservable {
  clear = new Rx.Subject()
  draw = new Rx.Subject()
}

const drawingObservable = new DrawingObservable()
export default drawingObservable