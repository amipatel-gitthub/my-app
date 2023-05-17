/// this is useState example

import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

function First_Task() {

    const [count, setCount] = React.useState(null)

    function getUpdate() {
        setCount(count + 1);
    }


    return (
        <>
           <div class="d-flex justify-content-center mt-5 mb-5">
                <Link to='/First_Task' className="text-primary fw-bold ms-3 me-3"><i class="bi bi-1-circle-fill"></i> First Task</Link>
                <Link to='/Second_Task' className="text-warning fw-bold  ms-3 me-3"><i class="bi bi-2-circle-fill"></i> Second Task</Link>
                <Link to='/Third_Task' className="text-info fw-bold  ms-3 me-3"><i class="bi bi-3-circle-fill"></i> Third Task</Link>
                <Link to='/Fourth_Task' className="text-secondary fw-bold  ms-3 me-3"><i class="bi bi-4-circle-fill"></i> Fourth Task</Link>
            </div>


            <div className="mt-5 text-center">
                <h5>this button click {count} Times </h5>
                <button onClick={getUpdate}>Click Here..</button>
            </div>

            <div className="mt-5 text-center text-secondary">
                <p>[ useState example ]</p>
            </div>

        </>
    );
}

export default First_Task;