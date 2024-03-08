 const musicaApi = async () => {
    const url = `https://openmusic-fake-api.onrender.com/api/musics`

    const data = await fetch(url);

  

    return data;

    
};

const handeleApi = (cardData) => {
    const band = cardData.band;

    const genre = cardData.genre;
 
    const img = cardData.img;
      
    const  price = cardData.price;
    
    const  title = cardData.title;

    
    
  
const cardArtista = {
       
        
   title,

   genre,
        
   band,

   price,

  img,

  

    };

    
    

 

  return cardArtista;


};


export const armazenaFunction = async (cardsMae = 9) => {
   const musicaArray = [];

    for (let i = 0; i < cardsMae; i++){
       const cardData = await musicaApi(i + 1);
        const cardArtis = handeleApi(cardData);
        musicaArray.push(cardArtis);
    }

    return musicaArray;
};


