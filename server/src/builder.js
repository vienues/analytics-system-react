// This is a standalone script - no point in translating to TS

// TODO: This is no longer current as we are using iexcloud, not iextrading

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

    fs.writeFile(`mockData/${key}.json`, JSON.stringify(data, null, 2), 'utf8', err => {
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

const batchedSymbols = symbols.map(s => s.toLowerCase()).join(',')

const companyRelation = new Map()
companyRelation.set('marketListData', `/stock/market/batch?symbols=spy,dia,iwm&types=quote`)
companyRelation.set('companyData', `/stock/market/batch?symbols=${batchedSymbols}&types=company,news,peers&last=5`)
companyRelation.set('stockData', `/stock/market/batch?symbols=${batchedSymbols}&types=quote,stats,chart&range=1d`)

builder(companyRelation)
