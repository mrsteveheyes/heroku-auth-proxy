const request = require('supertest')
const app = require('../app')

describe('Heroku Auth Proxy API', () => {
  describe('GET "/"', () => {
    it('should return with an error if no parameters given', () => {
      return request(app).get('/')
        .expect(400)
        .then((res) => {
          expect(res.body.error).toBe('InvalidParameters')
          expect(res.body.message).toBe("The paramaters you passed where invalid")
        })
    })
  })
})
