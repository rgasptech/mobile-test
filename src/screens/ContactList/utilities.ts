import {IContact} from '~types';

const keyExtractor = ({id}: IContact) => `${id}`;

export {keyExtractor};
