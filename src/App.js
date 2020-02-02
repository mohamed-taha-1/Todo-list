import React from 'react' ;
import CourseForm from './component/courseForm'
import CourseList from './component/courseList'
class App extends React.Component{
  state={                                                        //  to update 
    courses:[
      {name:"html"},
      {name:"css"},
      {name:"jquery"}
    ],
    current :''
  }
                                                                //  end state
                                                                // update course

updateCourse=(e)=>{
  e.preventDefault();
  this.setState({
   current:e.target.value

  })
}
                                                      // end update

                                                      // add course

addCourse=(e)=>{
  e.preventDefault();                                //  to prevent reaload  the page
  let current=this.state.current;                   //  x is a  varaible    
  let courses=this.state.courses;                  //  y is a  varaible   
  courses.push({name:current})
  this.setState({
    courses:courses,                             //  update  the old value with a new  value
    current:''                                  //  to make it empty
  })
}                                             // end   add

// delete course
deleteCourse=(index)=>{
  let courses=this.state.courses;
  courses.splice(index,1);                       //  delete  1  item  acording to   index number
  this.setState({
    courses:courses                              //  update  after   delete
  })


}    

// end delete


                                                    //edit course
 editCourse=(index,value)=>

 {
     let courses=this.state.courses;
     let course=courses[index]
    course['name']=value;
    this.setState({
      courses
    })                                                
   }
  
  render()
  {
    //  loop  to all  items
    const {courses}=this.state ;                 //   intialize   x   to easy  call
    const courseList=courses.map((course,index)=>
    {
      return   <CourseList details={course}  key={index} index={index}   deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
        
    })
    
    return(

      <section className="App">
       <h2>Add course</h2>
       <CourseForm current={this.state.current}  updateCourse={this.updateCourse}  addCourse={this.addCourse}/> 
       <ul> {courseList}</ul>
     </section>
    );
  }
}

export default App;