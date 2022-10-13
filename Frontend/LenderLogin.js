import React from 'react'

const LenderLogin = () => {
    return (
        <div className="mt-5">
            <h2>Login to continue to App</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Lender's email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LenderLogin