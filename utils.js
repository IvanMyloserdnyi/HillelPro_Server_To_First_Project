function getRandomNumber(minNum, maxNum) {
    return (Math.random() * (maxNum - minNum) + minNum).toFixed(0)
}
function createComments(count,photosCount,comments,names) {
    let id = 1;
    return new Array(count).fill(null).map(() => ({
        id: id++,
        avatar: `img/avatar-${getRandomNumber(photosCount.min, photosCount.max)}.svg`,
        message: comments[getRandomNumber(0, comments.length - 1)],
        name: names[getRandomNumber(0, names.length - 1)]
    }))
}
module.exports = {getRandomNumber,createComments}