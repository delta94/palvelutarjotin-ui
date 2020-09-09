import { MockedResponse } from '@apollo/react-testing';
import { advanceTo, clear } from 'jest-date-mock';
import React from 'react';
import wait from 'waait';

import { EventsDocument, Event } from '../../../generated/graphql';
import {
  fakeEvents,
  fakePEvent,
  fakeLocalizedObject,
  fakeKeyword,
} from '../../../utils/mockDataUtils';
import { render, screen, act } from '../../../utils/testUtils';
import EventsPage from '../EventsPage';

const testDate = new Date(2020, 5, 20);

const fakeKeywords = [
  fakeKeyword({ name: fakeLocalizedObject('vanhukset') }),
  fakeKeyword({ name: fakeLocalizedObject('nuoret') }),
  fakeKeyword({ name: fakeLocalizedObject('lapset') }),
  fakeKeyword({ name: fakeLocalizedObject('ilmainen') }),
];

const eventMocks: Partial<Event>[] = [
  {
    name: fakeLocalizedObject('Testitapahtuma 1'),
    description: fakeLocalizedObject('Tapahtuman kuvaus 1'),
    pEvent: fakePEvent({
      nextOccurrenceDatetime: new Date(2020, 8, 20, 10, 30).toISOString(),
      lastOccurrenceDatetime: '',
    }),
    keywords: fakeKeywords,
  },
  {
    name: fakeLocalizedObject('Testitapahtuma 2'),
    description: fakeLocalizedObject('Tapahtuman kuvaus 2'),
    pEvent: fakePEvent({
      nextOccurrenceDatetime: new Date(2020, 9, 21, 10, 20).toISOString(),
      lastOccurrenceDatetime: '',
    }),
    keywords: fakeKeywords,
  },
  {
    name: fakeLocalizedObject('Testitapahtuma 3'),
    description: fakeLocalizedObject('Tapahtuman kuvaus 3'),
    pEvent: fakePEvent({
      nextOccurrenceDatetime: new Date(2020, 10, 22, 12, 40).toISOString(),
      lastOccurrenceDatetime: '',
    }),
    keywords: fakeKeywords,
  },
];

const mocks: MockedResponse[] = [
  {
    request: {
      query: EventsDocument,
      variables: {
        include: ['keywords,location'],
        text: '',
        inLanguage: '',
        locations: '',
        start: 'now',
        pageSize: 10,
        sort: 'start_time',
      },
    },
    result: {
      data: {
        events: fakeEvents(3, eventMocks),
      },
    },
  },
];

afterEach(() => {
  clear();
});

test('renders search form and events list with correct information', async () => {
  advanceTo(testDate);

  render(<EventsPage />, { mocks });

  await act(wait);

  expect(
    screen.queryByRole('heading', { name: 'Palvelutarjotin' })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('heading', { name: 'Hae tapahtumia' })
  ).toBeInTheDocument();
  expect(screen.queryByLabelText('Hae tapahtumia')).toBeInTheDocument();
  expect(
    screen.queryByLabelText('Kielet', { selector: 'button' })
  ).toBeInTheDocument();
  expect(screen.queryByLabelText('Paikat')).toBeInTheDocument();
  expect(screen.queryByLabelText('Ajankohta')).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Hae' })).toBeInTheDocument();
  expect(
    screen.queryByRole('button', { name: 'Tyhjennä hakuehdot' })
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText(/Järjestys/i, { selector: 'button' })
  ).toHaveTextContent('Aika, nouseva');

  expect(
    screen.queryByRole('heading', { name: 'Tapahtumat 3 kpl' })
  ).toBeInTheDocument();

  eventMocks.forEach((event) => {
    expect(screen.queryByText(event.name!.fi!)).toBeInTheDocument();
    expect(screen.queryByText(event.description!.fi!)).toBeInTheDocument();
  });

  fakeKeywords.forEach((keyword) => {
    expect(screen.getAllByText(keyword.name!.fi!)).toHaveLength(3);
  });
});