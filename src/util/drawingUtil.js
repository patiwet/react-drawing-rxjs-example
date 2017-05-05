import { SCALE_HEIGHT, SCALE_WIDTH } from '../constant/drawing'

export function draw (canvas, context, line) {
  const {start, end, color, size, compositeOperation} = line
  context.save()
  context.lineJoin = 'round'
  context.lineCap = 'round'
  context.scale(1, 1)
  // context.scale(canvas.width / SCALE_WIDTH, canvas.height / SCALE_HEIGHT)
  context.strokeStyle = color
  context.globalCompositeOperation = compositeOperation
  context.lineWidth = size
  context.beginPath()
  context.moveTo(start.x, start.y)
  context.lineTo(end.x, end.y)
  context.closePath()
  context.stroke()
  context.restore()
}

export function clear (canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

export default {draw, clear}