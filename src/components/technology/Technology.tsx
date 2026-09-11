import React, { use } from 'react';
import type { Itechnology } from '../../types/technologyType';
interface technologyPromiseProps{
    technologyPromise:Promise<Itechnology[]>
}
const Technology = ({technologyPromise}:technologyPromiseProps) => {
    console.log(technologyPromise)
    const technologys=use(technologyPromise)
    console.log(technologys)
    return (
        <div>
            
        </div>
    );
};

export default Technology;