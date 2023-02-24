// Part component that lifts the logic of content from the Content component
const Part = (props) => {
    return(
        <>
            <p>{props.parts[0].name} {props.parts[0].exercises}</p>
            <p>{props.parts[1].name} {props.parts[1].exercises}</p>
            <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </>
    )
}

// Content component separating the logic of the individual parts
const Content = (props) => {
    return (
        <>
            <Part props = {props} />
            <Part props = {props} />
            <Part props = {props} />
        </>
        
    )
}

// Totals component
const Total = (props) => {
    return(
        <>
            <p>Number of exercises: 
            {props.parts[0].exercises + 
            props.parts[1].exercises + 
            props.parts[2].exercises}
            </p>
        </>
    )
}

// Header component
const Header = (props) => {
    return(
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack Application Development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to add data',
                exercises: 7
            },
            {
                name: 'State of component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course = {course.name} />
            <Content parts = {course.parts} />
            <Total parts = {course.parts} />
        </div>
    )
}
export default App