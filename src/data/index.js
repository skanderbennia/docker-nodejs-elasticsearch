const elastic = require("../elastic")
const quotes  = require("./quotes.json")

const esAction = {
  index: {
     _index: elastic.index,
     _type: elastic.type
  }
}

async function populateDatabase() {
    const docs = [];

    for(const quote of quotes){
        console.log(quote.author)
        docs.push(esAction)
        docs.push(quote)
    }

    return elastic.esclient.bulk({ body: docs})
}

module.exports = {
  populateDatabase
}