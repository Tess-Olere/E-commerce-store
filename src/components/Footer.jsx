// import React from 'react'
// import {
//   FaFacebookF,
//   FaInstagramSquare,
//   FaPinterestSquare,
// } from 'react-icons/fa'
// import { ImTwitter } from 'react-icons/im'
// import { AiOutlineCopyrightCircle } from 'react-icons/ai'

// export default function Footer() {
//   return (
//     <div className="foot mt-5 py-2" style={{border: '2px solid red'}}>
//       <div className="container-lg mx-auto" style={{border: '2px solid black'}}>
//         <div className=" justify-content-center align-items-center mb-2" style={{border: '2px solid red'}}>
//           <a
//             className="fw-bold"
//             href="http://www.tvmaze.com"
//             rel="noreferrer"
//             target="_blank"
//             style={{
//               color: 'black',
//               padding: '5px',
//               fontSize: '1.3rem',
//             }}
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             className="fw-bold"
//             href="http://www.tvmaze.com"
//             rel="noreferrer"
//             target="_blank"
//             style={{
//               color: 'black',
//               padding: '5px',
//               fontSize: '1.3rem',
//             }}
//           >
//             <ImTwitter />
//           </a>
//           <a
//             className="fw-bold"
//             href="http://www.tvmaze.com"
//             rel="noreferrer"
//             target="_blank"
//             style={{
//               color: 'black',
//               padding: '5px',
//               fontSize: '1.3rem',
//             }}
//           >
//             <FaInstagramSquare />
//           </a>
//           <a
//             className="fw-bold"
//             href="http://www.tvmaze.com"
//             rel="noreferrer"
//             target="_blank"
//             style={{
//               color: 'black',
//               padding: '5px',
//               fontSize: '1.3rem',
//             }}
//           >
//             <FaPinterestSquare />
//           </a>
//         </div>
//         <div className="d-md-flex justify-content-center align-items-center">
//           <div className="d-flex gap-1 ">
//             <AiOutlineCopyrightCircle />
//             <h6 className="">TVmaze.com</h6>
//           </div>
//           <div className="d-md-flex gap-3 mt-1 small">
//             <>
//               <p>COOKIES SETTING</p>
//             </>
//             <>
//               <p>PRIVACY POLICY</p>
//             </>
//             <>
//               <p>RETURNS</p>
//             </>
//             <>
//               <p>FEATURES</p>
//             </>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  const links = [
    {
      name: 'facebook',
      href: 'facebook.com',
      id: 1,
    },
    {
      name: 'twitter',
      href: 'twitter.com',
      id: 2,
    },
    {
      name: 'instagram',
      href: 'instagram.com',
      id: 3,
    },
    {
      name: 'pinterest',
      href: 'pinterest.com',
      id: 4,
    },
  ]

  const infos = [
    { name: 'cookies settings', id: 1 },
    { name: 'privacy policy', id: 2 },
    { name: 'returns', id: 3 },
    { name: 'store', id: 4 },
  ]

  return (
    <Container className='py-5 px-2 d-flex align-items-center justify-content-center'>
      <div className='d-flex flex-column gap-5 justify-content-center text-center'>
        <h1>JOIN OUR NEWSLETTER</h1>
        <div className='d-md-flex gap-4 justify-content-center align-items-center'>
          {links.map((item) => (
            <a href={`${item.href}`} target='_blank' rel='noreferrer' key={item.id}>
              <p className='text-uppercase font-normal text-sm text-black-50'>
                {item.name}
              </p>
            </a>
          ))}
        </div>
        <div className='d-md-flex justify-content-center align-items-center gap-4'>
          {infos.map((it) => (
            <p
              className='uppercase font-normal text-xs mx-2'
              key={it.id}
            >
              {it.name}|
            </p>
          ))}
        </div>
      </div>
    </Container>
  )
}