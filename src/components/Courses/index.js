import './index.css'

const Courses = props => {
  const {courseDetails} = props
  const {name, logoUrl} = courseDetails
  return (
    <li className="list-items">
      <div className="list-container">
        <img src={logoUrl} alt="krishna" className="course-logo" />
        <p className="logo-name">{name}</p>
      </div>
    </li>
  )
}
export default Courses
