import React from 'react';

const CourseForm=(props)=>{   //   here form 
   return(
       <form onSubmit={props.addCourse}>
           <input type="text" value={props.current} onChange={props.updateCourse}/>
           <button >ADD</button>
       </form>
   );
}

export default CourseForm;
