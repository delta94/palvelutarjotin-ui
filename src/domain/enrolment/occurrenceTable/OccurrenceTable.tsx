import { Notification } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Table from '../../../common/components/table/Table';
import { OccurrenceFieldsFragment } from '../../../generated/graphql';
import useLocale from '../../../hooks/useLocale';
import formatDate from '../../../utils/formatDate';
import formatTimeRange from '../../../utils/formatTimeRange';
import PlaceText from '../../place/placeText/PlaceText';

interface Props {
  eventLocationId: string;
  occurrences: OccurrenceFieldsFragment[];
}

const OccurrenceTable: React.FC<Props> = ({ eventLocationId, occurrences }) => {
  const { t } = useTranslation();
  const locale = useLocale();
  const columns = [
    {
      Header: t('enrolment:occurrenceTable.columnDate'),
      accessor: (row: OccurrenceFieldsFragment) =>
        formatDate(new Date(row.startTime)),
      id: 'date',
    },
    {
      Header: t('enrolment:occurrenceTable.columnTime'),
      accessor: (row: OccurrenceFieldsFragment) =>
        formatTimeRange(new Date(row.startTime), new Date(row.endTime), locale),

      id: 'time',
    },
    {
      Header: t('enrolment:occurrenceTable.columnPlace'),
      accessor: (row: OccurrenceFieldsFragment) => {
        const placeId = row.placeId || eventLocationId;
        return placeId ? <PlaceText placeId={placeId} /> : '-';
      },
      id: 'place',
    },
    {
      Header: t('enrolment:occurrenceTable.columnSeatsInfo'),
      accessor: (row: OccurrenceFieldsFragment) =>
        `${row.amountOfSeats} (${row.minGroupSize}-${row.maxGroupSize})`,
      id: 'seatsInfo',
    },
  ];
  return occurrences.length ? (
    <>
      <h2>{t('enrolment:occurrenceTable.title')}</h2>
      <Table columns={columns} data={occurrences} />
    </>
  ) : (
    <Notification
      labelText={t('enrolment:occurrenceTable.noSelectedOccurrences')}
      type="error"
    />
  );
};

export default OccurrenceTable;
