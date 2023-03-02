import React, {useState} from 'react';
import {ControlledRating} from './ControlledRating';

export default {
    title: 'Rating',
    component: ControlledRating,
}

export const EmptyRating = () => <ControlledRating value={0} setValue={x => x}/>
export const Rating1 = () => <ControlledRating value={1} setValue={x => x}/>
export const Rating2 = () => <ControlledRating value={2} setValue={x => x}/>
export const Rating3 = () => <ControlledRating value={3} setValue={x => x}/>
export const Rating4 = () => <ControlledRating value={4} setValue={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState(1);
    return <ControlledRating value={rating} setValue={setRating}/>;
}
