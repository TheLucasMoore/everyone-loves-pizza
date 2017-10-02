var arc = require('@architect/functions')

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  var name = capitalizeFirstLetter(req.params.name)
  res({html: "<h1> 🍕 " + name + " loves pizza! 🍕 </h1>"})
}

exports.handler = arc.html.get(route)
