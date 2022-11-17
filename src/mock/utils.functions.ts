import { Contact } from 'src/app/models/contact.model';

export const randomPhoneNumber = () =>
  Math.round(Math.random() * Math.pow(10, 10)).toString();
export const randomId = () =>
  Math.round(Math.random() * Math.pow(10, 5)).toString();

export function updateFormControls(
  contact: Contact,
  controls: { [key: string]: any }
) {
  //valid values
  for (const key in controls) {
    controls[key].setValue((contact as any)[key]);
  }
}
