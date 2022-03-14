
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);


  describe('/GET weather details', () => {
      it('it should GET details from weather API if current date is prime', (done) => {
        chai.request(server)
            .get('/api/weather/')
            .end((err, res) => {
                  res.body.should.have.property('msg');
                  res.should.have.status(200);
              done();
            });
      });
  });
 
