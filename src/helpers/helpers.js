const helpers = {
    getRandomNum: (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    },
};

export const { getRandomNum } = helpers;
