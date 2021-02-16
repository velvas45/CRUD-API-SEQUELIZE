const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {Books} = require('./models');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// GET all books
app.get('/api/v1/books', (req,res) => {
    Books.findAll()
    .then(books => {
        res.status(200).json(books)
    })
    .catch(err => console.log(err));
});

// GET all books by id
app.get('/api/v1/books/:id', (req,res) => {
    Books.findOne({
        where: {id: req.params.id}
    })
    .then(books => {
        res.status(200).json(books)
    })
    .catch(err => console.log(err));
})

// Post books
app.post('/api/v1/books', (req,res) => {
    Books.create({
        judul: req.body.judul,
        sinopsi: req.body.sinopsi,
        penulis: req.body.penulis,
        genre: req.body.genre,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(books => {
        res.status(200).json(books)
    })
    .catch(err => {
        res.status(422).json("Can't create Books")
    });
});

// PUT books
app.put('/api/v1/books/:id', (req,res) => {
    Books.update({
        judul: req.body.judul,
        sinopsi: req.body.sinopsi,
        penulis: req.body.penulis,
        genre: req.body.genre,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        where: {id:req.params.id}
    })
    .then(books => {
        res.status(201).json(books)
    })
    .catch(err => {
        res.status(422).json("Can't updated Books")
    });
});

// PUT books
app.delete('/api/v1/books/:id', (req,res) => {
    Books.destroy({
        where: {id:req.params.id}
    })
    .then(books => {
        res.status(201).json({message: `books with id ${req.params.id} has been deleted!`});
    })
    .catch(err => {
        res.status(422).json("Can't updated Books")
    });
});

app.listen(3000);