type ContactFormTypes = {id: string} | undefined;

type RootStackParamList = {
  ContactDetail: {id: string};
  ContactForm: ContactFormTypes;
  ContactList: undefined;
};

export type {RootStackParamList};
