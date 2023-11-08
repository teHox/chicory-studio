const animeServices = {
    getAnime: (anime, setHomeImage,index) => {
        if (anime && anime.length > 0) {
            if(setHomeImage){
                setHomeImage(anime[index].images.webp.large_image_url);
            }
        }

        return anime;
    },
    сropText: (text, maxWords) => {
        if (!text) {
            return ""; 
        }
        const words = text.split(" ");

        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(" ") + "...";
        }

        return text;
    },
};

export const { getAnime, сropText } = animeServices;
