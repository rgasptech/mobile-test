import axios from 'axios';
import {FetchResponse} from '~types';

const fetchContacts = () => {
  return new Promise<FetchResponse>(async (resolved, rejected) => {
    try {
      const {data} = await axios.get(
        'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/content.json',
      );
      if (!!data && Array.isArray(data)) {
        resolved({
          message: 'Data retrieved successfuly',
          data,
          is_success: true,
        });
      }
      resolved({
        message: 'Failed to retrieve data',
        data,
        is_success: false,
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
