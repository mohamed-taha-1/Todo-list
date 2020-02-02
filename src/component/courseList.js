import React from 'react';

class CourseList extends React.Component

{

state=
{
    isIdit:false
}


    renderCourse = () =>                                   // to make  it more redable  using  in  a function
    {
       return (
        <li>
           <span>
             {this.props.details.name} 
             </span>
             <button onClick={()=>{this.togelState()}}> EDIT Course</button>
            <button    onClick={ ()=> {this.props.deleteCourse(this.props.index)}} >  DLETE   </button>  
            
        </li>
       );
    }
 togelState=()=>{
        let {isIdit}=this.state;
        this.setState({
            isIdit:!isIdit
     })
 } 
                                         // update course item
updateCourseItem=(e)=>
{
    e.preventDefault();
   this.props.editCourse(this.props.index,this.input.value);
  this.togelState();

}

renderForm=()=>
    {

      return(
        <form  onSubmit={this.updateCourseItem}>  
             <input type="text"  ref={(v)=>{this.input = v}}  defaultValue={this.props.details.name} />
             <button >update course</button>
        </form>
      );
    }
                                             //   function toggel state
                                                    // end  toggel



   render()
   {
       let isIdit=this.state.isIdit;
       return (
           <React.Fragment>                                    
               {isIdit ? this.renderForm():  this.renderCourse()}  
                                        
           </React.Fragment>
       );
   }

}

export default CourseList;