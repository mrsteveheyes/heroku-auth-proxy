const request = require('supertest')
const app = require('../app')

describe('Should return with an error if no parameters given', () => {
  it('error test', () => {
    return request(app).get('/')
      .expect(400)
      .then((res) => {
        expect(res.body.error).toBe('InvalidParameters')
        expect(res.body.message).toBe("The paramaters you passed where invalid")
      })
  })
})
