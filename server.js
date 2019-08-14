
const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');
const dayjs = require("dayjs");

const today = dayjs().format('YYYYMMDD');
const url = `https://tpb.vn/CMCWPCoreAPI/api/public-service/get-currency-rate?filename=${today}`;
const username = "wpstpb2018";
const password = "WPStpb20181212";
const auth = "Basic " + new Buffer(`${username}:${password}`).toString("base64");

request({
    url,
    headers: {
        "Authorization": auth
    }
}, function (err, res, body) {
    if (err) {
        console.log(err);
    }
    else {
        const tigiaEuro = JSON.parse(body).rate_currency.find(({ ten }) => ten === "Euro");
        console.log(tigiaEuro.chuyen)
    }
});