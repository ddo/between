module.exports = between;

function between(str, start, end) {
    var _start = str.indexOf(start);

    if(_start === -1) {
        return false;
    }

    _start = _start + start.length;

    var _end = str.slice(_start).indexOf(end);

    if(_end === -1) {
        return false;
    }

    return str.slice(_start, _start + _end);
}