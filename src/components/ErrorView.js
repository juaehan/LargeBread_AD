import React, { memo } from 'react';

const ErrorView = memo(({error}) => {
    return (
        <div>
            <p>{error.message}</p>
        </div>
    );
});

export default ErrorView;