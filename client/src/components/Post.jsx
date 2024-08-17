import React from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export default function Post({ 
  title, 
  summary, 
  cover, 
  content,
  createdAt, 
  username,
}) {
    // Validate the createdAt value
    let formattedDate = "Invalid Date";

    try {
        formattedDate = createdAt ? formatISO9075(new Date(createdAt)) : "No Date Provided";
    } catch (error) {
        console.error("Error formatting date:", error);
    }

    return (
        <div className="post">
            <div className="pb-3">
                <div className="row-entry g-4 row d-flex justify-content-center align-items-center mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="image">
                          <Link to='/post/_id'>
                            <img 
                            src={"http://localhost:4000/" + cover} 
                            alt="cover" className="w-100" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="texts">
                            <div className="container">
                            <Link to='/post/_id'>
                                <h1 className="title">{title}</h1>
                                </Link>
                                <p
                                    className="info"
                                    style={{
                                        fontSize: "11px",
                                        color: "#777",
                                        marginTop: "0",
                                        marginBottom: "0px",
                                    }}
                                >{/**<a className='author'>{author} */}
                                    <span>
                                        {username} 
                                        <time className="text-reset" style={{marginLeft:'5px'}}>{formattedDate}</time>
                                    </span>
                                </p>
                                <p className="summary" style={{ fontSize: "15px", marginTop: "5px" }}>
                                    {summary}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
