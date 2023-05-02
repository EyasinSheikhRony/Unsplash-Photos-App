import React, {useState, useEffect} from 'react'
import Images from './Images';

export default function GetPhotos() {
  let [images, setImages] = useState([]);

  useEffect(() => {
    let feachImage = async () => {
      let res = await fetch(`https://api.unsplash.com/photos/?client_id=Md4hps27Ney-D-Nk00Odewg9WarIjdHUX_57a8CAbcQ`);
      let data = await res.json();
      setImages(data);
      console.log(data);
    }

    feachImage();
  }, []);
  return (
    <div>
      {!images ? <h1>Loading...</h1> : <section>
        <h1>Unsplash Photos App</h1>

        <div className="">
          {images.map((image, index) => (
            <Images key={index} />
          ))}
        </div>
      </section> }
    </div>
  )
}
