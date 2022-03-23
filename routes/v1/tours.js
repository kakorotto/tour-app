const express = require('express');

const toursRouter = express.Router();

const { getAllTours, createNewTour, updateTour, deleteTour, getTourById } = require('../../controllers/tours')

toursRouter.route('/').get(getAllTours).post(createNewTour);

toursRouter.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

// toursRouter.get('/', getAllTours);
// toursRouter.post('/', createNewTour);
// toursRouter.patch('/:id', updateTour);
// toursRouter.delete('/:id', deleteTour);
// toursRouter.get('/:id', getTourById);

module.exports = toursRouter;
