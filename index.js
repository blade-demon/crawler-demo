var axios = require("axios");
var cheerio = require("cheerio");
var fs = require("fs");

var url = "https://sale.jd.com/act/irp8mAGsckjWY.html";

var fetchPage = (url) => {
  axios.get(url).then((response) => {
    // console.log(response.data);
    const $ = cheerio.load(response.data);
    fs.writeFile("index.html", response.data, function (err) {
      console.log("写入完成");
    });
    // console.log($('.d-try ul').children("li"));
    $('.d-try ul').children("li").each(function(index, item){
      console.log($(item).find(".d-title").text());
    });
  }).catch((error)=>{
    console.log(error);
  });
};

fetchPage(url);