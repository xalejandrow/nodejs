//import {Given} from 'cucumber';
require("@babel/register")
const { Given, When, Then } = require('cucumber');

Given("A web browser is at the Google home page", ()=>{
    browser.url('/')
});