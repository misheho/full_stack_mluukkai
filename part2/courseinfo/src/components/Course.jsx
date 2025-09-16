const Header = ({course}) => <h2>{course.name}</h2>

const Total = ({course}) => {
    const total = course.parts.reduce((accumalator,part) => {
        console.log(accumalator)
        return accumalator += part.exercises
    },0
    )
    return (
         <p><b>Total of {total} exercises.</b></p>
    )
}

const Parts = ({course}) => {
  console.log(course)
  return (
    <>
     {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </>
  )
}

const Content = ({course}) => {
  console.log(course)
  return (
    <div>
        <Parts course={course}/>
    </div>
  )
}


const Course = ({ course }) => {
  return (
    <div>
       <Header course={course} />
       <Content course={course}/>
       <Total course={course}/>
    </div>
  )
}

export default Course