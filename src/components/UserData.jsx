import React from 'react'
import User from './User'



function UserData( props) {
  return (
  

    <div>
      
      
        {props.userData.map((item, index)=> {
      return <User 
      key={index} 
      userInfo={item}
      updateUser={props.editUser}
      deleteUser={props.deleteUser}
      
      
      />
    }



  )
}




        
    

  
   

</div>
  )
  
    
}

export default UserData;