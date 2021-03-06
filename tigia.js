#! /usr/bin/env node

const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');
const dayjs = require("dayjs");

const today = dayjs().format('YYYYMMDD');
const url = `https://tpb.vn/CMCWPCoreAPI/api/public-service/get-currency-rate?filename=${today}`;
const username = "wpstpb2018";
const password = "WPStpb20181212";
const auth = "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

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
        const exec = require('child_process').exec;
        const child = exec(`echo "Tỉ giá 💶: ${tigiaEuro.chuyen}" |clip.exe`,
            (error, stdout, stderr) => {
                if (error !== null) {
                    console.log(`stdout: ${stdout}`);
                    console.log(`stderr: ${stderr}`);
                    console.log(`exec error: ${error}`);
                }
            });

    }
});