var arc = require('@architect/functions')

function capitalizeFirstLetter(string) {
  var words = string.split("_")
  // return words[1]
  var new_string = ""
  for (i = 0; i < words.length; i++) {
    new_string += " " + (words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return new_string;
};

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  var name = capitalizeFirstLetter(req.params.name)
  res({html: "<h1> 🍕 " + name + " loves pizza! 🍕 </h1>"})
}

exports.handler = arc.html.get(route)
