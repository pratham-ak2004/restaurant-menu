import React from 'react';
import './Category.css';

const Category = () => {

  return (
    <div className='abc'>
        {/* <div className="main text-center mt-5">
         <h6 className="heading">What's included for 12 months</h6>
         <p className="text-info">Everything you'll need to support customer in your first year</p>
         <p className="text-info">We'll also discount your 2nd year with help Scout 20%</p>
        </div> */}
                           
        <div className="container mt-4 d-flex justify-content-center">
           
         <div className="row g-0">

           <div className="col-md-4 border-right">
                <div className="cards">
                    
               
                <div className="first bg-white p-4 text-center">
                    <img className='im'src="https://cdn-icons-png.flaticon.com/128/2648/2648918.png" />

                    <h5 className='cards-text'>Breakfast</h5>
                <p className='cards-text'>No limitation - Its got everything that you 'll need as you grow</p>
                    
                </div>

                 </div>
                  
           </div>



        <div className="col-md-4 border-right">
            <div className="cards">
                <div className="second bg-white p-4 text-center">
                    <img className='im' src="https://cdn-icons-png.flaticon.com/128/4252/4252416.png"/>

                    <h5 className='cards-text'>Lunch</h5>
                    <p className='cards-text'>$50/month gets you 10 users, and you can add more $10 pe user</p>
                    
                </div>
            </div>

        </div>




        <div className="col-md-4">

            <div className="cards">
                <div className=" third bg-white p-4 text-center">
                     <img className='im' src="./images/soda.png"/>
                    <h5 className='cards-text'>Drinks</h5>
                    <p className='cards-text'>We'll help you get started and be there when you have questions</p>
                </div>
            </div>
        </div>

     </div>
           
        </div>
    </div>
  )
}

export default Category;