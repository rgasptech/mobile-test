import {IContact} from '~types';

const keyExtractor = ({name}: IContact) => `${name}`;

export {keyExtractor};
