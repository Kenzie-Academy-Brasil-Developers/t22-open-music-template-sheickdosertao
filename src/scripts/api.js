 export const musicaApi = async () => {
    const url = `https://openmusic-fake-api.onrender.com/api/musics/`

    const data = await fetch(url).then((response) => response.json());

  console.log(data);

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




