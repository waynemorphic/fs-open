import Course from './Courses'


export default function App() {
  
  const course = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'State of a Redux',
        exercises: 17,
        id: 4
      }
    ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
]

  // const mySum = course.parts.map(i => i.exercises).reduce((x,y) => {
  //   return x + y})
  console.log(course)
  return (
    <>
      <Course course = {course} />      
    </>
  );
}
