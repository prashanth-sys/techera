import {Component} from 'react'

import Header from '../Header'
import Courses from '../Courses'

import './index.css'

class TechEra extends Component {
  state = {courseData: []}

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const option = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, option)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))
      this.setState({courseData: updatedData})
    }
  }

  render() {
    const {courseData} = this.state
    return (
      <>
        <Header />
        <div className="bg-container">
          <div>
            <h1 className="courses-heading">Courses</h1>
            <ul className="list-item">
              {courseData.map(eachCourse => (
                <Courses key={eachCourse.id} courseDetails={eachCourse} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default TechEra
