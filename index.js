var unirest = require('unirest');

var req = unirest('GET', 'https://ehfv-test.fa.us6.oraclecloud.com/fscmRestApi/resources/11.13.18.05/workOrders?q=WorkOrderNumber=MIM1-480')
  .headers({
    'Authorization': 'Basic Y29yZWFwcHM6Q29yZWFwcHMyMDE5',
  })
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });

req;