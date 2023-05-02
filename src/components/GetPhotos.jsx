// @ts-nocheck

import React, {useState, useEffect} from 'react'
import Images from './Images';

export default function GetPhotos() {
  let [images, setImages] = useState([]);

  useEffect(() => {
    let feachImage = async () => {
      let res = await fetch(`https://api.unsplash.com/photos?client_id=Md4hps27Ney-D-Nk00Odewg9WarIjdHUX_57a8CAbcQ`);
      let data = await res.json();
      setImages(data);
      console.log(data);
    }

    feachImage();
  }, []);
  return (
    <div>
      {!images ? <h1 className='text-4xl flex justify-center items-center text-gray-950 h-screen font-bold'>Loading...</h1> : <section>
        <h1 className='flex justify-center py-6 font-bold text-4xl'>Unsplash Photos App</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2 justify-center mx-auto my-2">
          {images.map((image, index) => (
            <Images key={index} {...image} />
            ))}
        </div>
      </section> }
    </div>
  )
}
