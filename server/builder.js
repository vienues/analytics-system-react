const fs = require('fs')
const fetch = require('node-fetch')

const builder = async data => {
  for (let [key, endpoint] of data) {
    let res = await fetch(`https://api.iextrading.com/1.0/${endpoint}`)
    let data = await res.json()

    if (Object.keys(data).length === 0) {
      console.error('Error: Unable to fetched a valid object')
      return
    }

    fs.writeFile(`data/${key}.json`, JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        console.error('Error: Unable to write to file')
      }
    })
  }
}

const [, , ...symbols] = process.argv

if (symbols.length === 0) {
  return
}

const batchedSymbols = symbols.map(v => v.toLowerCase()).join(',')

const companyRelation = new Map()
companyRelation.set('marketList', `/stock/market/batch?symbols=spy,dia,iwm&types=quote`)
companyRelation.set('companies', `/stock/market/batch?symbols=${batchedSymbols}&types=company,news,peers&last=5`)
companyRelation.set('stockData', `/stock/${symbols[0]}/batch?types=quote,stats,chart&range=1d`)

builder(companyRelation)
