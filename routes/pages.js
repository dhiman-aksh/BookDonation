const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/index', (req, res) => {
    res.render('index');
})

router.get('/faq', (req, res) => {
    res.render('faq');
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

router.get('/reg_confirm', (req, res) => {
    res.render('reg_confirm');
})

router.get('/book_upload', (req, res) => {
    res.render('book_upload');
})

router.get('/book_find', (req, res) => {
    res.render('book_find');
})

router.get('/put_request', (req, res) => {
    res.render('put_request');
})

router.get('/find_request', (req, res) => {
    res.render('find_request');
})

router.get('/reg_org', (req, res) => {
    res.render('reg_org');
})

router.get('/search_org', (req, res) => {
    res.render('search_org');
})

router.get('/download_book', (req, res) => {
    res.render('download_book');
})

module.exports = router;

