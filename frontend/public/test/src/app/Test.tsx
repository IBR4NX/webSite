// import { neon } from '@netlify/neon';
import { useEffect } from 'react';

function Test() {

  //  const postId = 1;
  //   const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const [post] = [ sql`SELECT * FROM posts WHERE id = ${postId}`];
  
  useEffect(() => {
  fetch("/netlify/functions/getData.js?id=1")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);




  return (
    <>
      <div className="fixed bottom-5 border-b  left-10 flex gap-2">
        {/* <button onClick={() => setIsOpen(true)}>Open </button> */}
        {/* <button onClick={()=>}>Test </button> */}
        {/* <div className="">{sizeW} x {sizeH}</div> */}
      </div>
    </>
  );
}

export default Test;


