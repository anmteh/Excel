const codes = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
  <div class="cell" contenteditable></div>
  `
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(index, content) {
  return `
  <div class="row">
      <div class="row-info">${index ? index : ''}</div>
      <div class="row-data">${content}</div>
  </div>
  `
}

function toChar(_, idx) {
  return String.fromCharCode(codes.A + idx)
}

export function createTable(rowsCount = 20) {
  const colsCount = codes.Z - codes.A + 1
  const rows = []

  const cols = new Array(colsCount)
              .fill('')
              .map(toChar)
              .map(createCol)
              .join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
                  .fill('')
                  .map(createCell)
                  .join('')
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}
