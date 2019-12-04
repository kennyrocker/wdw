const randomId = () => {
    return (Math.floor(Math.random() * 1000000) + Date.now() / 100000) * 100000;
};

/*
 * Taken from underscore _.
 * */
const debounce = (func, wait, immediate) => {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const formatTime = (timeStamp) => {
    if (!timeStamp) return '';
    const time = new Date(timeStamp);
    const YYYY = time.getFullYear();
    const MM = time.getMonth();
    const DD = time.getDate();
    const H = time.getHours();
    const M = time.getMinutes();
    const S = time.getSeconds();
    return `${YYYY}-${MM}-${DD} | ${H}:${M}:${S}`;
};


const Util = {
    randomId: randomId,
    debounce: debounce,
    formatTime: formatTime
}

export default Util;