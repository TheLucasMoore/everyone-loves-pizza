var arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  // this will be a post route to vote.
  // * votes allowed once per session
  // * votes stored in DynamoDB table
  res({location:`/`})
}

exports.handler = arc.html.post(route)
