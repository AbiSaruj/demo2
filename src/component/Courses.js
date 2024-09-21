import React, { useEffect, useState } from "react";
import './Course.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Courses() {
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching courses!</p>;

    return (
        <div>
            <h1 className='text-center my-5'>Automobile Engineering Courses</h1>
            <div className='container'>
                <div className='row'>
                    {courses.map((course) => (
                        <div className='col-md-6 mb-5' key={course.id}>
                            <div className="card">
                                <div className="thumbnail">
                                    <div className="img-container mt-5">
                                        <img 
                                            src={`http://localhost/react34/api/images/${course.image1}`} 
                                            className="img-fluid career-image rounded custom-image" 
                                            alt={course.courseName} 
                                        />
                                        <div className="overlay"></div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{course.courseName}</h5>
                                    <Link to={`/courses/${course.id}`} className="btn btn-danger">Read more</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}