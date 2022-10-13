import React from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";

const Front = () => {
    return (
        <>
            {/* <div className = "bg-success p-2 text-dark bg-opacity-10"> */}
            <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link className="btn btn-outline-success btn-lg mx-4" to="/bLogin" role="button" style={{ height: '60px', width: '300px' }}>Login as Borrower</Link>
                    <Link className="btn btn-outline-success btn-lg mx-1" to="/lLogin" role="button" style={{ height: '60px', width: '300px' }}>Login as Lender</Link>
            </div>
            <div>&nbsp;</div><div>&nbsp;</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Link className="btn btn-outline-warning btn-lg mx-4" to="/bSignup" role="button" style={{ height: '60px', width: '300px' }}>Signup as Borrower</Link>
                <Link className="btn btn-outline-warning btn-lg mx-1" to="/lSignup" role="button" style={{ height: '60px', width: '300px' }}>Signup as Lender</Link>
            </div>
            <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
            {/* </div> */}
        </>
    )
}

export default Front  