let randomstring = require("randomstring");

const mappi = new Map();

for(let i=0; i<10; i++ )
  {
  let randomString = randomstring.generate({
  length: 9,
  charset: 'alphabetic',
  capitalization: 'lowercase'
});
    mappi.set(`user ${i}`, randomString);
  console.log(`user ${i} : `, mappi.get(`user ${i}`));
    
  }
