const jwt = require('jsonwebtoken');

const token = jwt.sign({
        "iss": "mertClientId",
        "aud": "signin.education.gov.uk"
    }, 'my-super-secret-api-key',
    {noTimestamp: true}
);

console.log(`token ${token}`);
