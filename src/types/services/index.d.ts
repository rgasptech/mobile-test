interface FetchResponse {
  data: any;
  message: string;
  is_success: boolean;
}

interface IContact {
  name: string;
  email: string;
  born: string;
  bio: string;
  photo: string;
  id: string;
}

export type {FetchResponse, IContact};
