'use strict';

const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

const Note = require('../models/note');

const Folder = require('../models/folder');

mongoose.connect(MONGODB_URI)
  .then(() => Folder.find())
  .populate('Note')
  .then(res => {
    console.log(res);
  });
  