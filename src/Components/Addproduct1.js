import React, { useEffect } from "react";
import {db,auth,database,newref,storage1} from './firebaseSeller'
import './Seller/AddProduct.css';
import { useHistory } from "react-router";

import { doc, setDoc ,getDoc,collection} from "firebase/firestore"; 
import {onAuthStateChanged} from 'firebase/auth';
import { ref,uploadBytes,getDownloadURL,getStorage } from "firebase/storage";
import {set,push} from "firebase/database"

 export default function Addproduct1() {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const [id,setID]=React.useState('')
  const [option,setOption] =React.useState('')
 const history=useHistory()


 
  const [currentCategory, setCurrentCategory] = React.useState('Electronics')
  //const [current,setCurrent]=React.useState('')
  const [currentUser,setCurrentUser]=React.useState('')
  
 
 onAuthStateChanged(auth,(user)=>{
if(user)
{
  setCurrentUser(user)
 console.log(currentUser.uid);
  
}
else{
  
  setCurrentUser(null)
 alert("please Login first")
 history.push('/LoginSeller')
}
 })
 
//   const onFileChange = async (e) => {
//     try
//     {
//     const file = e.target.files[0];
//     console.log(file)
//     const storage = storage1();
//     const storageRef = ref(storage, file.name);
//     //const storageRef = db.ref();
//    // const fileRef = storageRef.child(file.name);
//    // await fileRef.put(file);
//    uploadBytes(storageRef, file).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
//     console.log(snapshot)
//     // console.log(getDownloadURL(ref(storage, file.name)))
//     getDownloadURL(ref(storage, file.name)).then(d=>{
//       console.log(d)
//     })
//   });
//    //setFileUrl(await file.getDownloadURL());
  
//    console.log(fileUrl)
//   }
//  catch(error){
//   console.log(error.message)

// }
//   }
  
  
  
  
  
  const changeCategory = (newCategory) => {
    setCurrentCategory(newCategory)
    const y=newCategory
    console.log(y)
       }
       
  
  
  const onSubmit = async(e) => {
     e.preventDefault();
    const productName=e.target.productName.value;
   const Description=e.target.Description.value;
   const cost=e.target.cost.value;
   const file = e.target.File.files[0];
    console.log(file)
    //const storage = getStorage();
    const storageRef = ref(storage1, file.name);
    //const storageRef = db.ref();
   // const fileRef = storageRef.child(file.name);
   // await fileRef.put(file);
  //  if(currentUser==null)
  //  {
  //     alert("please login first to upload")
  //     history.push('/LoginSeller')
  //  }
  //  else{
   
   uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    alert("image successfully uploaded")
    console.log(snapshot)
    // console.log(getDownloadURL(ref(storage, file.name)))
    getDownloadURL(ref(storage1, file.name)).then(d=>{
      console.log(d)
   var newDate=new Date()
   set(newref(database, 'products/'+currentUser.uid+newDate), {
        productname: productName,
        description: Description,
        price:cost,
        imageUrl: d,
        Category:currentCategory,
        userId : currentUser.uid,
        productId:currentUser.uid+newDate
        
        
      });
      
    })
    })

  // }
  
}


 

 



        return (
      <>
    <div className="login-form">
              
       
            <h1>Become an
         <br/>Amazon seller</h1>
         <form onSubmit={onSubmit}>
        <div className="container-form">
         
         <h3><label >Name </label></h3>
        <input id="post" className="ProductName-f" name="productName" type='text' required/>
        <br/>
       <h3>  <label >Image </label> </h3>
        <input type="file" name="File" id="image"className="image-upload-f" accept=".jpg,.png,jpeg" required />
        <br/>
     <h3>  <label> Description </label></h3>
        <input  className="Description-f"type="text" name="Description" required/>
        <br></br>
        <h3><label>Category</label></h3> 
        <select className="category"
        onChange={(event) => changeCategory(event.target.value)}
        value={currentCategory}
      >
        <option value="Electronics">Electronics</option>
        <option value="Home">Home appliances</option>
        <option value="Fashion">clothing and Fashion</option>
        <option value="Kids">Kids</option>

      </select>
<br></br>
      <h3><label>  Price </label></h3>
                  <input className="Price-f" type="text" name="cost" required/>
                  <button className="upload_button-f" type="submit"  >Upload</button>
                  
                  

                    
              

  
        </div>
        </form>
     
          {/* <div className="product">
            
          
        {users.map((user) => {
          return (
            
            <div className="display" key={user.userId}>
              <div className="produt-info">
              <img className="img" src={user.avatar} alt={user.productName}  />
              
             
              <p className="product-info">{user.productname}</p>
              <p className="product-info">{user.description}</p>
              <p className="product-info">{user.price}</p>
              
              </div>

            </div>
            
          );
          
        })}
        </div> */}
     
      
        </div>
         
      
    </>
  );
}

 