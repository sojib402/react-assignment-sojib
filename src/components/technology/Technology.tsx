import React, { use } from 'react';

const Technology = ({technologyPromise}) => {
    console.log(technologyPromise)
    const technologys=use(technologyPromise)
    console.log(technologys)
    return (
        <div>
            
        </div>
    );
};

export default Technology;