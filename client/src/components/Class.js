import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Class() {
    let { id } = useParams();
    return (
        <>
            <div className="container">
                <div className="class container d-flex flex-row justify-content-center align-items-center my-5">
                    <div className="d-flex flex-column text-muted mx-5">
                        <h1>{id}</h1>
                        <h4 className='text-bold'>By Striver</h4>
                        <p>DSA</p>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <Link to="/meet" target='blank'><button type="button" className="btn btn-secondary mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 18 18">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg>
                                Join Live</button></Link>
                            <button type="button" className="btn btn-outline-secondary mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                </svg>
                                Class PDF</button>
                        </div>
                    </div>
                    <div className="d-flex flex-column mx-5">
                        <div className="card" style={{ width: "14rem" }}>
                            <img src="../images/teacher.png" className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
