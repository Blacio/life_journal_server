const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Places = mongoose.model('Places');
const Books = mongoose.model('Books');
const Movies = mongoose.model('Movies');
const Concerts = mongoose.model('Concerts');
const Events = mongoose.model('Events');

const router = express.Router();

router.use(requireAuth);

router.get('/places', async (req,res) => {
  const places = await Places.find({userId: req.user._id});
  res.send(places);
})

router.get('/books', async (req,res) => {
  const books = await Books.find({userId: req.user._id});
  res.send(books);
})

router.get('/movies', async (req,res) => {
  const movies = await Movies.find({userId: req.user._id});
  res.send(movies);
})

router.get('/concerts', async (req,res) => {
  const concerts = await Concerts.find({userId: req.user._id});
  res.send(concerts);
})

router.get('/events', async (req,res) => {
  const events = await Events.find({userId: req.user._id});
  res.send(events);
})

router.post(`/deletePlace`, async(req,res) => {
  try {
    const place = await Places.findByIdAndDelete(req.body.id);
    res.send(place);

  } catch(err) {
    res.status(422).send({error: err.message});
  }
})

router.post(`/deleteBook`, async(req,res) => {
  try {
    const book = await Books.findByIdAndDelete(req.body.id);
    res.send(book);

  } catch(err) {
    res.status(422).send({error: err.message});
  }
})

router.post(`/deleteConcert`, async(req,res) => {
  try {
    const concert = await Concerts.findByIdAndDelete(req.body.id);
    res.send(concert);

  } catch(err) {
    res.status(422).send({error: err.message});
  }
})

router.post(`/deleteMovie`, async(req,res) => {
  try {
    const movie = await Movies.findByIdAndDelete(req.body.id);
    res.send(movie);

  } catch(err) {
    res.status(422).send({error: err.message});
  }
})

router.post(`/deleteEvent`, async(req,res) => {
  try {
    const events = await Events.findByIdAndDelete(req.body.id);
    res.send(events);

  } catch(err) {
    res.status(422).send({error: err.message});
  }
})


router.post('/places', async(req, res) => {
  const { name, date, country, continent, rating, experience, site, notes} = req.body;
  // console.log(req.body);
  if (!name ) {
    return res
      .status(422)
      .send({ error: 'Name is required' });
  }
  try {
    const place = new Places({ userId: req.user._id,
      name,
      date: new Date(date).getTime(),
      country,
      continent,
      rating,
      experience,
      site,
      notes
    });

    await place.save();
    res.send(place);
  } catch (err) {
    res.status(422).send({error: err.message});
  }
})

router.post('/books', async(req, res) => {
  const { name, timestamp, author, quote, rating, notes} = req.body;

  if (!name ) {
    return res
      .status(422)
      .send({ error: 'Name is required' });
  }

  try {
    const book = new Books({name,
      timestamp,
      author,
      rating,
      category,
      quote,
      notes,
      userId: req.user._id
    });
    await book.save();
    res.send(book);
  } catch (err) {
    res.status(422).send({error: err.message});
  }
})

router.post('/movies', async(req, res) => {
  const { name, timestamp, director, quote, rating, notes} = req.body;

  if (!name ) {
    return res
      .status(422)
      .send({ error: 'Name is required' });
  }

  try {
    const movie = new Movies({name,
      timestamp,
      director,
      rating,
      quote,
      notes,
      userId: req.user._id
    });
    await movie.save();
    res.send(movie);
  } catch (err) {
    res.status(422).send({error: err.message});
  }
})

router.post('/concerts', async(req, res) => {
  const { location, timestamp, artist, song, rating, notes} = req.body;

  if (!artist ) {
    return res
      .status(422)
      .send({ error: 'Artist is required' });
  }

  try {
    const concert = new Concerts({location,
      timestamp,
      artist,
      rating,
      song,
      notes,
      userId: req.user._id
    });
    await concert.save();
    res.send(concert);
  } catch (err) {
    res.status(422).send({error: err.message});
  }
})

router.post('/events', async(req, res) => {
  const { name, timestamp, location, favourite, rating, notes} = req.body;

  if (!name ) {
    return res
      .status(422)
      .send({ error: 'Name is required' });
  }

  try {
    const events = new Events({name,
      timestamp,
      location,
      rating,
      favourite,
      notes,
      userId: req.user._id
    });
    await events.save();
    res.send(events);
  } catch (err) {
    res.status(422).send({error: err.message});
  }
})

module.exports = router;
