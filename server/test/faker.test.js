const { expect } = require('chai')

const faker = require('../lib/connectors/faker')

describe('Fake fetch something', function() {
  it('it should reject an invalid path', async function() {
    const path = '/not/a/real/path'
    const mockData = {}
    const { fetch } = faker(mockData)

    try {
      await fetch(path)
    } catch (error) {
      expect(error).to.be.an('error')
    }
  })
})
