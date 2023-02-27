const Course = (props) => {
    // console.log(course.parts)
    // const myCourse = course.map(i => i.id)
    return(
      <div>
        {props.course.map(i => 
        // id of each index in the course array
          <div key = {i.id}> 
            <Header header = {i.name} />
            <Content parts = {i.parts} />
            <Total parts = {i.parts} />     
            {/* <h1>{i.name}</h1>
            <p>{i.parts[0].name} {i.parts[0].exercises}</p> */}
          </div>
        )}
      </div>
    )
  }
  
  // Totals component
  const Total = (props) => {  
    console.log(props)
    return(
        <>
            <p>Number of exercises:<span> </span>
              {props.parts.map(i => i.exercises).reduce((x,y) => {
                return x + y})}
            </p>
        </>
    )
  }
  
  const Part = (props) => {
    // console.log("this is the content prop", props.props.parts)
    return(
      <>
        {props.props.parts.map(i =>
          <p key = {i.id}>
            {i.name + " " + i.exercises}
          </p>)
        }      
      </>
    )
  }
  
  const Content = (props) => {
    return(
      <>
        <Part props = {props} />      
      </>
    )
  }
  
  // Header component
  const Header = ({header}) => {
    return(
      <>
        <h1>
          {header}
        </h1>
      </>
    )
  }

  export default Course