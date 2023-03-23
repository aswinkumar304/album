import React from 'react';
import Album from './Album';
import './App.css';
const images = [
   { url: 'https://thumbs.dreamstime.com/b/maangalyam-traditional-tamil-wedding-chain-121567402.jpg', alt: 'Image 1' },
   { url: 'https://shaadiwish.com/blog/wp-content/uploads/2021/06/Tamil-Wedding-Rituals.jpg', alt: 'Image 2' },
   { url: 'https://t4.ftcdn.net/jpg/01/04/97/61/360_F_104976107_PBOUsHtOOy404T0iG1ODAdqC6H2gE1HT.jpg', alt: 'Image 3' },
   { url: 'https://www.tikli.in/wp-content/uploads/2021/03/Tamil-Wedding-Ceremony-2-1.jpg', alt: 'Image 4' },
   { url: 'https://miro.medium.com/v2/resize:fit:1400/0*VLt7ynIVMdIFWpKk.jpg', alt: 'Image 5' },
   { url: 'https://www.weddingsutra.com/images/wedding-images/entertaining/tamil-traditional-wedding/tamil-wedding-ritual-intro.webp', alt: 'Image 6' },
   { url: 'https://cdn.zerogravity.photography/2021/05/decoding-tamil-weddings-cover.jpeg', alt: 'Image 7' },
   { url: 'https://mysticstudios.in/wp-content/uploads/2018/09/Chennai-tamil-brahmin-iyer-wedding-photography-padmaram-mystic5.jpg', alt: 'Image 7' },
   { url: 'https://t3.ftcdn.net/jpg/03/55/65/20/360_F_355652081_a4euqlK3lnYIRjMY1RqqnNUMBZob62UX.jpg', alt: 'Image 7' },
   { url: 'https://image7.photobiz.com/8912/13_20220310103739_10094433_xlarge.jpg', alt: 'Image 7' },
   { url: 'https://s3.amazonaws.com/eventalog-assests-storage/b0222fa4-6343-40af-9375-91f61a8d1741.jpeg', alt: 'Image 7' },
   { url: 'https://images.squarespace-cdn.com/content/v1/56158147e4b02dbaffed4b6e/1584364210340-VDAA804HI00JIW675LE9/EJM20200129F7377.JPG', alt: 'Image 7' }
];

const App = () => {
  return (
    <div>
      <h1 className='texttop'>MUKURTHA WEDDING PHOTOGRAPHY</h1>
      <Album images={images} />
    </div>
    
  );
};

export default App;

