import React, { use } from 'react';
import type { Itechnology } from '../../types/technologyType';
import AvailableTechnology from '../AvailableTechnology';
interface technologyPromiseProps{
    technologyPromise:Promise<Itechnology[]>
}
const Technology = ({technologyPromise}:technologyPromiseProps) => {
    console.log(technologyPromise)
    const technologys=use(technologyPromise)
    console.log(technologys)
    return (
        <div>
            <AvailableTechnology technologys={technologys}> </AvailableTechnology>
        </div>
    );
};

export default Technology;