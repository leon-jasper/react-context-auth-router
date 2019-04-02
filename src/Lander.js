import React from 'react';
import { AuthConsumer } from './AuthContext';


const Lander = () => <h2>
    <AuthConsumer>
        {({ isAuth }) => (
            <p>Lander {isAuth ? '(logged-in)' : '(not so logged-in)'}</p>
        )}
    </AuthConsumer>
</h2>

export default Lander;
