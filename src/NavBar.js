import React, { Fragment } from 'react';
import { AuthConsumer } from './AuthContext';
import { Link } from 'react-router-dom';

export default () => (
    <Fragment>
        <AuthConsumer>
            {({ isAuth, login, logout }) => (
                <div className="Navbar">
                    <h1>
                        <Link to="/">
                            HOME
                        </Link>
                    </h1>
                    {isAuth ? (
                        <ul>
                            <Link to="/logged-in">
                                Login-Area
                            </Link>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </ul>
                    ) : (
                            <button onClick={login}>
                                Login
                        </button>
                        )}
                </div>
            )}
        </AuthConsumer>
    </Fragment>
)