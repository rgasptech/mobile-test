interface FetchResponse {
  data: any;
  message: string;
  is_success: boolean;
}

interface IContact {
  name: string;
  email: string;
  born: string | undefined;
  bio: string | undefined;
  photo: string | undefined;
  id: string;
}

export type {FetchResponse, IContact};
