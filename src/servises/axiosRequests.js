import axios from "axios";

let queue = [];

const axiosRequests = {
    getAnime: (topAnimUrl, setAnime, requestLength) => {
        axios
            .get(topAnimUrl)
            .then((response) => {
                if (Array.isArray(response.data.data)) {
                    setAnime(response.data.data.slice(0, requestLength));
                } else {
                    setAnime(response.data.data);
                }
            })
            .catch((error) => {
                alert("Do not reload page too fast");
            });
    },
    processQueue: () => {
        if (queue.length > 0) {
            const item = queue.shift();
            axiosRequests.getAnime(item.url, item.setter);
            setTimeout(axiosRequests.processQueue, 1000);
        }
    },
    addToQueue: (url, setter) => {
        queue.push({ url: url, setter: setter });
        if (queue.length === 1) {
            axiosRequests.processQueue();
        }
    },
};

export const { addToQueue } = axiosRequests;
