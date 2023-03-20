import courses from "../data/courses"
import { Link, useParams, useNavigate } from 'react-router-dom'
// import NotFound from "./NotFound"
import { useEffect } from "react"
const SingleCourse = () => {
    const params = useParams()
    const navigate = useNavigate()
    const course = courses.find((course) => course.slug === params.slug)
    useEffect(() => {
        if (!course) {
            navigate('..', {relative: 'path'})
        }
    }, [course])

    // if(!course) {
    //     return (
    //     <>
    //     <NotFound />
    //     <Link to=".." relative="path">All Courses</Link>
    //     </>)
    // }
    return (
    <>
    <h1>{course?.title}</h1>
    <h2>{course?.slug}</h2>
    <h3>{course?.id}</h3>
    <Link to=".." relative="path">All Courses</Link>
    </>
  )
}

export default SingleCourse