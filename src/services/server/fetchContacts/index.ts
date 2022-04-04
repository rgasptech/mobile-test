import axios from 'axios';
import {FetchResponse, IContact} from '~types';

const fetchContacts = () => {
  return new Promise<FetchResponse>(async (resolved, rejected) => {
    try {
      const {data} = await axios.get(
        'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/content.json',
      );
      const is_success = !!data && Array.isArray(data);
      const contacts = data?.map((item: IContact) => ({
        ...item,
        id: item?.name,
      }));
      resolved({
        message: is_success
          ? 'Data retrieved successfuly'
          : 'Failed to retrieve data',
        data: is_success ? contacts : data,
        is_success,
      });
    } catch (error) {
      rejected({
        // @ts-ignore
        message: error?.message,
        data: null,
        is_success: false,
      });
    }
  });
};

export default fetchContacts;
