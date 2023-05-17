import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'

function Fourth_Task() {

    const [user, setUser] = React.useState(0);
    const count = React.useRef(0)

    useEffect(() => {
        count.current += 1;
    })
    return (
        <>

            <div class="d-flex justify-content-center mt-5 mb-5">
                <Link to='/First_Task' className="text-primary fw-bold ms-3 me-3"><i class="bi bi-1-circle-fill"></i> First Task</Link>
                <Link to='/Second_Task' className="text-warning fw-bold  ms-3 me-3"><i class="bi bi-2-circle-fill"></i> Second Task</Link>
                <Link to='/Third_Task' className="text-info fw-bold  ms-3 me-3"><i class="bi bi-3-circle-fill"></i> Third Task</Link>
                <Link to='/Fourth_Task' className="text-secondary fw-bold  ms-3 me-3"><i class="bi bi-4-circle-fill"></i> Fourth Task</Link>
            </div>
            <div className="text-center">
                <input type="text"
                    onChange={(e) => setUser(e.target.value)}
                /><br></br><br></br>
                <p>You're input Text is.. <b><i>{user}</i></b> </p>

                <h6>You're Data was Render {count.current} Times.</h6>
            </div>

            <div className="mt-5 text-center text-secondary">
                <p>[ useRef example ]</p>
            </div>
        </>
    );
}

export default Fourth_Task