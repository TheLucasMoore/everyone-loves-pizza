var arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))

  var code = `
  <h1>Who loves pizza?</h1>
  `
  res({html:code})
}

exports.handler = arc.html.get(route)
