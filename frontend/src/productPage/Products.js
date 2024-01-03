// import React, { useCallback, useEffect, useState } from 'react';
// import axios from 'axios';

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async(currentPage) => {
//       setLoading(true);
//       try {
//         const { data } = await axios(
//           `http://localhost:8090/api/products?page=${currentPage}`
//         );

//         // Check if products state is empty (first fetch)
//         setLoading(false);
//         if (products.length === 0) {
//           setProducts(data);
//         } else {
//           setProducts((prevProducts) => [...prevProducts, ...data]);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     }
  
  
//   // const fetchData = useCallback(
//   //   async (currentPage) => {
//   //     setLoading(true);
//   //     try {
//   //       const { data } = await axios(
//   //         `http://localhost:8090/api/products?page=${currentPage}`
//   //       );

//   //       // Check if products state is empty (first fetch)
//   //       setLoading(false);
//   //       if (products.length === 0) {
//   //         setProducts(data);
//   //       } else {
//   //         setProducts((prevProducts) => [...prevProducts, ...data]);
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //       setLoading(false);
//   //     }
//   //   },
//   //   [products]
//   // );

  

//   useEffect(() => {
//     const handleScroll = () => {
//       const isAtBottom =
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight;
//       if (isAtBottom) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };

//   })
 




//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

  

//   console.log('products', products);

//   return (
//     <div>
//       <div>
//         {products.map((product, index) => (
//           <div key={product._id}>
//           <div
//             className="product-item"
//             style={{
//               height: '300px',
//               border: '2px solid black',
//               marginBottom: '10px',
//               width: '400px',
//               margin: '20px auto',
//               transition: 'width 0.6s, opacity 0.6s',
              
//             }}
//             key={product._id}
//           >
//             <img style={{width:"100%"}} src="/images/bbdfobzd4z33ryrgutvz.jpg" alt="" />
          
//           </div>
//              <span>{index + 1}</span>
//              <strong>{product.name}</strong>
//           </div>
         
//         ))}
//       </div>
//       {loading && <h2>LOADING</h2>}
//     </div>
//   );
// }

// export default Products;
