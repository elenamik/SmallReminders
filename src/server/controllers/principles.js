/**
 * Defines server actions, to be executed by routes
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Principle = mongoose.model('Principle');
const isEmpty = require('./validate').isEmpty;

/**
 * Gets all principles by owner
 */
exports.read = async (req, res, next) => {
  try {
    const user = req.user;
    const query = { owner: user._id };
    console.log('reading principles for ', JSON.stringify(query));
    const result = await Principle.find(query);
    res.send({
      success: true,
      result
    });
  } catch (err) {
    res.send({
      success: false,
      error: String(err)
    });
  }
};

/**
 * Add principle by owner
 */
exports.add = async (req, res, next) => {
  try {
    const user = req.user;
    const content = req.body.content;
    console.log('conent is', content);
    if (isEmpty(content)) {
      throw new Error('expected non empty value for content');
    }

    const principle = new Principle({
      content: content,
      owner: user._id
    });
    console.log('adding principle', JSON.stringify(principle));
    const result = await principle.save();
    res.send({
      success: true,
      result
    });
  } catch (err) {
    console.log('got error', String(err));
    res.send({
      success: false,
      error: String(err)
    });
  }
};

/**
 * Deletes principles by principle ObjectId
 * validated by owner
 */
exports.delete = async (req, res, next) => {
  try {
    const user = req.user;
    const targetId = req.body.id;

    if (isEmpty(targetId)) {
      throw new Error('expected non empty value for deletion id');
    }
    // Id in the request is the ObjectId of principle to delete
    const query = {
      _id: targetId,
      owner: user._id
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
      error: String(err)
    });
  }
};

/**
 * Updates principle by ObjectId
 * validated by owner
 */
exports.update = async (req, res, next) => {
  try {
    const user = req.user;
    const targetId = req.body.id;
    const content = req.body.content;

    if (isEmpty(targetId) || isEmpty(content)) {
      throw new Error('expected non empty value for update id and content');
    }

    const query = {
      _id: targetId,
      owner: user._id
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
      error: String(err)
    });
  }
};
