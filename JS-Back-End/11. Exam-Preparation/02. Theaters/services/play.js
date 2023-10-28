const Play = require('../models/Play');

async function getAllPlays(orderBy) {
    let sort = { createdAt: -1 };
    if (orderBy == 'likes') {
        sort = { usersLiked: 'desc' };
    }

    return Play.find({ public: true }).sort(sort).lean();
}

async function getPlayById(id) {
    return Play.findById(id).populate('usersLiked').lean();
}

async function createPlay(playData) {
    const pattern = new RegExp(`^${playData.title}$`, 'i');
    const existing = await Play.findOne({ title: {$regex: pattern }});

    if (existing) {
        throw new Error('A play with this name already exists.');
    }

    const play = new Play(playData);
    await play.save();

    return play;
}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay
};