import i18n from 'i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { initReactI18next } from 'react-i18next';

import common from '../../public/static/locales/fi/common.json';
import enrolment from '../../public/static/locales/fi/enrolment.json';
import event from '../../public/static/locales/fi/event.json';
import events from '../../public/static/locales/fi/events.json';
import footer from '../../public/static/locales/fi/footer.json';
import form from '../../public/static/locales/fi/form.json';
import header from '../../public/static/locales/fi/header.json';
import occurrence from '../../public/static/locales/fi/occurrence.json';

const translations = {
  common,
  event,
  events,
  footer,
  header,
  enrolment,
  occurrence,
  form,
};

i18n.use(intervalPlural);
i18n.use(initReactI18next).init({
  lng: 'fi',
  fallbackLng: 'fi',
  resources: {
    fi: {
      ...translations,
    },
  },
});

export default i18n;
