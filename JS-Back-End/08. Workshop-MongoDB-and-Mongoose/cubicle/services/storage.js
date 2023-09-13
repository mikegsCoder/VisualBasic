const Cube = require('../models/Cube');
const Comment = require('../models/Comment');
const Accessory = require('../models/Accessory');

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit,
            createComment,
            createAccessory,
            getAllAccessories,
            attachSticker
        };

        next();
    };
}

async function getAll(query) {
    const options = {};

    // filter cubes by query params:
    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' };
    } 
    if (query.from) {
        options.difficulty = { $gte: Number(query.from) };
    }
    if (query.to) {
        options.difficulty = options.difficulty || {};
        options.difficulty.$lte = Number(query.to);
    }

    const cubes = Cube.find(options).lean();
    
    return cubes;
}

async function getById(id) {
    const cube = await Cube.findById(id).populate('comments').populate('accessories').lean();
    if (cube) {
        return cube;
    } else {
        return undefined;
    }
}

async function create(cube) {
    const record = new Cube(cube);
    return record.save();
}

async function edit(id, cube) {
    const existing = await Cube.findById(id);

    if (!existing) {
        throw new ReferenceError('No such Id in database.');
    }

    Object.assign(existing, cube);
    return existing.save();
}

async function createComment(cubeId, comment) {
    const cube = await Cube.findById(cubeId);

    if (!cube) {
        throw new ReferenceError('No such Id in database.');
    }

    const newComment = new Comment(comment);
    await newComment.save();

    cube.comments.push(newComment);
    await cube.save();
}

async function getAllAccessories(existing) {
    // some implementation
}

async function createAccessory(accessory) {
    // some implementation
}

async function attachSticker(cubeId, stickerId) {
    // some implementation
}

module.exports = {
    init,
    getAll,
    getById,
    create,
    createComment,
    createAccessory,
    getAllAccessories,
    attachSticker
};