import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
            const response = await axios.get('http://localhost/react34/api/courses/');
            console.log('API Response:', response.data);
            if (Array.isArray(response.data)) {
                setCourses(response.data);
            } else {
                console.error('Unexpected response data format:', response.data);
                setCourses([]);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost/react34/api/index.php/${id}`);
            setCourses(courses.filter(course => course.id !== id));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching courses!</p>;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">List Courses</h1>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Course Duration</th>
                        <th>Course Fee</th>
                        <th style={{ width: '30%' }}>Content1</th>
                        <th style={{ width: '30%' }}>Content2</th>
                        <th style={{ width: '5%' }}>Image1</th>
                        <th style={{ width: '5%' }}>Image2</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.length > 0 ? (
                        courses.map((course) => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.courseId}</td>
                                <td>{course.courseName}</td>
                                <td>{course.courseDuration}</td>
                                <td>{course.courseFee}</td>
                                <td style={{ width: '20%' }}>{course.content1}</td>
                                <td style={{ width: '20%' }}>{course.content2}</td>
                                <td>{course.image1}</td>
                                <td>{course.image2}</td>
                                <td>
                                    <Link to={`user/${course.id}/edit`} className="btn btn-primary btn-sm me-2" style={{ minWidth: '70px' }}>
                                        Edit
                                    </Link>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => handleDelete(course.id)}
                                        style={{ minWidth: '70px' }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center">No courses available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
