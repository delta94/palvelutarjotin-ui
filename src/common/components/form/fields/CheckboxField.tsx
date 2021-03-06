import { FieldProps } from 'formik';
import { Checkbox, CheckboxProps } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { invalidFieldClass } from '../constants';
import { getErrorText } from '../utils';

type Props = FieldProps & CheckboxProps;

const CheckboxField: React.FC<Props> = (props) => {
  const {
    field: { name, ...field },
    form: { errors, touched },
    ...rest
  } = props;

  const { t } = useTranslation();
  const errorText = getErrorText(errors, touched, name, t);

  return (
    <Checkbox
      {...field}
      {...rest}
      id={name}
      checked={field.value}
      className={errorText ? invalidFieldClass : undefined}
    />
  );
};

export default CheckboxField;
