import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '~types';

const useNavigate = () =>
  useNavigation<StackNavigationProp<RootStackParamList>>();

export default useNavigate;
