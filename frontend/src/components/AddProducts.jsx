// import  { useState } from 'react';
// import '../styles/AddProducts.css';

// function AddProducts() {
//   const [productName, setProductName] = useState('');
//   const [businessDescription, setBusinessDescription] = useState('');
//   const [productCategory, setProductCategory] = useState('Health & Medicine');
//   const [productSubCategory, setProductSubCategory] = useState('Beauty');
//   const [quantity, setQuantity] = useState(0);
//   const [sku, setSku] = useState('');
//   const [weight, setWeight] = useState(12);
//   const [dimensions, setDimensions] = useState({ length: 12, breadth: 12, width: 12 });
//   const [price, setPrice] = useState(180);
//   const [compareAtPrice, setCompareAtPrice] = useState(320);
//   const [images, setImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setImages(files.map(file => URL.createObjectURL(file)));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log({
//       productName,
//       businessDescription,
//       productCategory,
//       productSubCategory,
//       quantity,
//       sku,
//       weight,
//       dimensions,
//       price,
//       compareAtPrice,
//       images,
//     });
//   };

//   return (
//     <div className="add-product-container">
//       <h1>Add New Product</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Product Name</label>
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Business Description</label>
//           <textarea
//             value={businessDescription}
//             onChange={(e) => setBusinessDescription(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Product Images</label>
//           <input type="file" multiple onChange={handleImageUpload} />
//           <div className="image-preview">
//             {images.map((src, index) => (
//               <img key={index} src={src} alt="Product Preview" />
//             ))}
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Product Category</label>
//           <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
//             <option value="Health & Medicine">Health & Medicine</option>
//             <option value="Beauty">Beauty</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Sub Category</label>
//           <select value={productSubCategory} onChange={(e) => setProductSubCategory(e.target.value)}>
//             <option value="Beauty">Beauty</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Quantity</label>
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>SKU (Optional)</label>
//           <input
//             type="text"
//             value={sku}
//             onChange={(e) => setSku(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Item Weight (kg)</label>
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Package Size (inches)</label>
//           <div className="dimensions">
//             <input
//               type="number"
//               placeholder="Length"
//               value={dimensions.length}
//               onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
//             />
//             <input
//               type="number"
//               placeholder="Breadth"
//               value={dimensions.breadth}
//               onChange={(e) => setDimensions({ ...dimensions, breadth: e.target.value })}
//             />
//             <input
//               type="number"
//               placeholder="Width"
//               value={dimensions.width}
//               onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Price ($)</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Compare at Price ($)</label>
//           <input
//             type="number"
//             value={compareAtPrice}
//             onChange={(e) => setCompareAtPrice(e.target.value)}
//           />
//         </div>

//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// }

// export default AddProducts;
