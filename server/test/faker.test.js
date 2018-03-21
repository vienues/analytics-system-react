require('@babel/register')

const { expect } = require('chai')

const faker = require('../src/connectors/faker')

describe('Fake fetch something', function() {
  it('it should reject an invalid path', async function() {
    const path = '/not/a/real/path'
    const mockData = {}
    const { fetch } = faker.default(mockData)

    try {
      await fetch(path)
    } catch (e) {
      expect(e).to.be.an('error')
    }
  })
})
