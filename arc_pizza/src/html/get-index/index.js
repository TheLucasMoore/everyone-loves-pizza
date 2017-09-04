var arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))

  var code = `
  <script>
  // alert("hello")
  // this could be valid JS of any sort
  </script>
  <h1>Who loves pizza?</h1>
  `
  res({html:code})
}

exports.handler = arc.html.get(route)
