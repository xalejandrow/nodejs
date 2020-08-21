//import {Given} from 'cucumber';
require("@babel/register")
const { Given, When, Then } = require('cucumber');
const goToURL = require('../../support/actions/goToURL');

Given("A web browser is at the Google home page", ()=>{
    //browser.url('/')
    goToURL.url('/');
});