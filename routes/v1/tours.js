const express = require('express');

const toursRouter = express.Router();

const {
  getAllTours,
  getTourById,
  createNewTour,
  updateTour,
  deleteTour,
  findTourById,
} = require('../../controllers/tours');

toursRouter.route('/').get(getAllTours).post(createNewTour);
toursRouter.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);
toursRouter.route('/:id').findTourById();

// toursRouter.get('/', getAllTours);
// toursRouter.post('/', createNewTour);
// toursRouter.patch('/:id', updateTour);
// toursRouter.delete('/:id', deleteTour);
// toursRouter.get('/:id', getTourById);

module.exports = toursRouter;
