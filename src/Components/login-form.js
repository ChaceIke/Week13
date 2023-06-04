import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="card rounded-0 bg-info text-light border-light" id="login-form">
                <div className="card card-header">
                    Welcome User!
                </div>
                <div className="card-body">
                    <div className='form-group'>
                        <label htmlFor="username">Username:</label>
                        <input className='form-control' id="username" placeholder='Username (i.e. FlyinPanda68)'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input className='form-control' id="password" placeholder='Password'></input>
                    </div>
                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </div>
        )
    }
}