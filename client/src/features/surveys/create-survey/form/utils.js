import _ from 'lodash';
import { FIELDS } from './index';

const validateEmails = emails => {
  if (!emails) return null;

  const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => emailRegExp.test(email) === false);

  if (invalidEmails.length) return `These emails are invalid: ${invalidEmails.join(', ')}`;
};

export const validateFields = values => {
  const errors = {};

  _.each(FIELDS, ({ name, label }) => {
    if (!values[name]) {
      errors[name] = `You mast provide a value [${label}]`;
    }
  });

  errors.recipients = validateEmails(values.recipients) || errors.recipients;

  return errors;
};
