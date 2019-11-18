const randomId = (digit) => {
    return Math.floor((1*digit) + Math.random() * (9*digit));
};

export default randomId;