/**
 * Defines server actions, to be executed by routes
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Principle = mongoose.model('Principle');
const isEmpty = require('./validate').isEmpty;

/**
 * Takes an array of the form:
 * [
 * { content: 'xxxx'}, { content: 'yyyy'}
 * ]
 */
exports.add = async (req, res, next) => {
  try {
    const uid = req.body.uid;
    const content = req.body.content;
    const principlesArray = content.map((entry, key) => {
      if (isEmpty(entry.content)) {
        throw new Error('expected non empty value for content');
      }
      return new Principle({
        content: entry.content,
        owner: uid
      });
    });
    console.log(`inserting principles for ${uid}`, principlesArray);
    await Principle.collection.insertMany(principlesArray);
    res.send({ success: true });
  } catch (err) {
    console.log('principles.add error', err);
    res.send({ success: false, message: err });
  }
};

/**
 * Gets all principles by owner
 */
exports.read = async (req, res, next) => {
  try {
    const query = { owner: req.body.uid };
    console.log('reading principles for ', JSON.stringify(query));
    const result = await Principle.find(query);
    res.send({
      success: true,
      result
    });
  } catch (err) {
    console.log('error fetching principles', err);
    res.send({
      success: false,
      message: String(err)
    });
  }
};

/**
 * Deletes principles by principle ObjectId
 * validated by owner
 */
exports.delete = async (req, res, next) => {
  try {
    const uid = req.body.uid;
    const targetId = req.body.id;

    if (isEmpty(targetId)) {
      throw new Error('expected non empty value for deletion id');
    }
    // Id in the request is the ObjectId of principle to delete
    const query = {
      _id: targetId,
      owner: uid
    };
    console.log('deleting principle', JSON.stringify(query));
    const result = await Principle.deleteOne(query);
    if (result.deletedCount === 0) {
      throw new Error('nothing was deleted');
    }
    res.send({
      success: true,
      result
    });
  } catch (err) {
    res.send({
      success: false,
      message: String(err)
    });
  }
};

// not tested - but it is used to bulk delete when testing creating of new user
exports.deleteAll = async (req, res, next) => {
  try {
    await Principle.deleteAll({ owner: req.body.uid });
    res.send({ success: true });
  } catch (err) {
    console.log('bulk delete failed', err);
    res.send({ success: false, message: err });
  }
};

/**
 * Updates principle by ObjectId
 * validated by owner
 */
exports.update = async (req, res, next) => {
  try {
    const uid = req.body.uid;
    const targetId = req.body.id;
    const content = req.body.content;

    if (isEmpty(targetId) || isEmpty(content)) {
      throw new Error('expected non empty value for update id and content');
    }
    const query = {
      _id: targetId,
      owner: uid
    };
    const update = {
      content
    };
    console.log(`updating principle ${JSON.stringify(query)} to ${JSON.stringify(update)}`);
    const result = await Principle.updateOne(query, update);
    if (result.nModified === 0) {
      throw new Error('nothing was updated');
    }
    res.send({
      success: true,
      result
    });
  } catch (err) {
    res.send({
      success: false,
      message: String(err)
    });
  }
};
