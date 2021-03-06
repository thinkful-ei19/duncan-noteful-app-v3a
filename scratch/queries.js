'use strict';

const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

const Note = require('../models/note');

// const Folder = require('../models/folder');

mongoose.connect(MONGODB_URI)
  .then(() => {
    Note.update({},
      { $pull: { tags: { $in: ['222222222222222222222200']}}},
      { multi: true }).then(res => console.log(res));
  })
  .then(() => mongoose.disconnect());
  
  