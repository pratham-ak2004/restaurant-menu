import React from 'react'

const Categories = ({filterItems,categories}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8 mx-auto'>
          <div style={{'display': 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center'}}>{
            categories.map((category)=>{
             return(
              <button className='filterItems' onClick={()=> filterItems(category)}>{category}</button>
             )
            })
           }
            </div>
      </div>
      </div>
    </div>
  )
}

export default Categories