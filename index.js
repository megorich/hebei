module.exports.isNode = function() {
    return typeof global !== 'undefined'
        && typeof global.process !== 'undefined'
        && typeof global.process.emit === 'function';
}
