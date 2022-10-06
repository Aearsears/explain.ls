import React from 'react';
import PropTypes from 'prop-types';

function Drawing({
    children
}: {
    children: React.ReactNode | React.ReactNode[];
}) {
    return <div>{children}</div>;
}

export default Drawing;
