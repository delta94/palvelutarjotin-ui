import {
  EnrolOccurrenceMutationInput,
  Language,
  StudyLevel,
  NotificationType,
} from '../../generated/graphql';
import { EnrolmentFormFields } from './enrolmentForm/EnrolmentForm';

const getNotificationType = (
  values: EnrolmentFormFields
): NotificationType | undefined => {
  if (values.hasEmailNotification && values.hasSmsNotification)
    return NotificationType.EmailSms;
  else if (values.hasEmailNotification) return NotificationType.Email;
  else if (values.hasSmsNotification) return NotificationType.Sms;

  return undefined;
};

export const getEnrolmentPayload = ({
  occurrenceIds,
  values,
}: {
  occurrenceIds: string[];
  values: EnrolmentFormFields;
}): EnrolOccurrenceMutationInput => {
  return {
    occurrenceIds,
    notificationType: getNotificationType(values),
    person: values.isSameResponsiblePerson
      ? undefined
      : { ...values.person, language: values.language as Language },
    studyGroup: {
      ...values.studyGroup,
      amountOfAdult: Number(values.studyGroup.amountOfAdult),
      groupSize: Number(values.studyGroup.groupSize),
      person: {
        ...values.studyGroup.person,
        language: values.language as Language,
      },
      studyLevel: values.studyGroup.studyLevel as StudyLevel,
    },
  };
};
