import {useSelector} from 'react-redux';
import {IContact, ReduxState} from '~types';

const useContactDetail = (id: string): IContact | null => {
  const {list} = useSelector((state: ReduxState) => state.contacts);
  return list.find(contact => contact.id === id) || null;
};

export default useContactDetail;
