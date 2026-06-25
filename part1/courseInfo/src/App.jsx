const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      {/*props.parts.map((p) => (
        <Part part={p.name} exercises={p.exercises} key={p.name} ></Part>
      ))*/}

      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
    </div>
  )
}

const Part = (props) => {
  
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
} 

const Total = (props) => {
  /*let sum =0;
  props.parts.forEach(v => {
    sum += v.exercises
  })
  return(
    <p>
      Number of exercises {sum}
    </p>
  )*/
  return(
    <p>
      Number of exercises { 
        props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises
      }
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
