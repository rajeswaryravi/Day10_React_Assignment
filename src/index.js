// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import picture1 from './images/img1.jpg';
// import picture2 from './images/img2.jpg';
// import picture3 from './images/img3.jfif';

// const App = function (){   
//  return(      
// <div className='ui comments'> 
//        <div className='comment'> 
//            <a href="/" className='avatar'> 
//                <img src={picture1} alt="profile picture" style={{width:"200px", margin:"0px 0px 0px 30px"}} /> 
//            </a>           
//  <div className='content' style= {{margin:"30px 0px 0px 300px"}}>  
//               <a href="/" className='author' style={{fontSize:"24px"}}>Zara Jacob</a> 
//            <div className='metadata'> 
//                <span className='date'> Today at 9:00 AM   
//              </span>           
//  </div>           
//  <div className='text'>   
//              Reactjs tutorial!   
//          </div>           
//  </div>       
//  </div>     
//        <div className='comment'> 
//            <a href="/" className='avatar'> 
//                <img src={picture2} alt="profile picture" style={{width:"200px", margin:"100px 0px 0px 0px"}} /> 
//            </a>           
//  <div className='content' style= {{margin:"100px 0px 0px 300px"}}>  
//               <a href="/" className='author' style={{fontSize:"24px"}}>Keziya Thomas</a> 
//            <div className='metadata'> 
//                <span className='date'> Today at 1:00 AM   
//              </span>           
//  </div>           
//  <div className='text'>   
//              Angular tutorial!   
//          </div>           
//  </div>       
//  </div>     
//  <div className='comment'> 
//            <a href="/" className='avatar'> 
//                <img src={picture3} alt="profile picture" style={{width:"200px", margin:"100px 0px 0px -37px"}} /> 
//            </a>           
//  <div className='content' style= {{margin:"100px 0px 0px 300px"}}>  
//               <a href="/" className='author' style={{fontSize:"24px"}}>Liz Mariya</a> 
//            <div className='metadata'> 
//                <span className='date'> Today at 5:00 AM   
//              </span>           
//  </div>           
//  <div className='text'>   
//              Javascript tutorial!   
//          </div>           
//  </div>       
//  </div>      
// </div>  


// )}
// ReactDOM.render(    <App />,    document.querySelector('#root'))


import React from 'react';
import ReactDOM from 'react-dom';
import ComponentReusability from './ComponentReusability';
import picture1 from './images/img1.jpg';
import picture2 from './images/img2.jpg';
import picture3 from './images/img3.jfif';
import UserCard from './UserCard';

const App = function () {
  return (
    <div className='ui comments'>

      <UserCard author="Author1">
        <ComponentReusability
          name="ZaraJacob"
          profile={picture1}
          date="Today at 9:00 AM"
          text="React"
        />
      </UserCard>
      <UserCard author="Author2">
        <ComponentReusability
          name="Keziya Thomas"
          profile={picture2}
          date="Today at 1:00 AM"
          text="Angular" />
      </UserCard>
      <UserCard author="Author3">
        <ComponentReusability
          name="Liza Mariya"
          profile={picture3}
          date="Today at 4:00 AM"
          text="Javascript" />
      </UserCard>
      {/* <div className='comment'> 
           <a href="/" className='avatar'> 
               <img src={picture2} alt="profile picture" style={{width:"200px", margin:"100px 0px 0px 0px"}} /> 
           </a>           
 <div className='content' style= {{margin:"100px 0px 0px 300px"}}>  
              <a href="/" className='author' style={{fontSize:"24px"}}>Keziya Thomas</a> 
           <div className='metadata'> 
               <span className='date'> Today at 1:00 AM   
             </span>           
 </div>           
 <div className='text'>   
             Angular tutorial!   
         </div>           
 </div>       
 </div>      */}
      {/* <div className='comment'> 
           <a href="/" className='avatar'> 
               <img src={picture3} alt="profile picture" style={{width:"200px", margin:"100px 0px 0px -37px"}} /> 
           </a>           
 <div className='content' style= {{margin:"100px 0px 0px 300px"}}>  
              <a href="/" className='author' style={{fontSize:"24px"}}>Liz Mariya</a> 
           <div className='metadata'> 
               <span className='date'> Today at 5:00 AM   
             </span>           
 </div>           
 <div className='text'>   
             Javascript tutorial!   
         </div>           
 </div>       
 </div>       */}
    </div>


  )
}
ReactDOM.render(<App />, document.querySelector('#root'))