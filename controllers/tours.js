const Tour = require('../models/Tour');

module.exports = {
  findTourById: async (res, req, next) => {
    const { id } = req.params;
    const tour = await Tour.findById(Id);
    if (Tour == null) {
      return res.status(404).json({
        status: 'failure',
        message: 'Tour not found',
      });
    }
    req.tour = tour;
    next();
  },
  getTourById: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Tour.findById(id);
      console.log('dsgfnbfdasfhgmsdafshj,fadsafmn');
      console.log(data);

      res.json({
        status: 'success',
        data,
      });
    } catch (error) {
      res.status(500).json({ status: 'failure', message: error.message });
    }
  },

  getAllTours: async (req, res) => {
    let query = JSON.stringify(req.query);
    query = query.replace(/(gt|gte|lt|lte)/g, (match) => `$${match}`);
    // console.log(query);
    try {
      let data;
      if (req.query.page !== undefined && req.query.fields !== undefined) {
        data = await Tour.find(JSON.parse(query))
          .select(req.query.fields.replace(',', ' '))
          .limit(req.query.limit || 10)
          .skip(req.query.limit * (req.query.page - 1));
      } else if (req.query.fields !== undefined) {
        data = await Tour.find(JSON.parse(query)).select(
          req.query.fields.replace(',', ' ')
        );
      } else if (req.query.page !== undefined) {
        data = await Tour.find(JSON.parse(query))
          .limit(req.query.limit || 10)
          .skip(req.query.limit * (req.query.page - 1));
      } else {
        data = await Tour.find(JSON.parse(query));
      }

      res.json({ status: 'success', data });
    } catch (error) {
      res.status(500).json({ status: 'failure', message: error.message });
    }
  },

  createNewTour: async (req, res) => {
    try {
      const data = await Tour.create(req.body);
      res.json({
        status: 'success',
        data,
      });
    } catch (error) {
      res.status(400).json({ status: 'failure', message: error.message });
    }
  },

  updateTour: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Tour.findByIdAndUpdate(id, req.body, { new: true });
      if (data === null) {
        return res
          .status(404)
          .json({ status: 'failure', data: 'Tour not found' });
      }
      res.json({
        status: 'success',
        data,
      });
    } catch (error) {
      res.status(500).json({ status: 'failure', message: error.message });
    }
  },

  deleteTour: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Tour.findByIdAndDelete(id, req.body);
      if (data === null) {
        return res
          .status(404)
          .json({ status: 'failure', data: 'Tour not found' });
      }
      res.json({
        status: 'success',
        data,
      });
    } catch (error) {
      res.status(500).json({ status: 'failure', message: error.message });
    }
  },
};

// module.exports.findTourById = async (res, req,next) => {
//   const { id } = req.params;
//   const tour = await Tour.findById(Id);
//   if (Tour == null) {
//     return res.status(404).json({
//       status: 'failure',
//       message: 'Tour not found',
//     });
//   }
//   req.tour = tour;
//   next();
// };

// module.exports.getAllTours = async (req, res) => {
//   let query = JSON.stringify(req.query);
//   query = query.replace(/(gt|gte|lt|lte)/g, (match) => `$${match}`);
//   // console.log(query);
//   try {
//     let data;
//     if (req.query.page !== undefined && req.query.fields !== undefined) {
//       data = await Tour.find(JSON.parse(query))
//         .select(req.query.fields.replace(',', ' '))
//         .limit(req.query.limit || 10)
//         .skip(req.query.limit * (req.query.page - 1));
//     } else if (req.query.fields !== undefined) {
//       data = await Tour.find(JSON.parse(query)).select(
//         req.query.fields.replace(',', ' ')
//       );
//     } else if (req.query.page !== undefined) {
//       data = await Tour.find(JSON.parse(query))
//         .limit(req.query.limit || 10)
//         .skip(req.query.limit * (req.query.page - 1));
//     } else {
//       data = await Tour.find(JSON.parse(query));
//     }

//     res.json({ status: 'success', data });
//   } catch (error) {
//     res.status(500).json({ status: 'failure', message: error.message });
//   }
// };

// module.exports.createNewTour = async (req, res) => {
//   try {
//     const data = await Tour.create(req.body);
//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (error) {
//     res.status(400).json({ status: 'failure', message: error.message });
//   }
// };

// module.exports.updateTour = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const data = await Tour.findByIdAndUpdate(id, req.body, { new: true });
//     if (data === null) {
//       return res
//         .status(404)
//         .json({ status: 'failure', data: 'Tour not found' });
//     }
//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (error) {
//     res.status(500).json({ status: 'failure', message: error.message });
//   }
// };

// module.exports.deleteTour = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const data = await Tour.findByIdAndDelete(id, req.body);
//     if (data === null) {
//       return res
//         .status(404)
//         .json({ status: 'failure', data: 'Tour not found' });
//     }
//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (error) {
//     res.status(500).json({ status: 'failure', message: error.message });
//   }
// };

// module.exports.getTourById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const data = await Tour.findById(id);
//     console.log('dsgfnbfdasfhgmsdafshj,fadsafmn');
//     console.log(data);

//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (error) {
//     res.status(500).json({ status: 'failure', message: error.message });
//   }
// };
