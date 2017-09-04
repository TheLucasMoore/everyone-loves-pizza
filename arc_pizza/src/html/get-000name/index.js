var arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  // this could be an external file
  res({html: req.params.name + " loves pizza"})
}

exports.handler = arc.html.get(route)
