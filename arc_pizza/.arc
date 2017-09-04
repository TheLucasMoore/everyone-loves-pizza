@app
pizza

@domain
everyoneloves.pizza

@html
get /
get /:name
post /:name/vote

@tables
pizza_lovers
  name *String
  votes *Integer

@indexes
pizza_lovers
  name *String
