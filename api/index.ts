var express = require("express");
var app = express();

app.get("/weather", function (req: any, res: any) {
  const { serviceKey, numOfRows, pageNo, base_date, base_time, nx, ny } =
    req.query;

  var api_url =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { serviceKey, numOfRows, pageNo, base_date, base_time, nx, ny },
  };

  request.get(options, function (error: any, response: any, body: any) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "application/xml;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=suA%2BQSV5wYA1AXHlgrSk9ZMhBdGBXY%2FzFV7zI0n4xzJS1%2Bg52CwPaxIvhKNDvCazzacEWfIVGZBNgEEYMFXhHA%3D%3D&pageNo=1&numOfRows=1000&dataType=XML&base_date=20241227&base_time=0600&nx=55&ny=127 app listening on port 3000!"
  );
});