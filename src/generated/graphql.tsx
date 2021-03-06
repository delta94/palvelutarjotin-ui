import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `Time` scalar type represents a Time value as
   * specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Time: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   * 
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  occurrences?: Maybe<OccurrenceNodeConnection>;
  /** The ID of the object */
  occurrence?: Maybe<OccurrenceNode>;
  studyGroups?: Maybe<StudyGroupNodeConnection>;
  /** The ID of the object */
  studyGroup?: Maybe<StudyGroupNode>;
  venues?: Maybe<VenueNodeConnection>;
  venue?: Maybe<VenueNode>;
  enrolments?: Maybe<EnrolmentNodeConnection>;
  /** The ID of the object */
  enrolment?: Maybe<EnrolmentNode>;
  /** Query personal data of logged user */
  myProfile?: Maybe<PersonNode>;
  /** The ID of the object */
  person?: Maybe<PersonNode>;
  persons?: Maybe<PersonNodeConnection>;
  /** The ID of the object */
  organisation?: Maybe<OrganisationNode>;
  organisations?: Maybe<OrganisationNodeConnection>;
  events?: Maybe<EventListResponse>;
  event?: Maybe<Event>;
  places?: Maybe<PlaceListResponse>;
  place?: Maybe<Place>;
  images?: Maybe<ImageListResponse>;
  image?: Maybe<Image>;
  keywords?: Maybe<KeywordListResponse>;
  keyword?: Maybe<Keyword>;
  eventsSearch?: Maybe<EventSearchListResponse>;
  placesSearch?: Maybe<PlaceSearchListResponse>;
  notificationTemplate?: Maybe<NotificationTemplateWithContext>;
};


export type QueryOccurrencesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  time?: Maybe<Scalars['Time']>;
};


export type QueryOccurrenceArgs = {
  id: Scalars['ID'];
};


export type QueryStudyGroupsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStudyGroupArgs = {
  id: Scalars['ID'];
};


export type QueryVenuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryVenueArgs = {
  id: Scalars['ID'];
};


export type QueryEnrolmentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEnrolmentArgs = {
  id: Scalars['ID'];
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};


export type QueryPersonsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEventsArgs = {
  divisions?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  inLanguage?: Maybe<Scalars['String']>;
  isFree?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  keywordNot?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  locations?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  superEvent?: Maybe<Scalars['ID']>;
  superEventType?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  translation?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['String']>;
  showAll?: Maybe<Scalars['Boolean']>;
  publicationStatus?: Maybe<Scalars['String']>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryPlacesArgs = {
  dataSource?: Maybe<Scalars['String']>;
  divisions?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  showAllPlaces?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryImageArgs = {
  id: Scalars['ID'];
};


export type QueryKeywordsArgs = {
  dataSource?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  showAllKeywords?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type QueryKeywordArgs = {
  id: Scalars['ID'];
};


export type QueryEventsSearchArgs = {
  input: Scalars['String'];
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryPlacesSearchArgs = {
  input: Scalars['String'];
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryNotificationTemplateArgs = {
  templateType?: Maybe<NotificationTemplateType>;
  context: Scalars['JSONString'];
  language: Language;
};

export type OccurrenceNodeConnection = {
  __typename?: 'OccurrenceNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OccurrenceNodeEdge>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** A Relay edge containing a `OccurrenceNode` and its cursor. */
export type OccurrenceNodeEdge = {
  __typename?: 'OccurrenceNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OccurrenceNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type OccurrenceNode = Node & {
  __typename?: 'OccurrenceNode';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  pEvent?: Maybe<PalvelutarjotinEventNode>;
  minGroupSize: Scalars['Int'];
  maxGroupSize: Scalars['Int'];
  startTime: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
  contactPersons: PersonNodeConnection;
  studyGroups: StudyGroupNodeConnection;
  placeId: Scalars['String'];
  autoAcceptance: Scalars['Boolean'];
  amountOfSeats: Scalars['Int'];
  languages: Array<LanguageType>;
  cancelled: Scalars['Boolean'];
  enrolments: EnrolmentNodeConnection;
  remainingSeats?: Maybe<Scalars['Int']>;
  seatsTaken?: Maybe<Scalars['Int']>;
  linkedEvent?: Maybe<Event>;
};


export type OccurrenceNodeContactPersonsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OccurrenceNodeStudyGroupsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OccurrenceNodeEnrolmentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type PalvelutarjotinEventNode = Node & {
  __typename?: 'PalvelutarjotinEventNode';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  linkedEventId: Scalars['String'];
  enrolmentStart?: Maybe<Scalars['DateTime']>;
  enrolmentEndDays?: Maybe<Scalars['Int']>;
  duration: Scalars['Int'];
  neededOccurrences: Scalars['Int'];
  organisation?: Maybe<OrganisationNode>;
  contactPerson?: Maybe<PersonNode>;
  contactPhoneNumber: Scalars['String'];
  contactEmail: Scalars['String'];
  occurrences: OccurrenceNodeConnection;
  nextOccurrenceDatetime?: Maybe<Scalars['DateTime']>;
  lastOccurrenceDatetime?: Maybe<Scalars['DateTime']>;
};


export type PalvelutarjotinEventNodeOccurrencesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  time?: Maybe<Scalars['Time']>;
};

export type OrganisationNode = Node & {
  __typename?: 'OrganisationNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  type: OrganisationType;
  persons: PersonNodeConnection;
  publisherId: Scalars['String'];
  pEvent: PalvelutarjotinEventNodeConnection;
};


export type OrganisationNodePersonsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type OrganisationNodePEventArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum OrganisationType {
  /** Käyttäjä */
  User = 'USER',
  /** Provider */
  Provider = 'PROVIDER'
}

export type PersonNodeConnection = {
  __typename?: 'PersonNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PersonNodeEdge>>;
};

/** A Relay edge containing a `PersonNode` and its cursor. */
export type PersonNodeEdge = {
  __typename?: 'PersonNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PersonNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PersonNode = Node & {
  __typename?: 'PersonNode';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  emailAddress: Scalars['String'];
  language: Language;
  organisations: OrganisationNodeConnection;
  pEvent: PalvelutarjotinEventNodeConnection;
  occurrences: OccurrenceNodeConnection;
  studygroupSet: StudyGroupNodeConnection;
  enrolmentSet: EnrolmentNodeConnection;
};


export type PersonNodeOrganisationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PersonNodePEventArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PersonNodeOccurrencesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  time?: Maybe<Scalars['Time']>;
};


export type PersonNodeStudygroupSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PersonNodeEnrolmentSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum Language {
  Fi = 'FI',
  En = 'EN',
  Sv = 'SV'
}

export type OrganisationNodeConnection = {
  __typename?: 'OrganisationNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrganisationNodeEdge>>;
};

/** A Relay edge containing a `OrganisationNode` and its cursor. */
export type OrganisationNodeEdge = {
  __typename?: 'OrganisationNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OrganisationNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PalvelutarjotinEventNodeConnection = {
  __typename?: 'PalvelutarjotinEventNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PalvelutarjotinEventNodeEdge>>;
};

/** A Relay edge containing a `PalvelutarjotinEventNode` and its cursor. */
export type PalvelutarjotinEventNodeEdge = {
  __typename?: 'PalvelutarjotinEventNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PalvelutarjotinEventNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type StudyGroupNodeConnection = {
  __typename?: 'StudyGroupNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StudyGroupNodeEdge>>;
};

/** A Relay edge containing a `StudyGroupNode` and its cursor. */
export type StudyGroupNodeEdge = {
  __typename?: 'StudyGroupNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<StudyGroupNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StudyGroupNode = Node & {
  __typename?: 'StudyGroupNode';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  person: PersonNode;
  name: Scalars['String'];
  groupSize: Scalars['Int'];
  amountOfAdult: Scalars['Int'];
  groupName: Scalars['String'];
  studyLevel?: Maybe<StudyLevel>;
  extraNeeds: Scalars['String'];
  occurrences: OccurrenceNodeConnection;
  enrolments: EnrolmentNodeConnection;
};


export type StudyGroupNodeOccurrencesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  time?: Maybe<Scalars['Time']>;
};


export type StudyGroupNodeEnrolmentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum StudyLevel {
  Preschool = 'PRESCHOOL',
  Grade_1 = 'GRADE_1',
  Grade_2 = 'GRADE_2',
  Grade_3 = 'GRADE_3',
  Grade_4 = 'GRADE_4',
  Grade_5 = 'GRADE_5',
  Grade_6 = 'GRADE_6',
  Grade_7 = 'GRADE_7',
  Grade_8 = 'GRADE_8',
  Grade_9 = 'GRADE_9',
  Grade_10 = 'GRADE_10',
  Secondary = 'SECONDARY'
}

export type EnrolmentNodeConnection = {
  __typename?: 'EnrolmentNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EnrolmentNodeEdge>>;
};

/** A Relay edge containing a `EnrolmentNode` and its cursor. */
export type EnrolmentNodeEdge = {
  __typename?: 'EnrolmentNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<EnrolmentNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type EnrolmentNode = Node & {
  __typename?: 'EnrolmentNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  studyGroup: StudyGroupNode;
  occurrence: OccurrenceNode;
  enrolmentTime: Scalars['DateTime'];
  person?: Maybe<PersonNode>;
  notificationType?: Maybe<NotificationType>;
  status: EnrolmentStatus;
};

/** An enumeration. */
export enum NotificationType {
  EmailSms = 'EMAIL_SMS',
  Email = 'EMAIL',
  Sms = 'SMS'
}

/** An enumeration. */
export enum EnrolmentStatus {
  /** approved */
  Approved = 'APPROVED',
  /** pending */
  Pending = 'PENDING',
  /** cancelled */
  Cancelled = 'CANCELLED',
  /** declined */
  Declined = 'DECLINED'
}

export type LanguageType = {
  __typename?: 'LanguageType';
  id: Scalars['String'];
  name: Scalars['String'];
  occurrences: OccurrenceNodeConnection;
};


export type LanguageTypeOccurrencesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  time?: Maybe<Scalars['Time']>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['String'];
  internalId: Scalars['ID'];
  internalContext?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  location: Place;
  keywords: Array<Keyword>;
  superEvent?: Maybe<IdObject>;
  eventStatus?: Maybe<Scalars['String']>;
  externalLinks: Array<ExternalLink>;
  offers: Array<Offer>;
  subEvents: Array<IdObject>;
  images: Array<Image>;
  inLanguage: Array<InLanguage>;
  audience: Array<Keyword>;
  datePublished?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  audienceMinAge?: Maybe<Scalars['String']>;
  audienceMaxAge?: Maybe<Scalars['String']>;
  superEventType?: Maybe<Scalars['String']>;
  extensionCourse?: Maybe<ExtensionCourse>;
  name: LocalisedObject;
  localizationExtraInfo?: Maybe<LocalisedObject>;
  shortDescription: LocalisedObject;
  provider?: Maybe<LocalisedObject>;
  infoUrl?: Maybe<LocalisedObject>;
  providerContactInfo?: Maybe<Scalars['String']>;
  description: LocalisedObject;
  pEvent: PalvelutarjotinEventNode;
  venue?: Maybe<VenueNode>;
  publicationStatus?: Maybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  id?: Maybe<Scalars['String']>;
  internalId: Scalars['ID'];
  internalContext?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  divisions?: Maybe<Array<Maybe<Division>>>;
  customData?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  contactType?: Maybe<Scalars['String']>;
  addressRegion?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  postOfficeBoxNum?: Maybe<Scalars['String']>;
  addressCountry?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  nEvents?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['ID']>;
  replacedBy?: Maybe<Scalars['String']>;
  position?: Maybe<PlacePosition>;
  name?: Maybe<LocalisedObject>;
  description?: Maybe<Scalars['String']>;
  telephone?: Maybe<LocalisedObject>;
  addressLocality?: Maybe<LocalisedObject>;
  streetAddress?: Maybe<LocalisedObject>;
  infoUrl?: Maybe<LocalisedObject>;
};

export type Division = {
  __typename?: 'Division';
  type: Scalars['String'];
  /** Open Civic Data ID */
  ocdId?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  name?: Maybe<LocalisedObject>;
};

export type LocalisedObject = {
  __typename?: 'LocalisedObject';
  fi?: Maybe<Scalars['String']>;
  sv?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type PlacePosition = {
  __typename?: 'PlacePosition';
  type: Scalars['String'];
  coordinates: Array<Scalars['Float']>;
};

export type Keyword = {
  __typename?: 'Keyword';
  id?: Maybe<Scalars['String']>;
  internalId: Scalars['ID'];
  internalContext?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['ID']>;
  altLabels?: Maybe<Array<Maybe<Scalars['String']>>>;
  aggregate?: Maybe<Scalars['Boolean']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  nEvents?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  name?: Maybe<LocalisedObject>;
};

export type IdObject = {
  __typename?: 'IdObject';
  id?: Maybe<Scalars['String']>;
  internalId: Scalars['ID'];
  internalContext?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type Offer = {
  __typename?: 'Offer';
  isFree?: Maybe<Scalars['Boolean']>;
  description?: Maybe<LocalisedObject>;
  price?: Maybe<LocalisedObject>;
  infoUrl?: Maybe<LocalisedObject>;
};

export type Image = {
  __typename?: 'Image';
  id?: Maybe<Scalars['String']>;
  internalId: Scalars['ID'];
  internalContext?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
  cropping?: Maybe<Scalars['String']>;
  photographerName?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
};

export type InLanguage = {
  __typename?: 'InLanguage';
  id?: Maybe<Scalars['String']>;
  internalId: Scalars['ID'];
  internalContext?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  translationAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<LocalisedObject>;
};

export type ExtensionCourse = {
  __typename?: 'ExtensionCourse';
  enrolmentStartTime?: Maybe<Scalars['String']>;
  enrolmentEndTime?: Maybe<Scalars['String']>;
  maximumAttendeeCapacity?: Maybe<Scalars['Int']>;
  minimumAttendeeCapacity?: Maybe<Scalars['Int']>;
  remainingAttendeeCapacity?: Maybe<Scalars['Int']>;
};

export type VenueNode = Node & {
  __typename?: 'VenueNode';
  hasClothingStorage: Scalars['Boolean'];
  hasSnackEatingPlace: Scalars['Boolean'];
  translations: Array<VenueTranslationType>;
  /** place_id from linkedEvent */
  id: Scalars['ID'];
  /** Translated field in the language defined in request ACCEPT-LANGUAGE header  */
  description?: Maybe<Scalars['String']>;
};

export type VenueTranslationType = {
  __typename?: 'VenueTranslationType';
  languageCode: Language;
  description: Scalars['String'];
};

export type VenueNodeConnection = {
  __typename?: 'VenueNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VenueNodeEdge>>;
};

/** A Relay edge containing a `VenueNode` and its cursor. */
export type VenueNodeEdge = {
  __typename?: 'VenueNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<VenueNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type EventListResponse = {
  __typename?: 'EventListResponse';
  meta: Meta;
  data: Array<Event>;
};

export type Meta = {
  __typename?: 'Meta';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type PlaceListResponse = {
  __typename?: 'PlaceListResponse';
  meta: Meta;
  data: Array<Place>;
};

export type ImageListResponse = {
  __typename?: 'ImageListResponse';
  meta: Meta;
  data: Array<Image>;
};

export type KeywordListResponse = {
  __typename?: 'KeywordListResponse';
  meta: Meta;
  data: Array<Keyword>;
};

export type EventSearchListResponse = {
  __typename?: 'EventSearchListResponse';
  meta: Meta;
  data: Array<Event>;
};

export type PlaceSearchListResponse = {
  __typename?: 'PlaceSearchListResponse';
  meta: Meta;
  data: Array<Place>;
};

export type NotificationTemplateWithContext = {
  __typename?: 'NotificationTemplateWithContext';
  template?: Maybe<NotificationTemplateNode>;
  customContextPreviewHtml?: Maybe<Scalars['String']>;
  customContextPreviewText?: Maybe<Scalars['String']>;
};

export type NotificationTemplateNode = Node & {
  __typename?: 'NotificationTemplateNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  type: Scalars['String'];
  translations: Array<Maybe<NotificationTranslationType>>;
  preview?: Maybe<Scalars['String']>;
};

export type NotificationTranslationType = {
  __typename?: 'NotificationTranslationType';
  languageCode: NotificationTemplateLanguage;
  subject?: Maybe<Scalars['String']>;
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum NotificationTemplateLanguage {
  Fi = 'FI',
  En = 'EN',
  Sv = 'SV'
}

/** An enumeration. */
export enum NotificationTemplateType {
  OccurrenceEnrolment = 'OCCURRENCE_ENROLMENT',
  OccurrenceUnenrolment = 'OCCURRENCE_UNENROLMENT',
  EnrolmentApproved = 'ENROLMENT_APPROVED',
  EnrolmentDeclined = 'ENROLMENT_DECLINED',
  OccurrenceEnrolmentSms = 'OCCURRENCE_ENROLMENT_SMS',
  OccurrenceUnenrolmentSms = 'OCCURRENCE_UNENROLMENT_SMS',
  EnrolmentApprovedSms = 'ENROLMENT_APPROVED_SMS',
  EnrolmentDeclinedSms = 'ENROLMENT_DECLINED_SMS',
  OccurrenceCancelled = 'OCCURRENCE_CANCELLED',
  OccurrenceCancelledSms = 'OCCURRENCE_CANCELLED_SMS'
}


export type Mutation = {
  __typename?: 'Mutation';
  addOccurrence?: Maybe<AddOccurrenceMutationPayload>;
  updateOccurrence?: Maybe<UpdateOccurrenceMutationPayload>;
  deleteOccurrence?: Maybe<DeleteOccurrenceMutationPayload>;
  cancelOccurrence?: Maybe<CancelOccurrenceMutationPayload>;
  addVenue?: Maybe<AddVenueMutationPayload>;
  updateVenue?: Maybe<UpdateVenueMutationPayload>;
  deleteVenue?: Maybe<DeleteVenueMutationPayload>;
  addStudyGroup?: Maybe<AddStudyGroupMutationPayload>;
  /** Mutation for admin only */
  updateStudyGroup?: Maybe<UpdateStudyGroupMutationPayload>;
  /** Mutation for admin only */
  deleteStudyGroup?: Maybe<DeleteStudyGroupMutationPayload>;
  enrolOccurrence?: Maybe<EnrolOccurrenceMutationPayload>;
  /** Only staff can unenrol study group */
  unenrolOccurrence?: Maybe<UnenrolOccurrenceMutationPayload>;
  updateEnrolment?: Maybe<UpdateEnrolmentMutationPayload>;
  approveEnrolment?: Maybe<ApproveEnrolmentMutationPayload>;
  declineEnrolment?: Maybe<DeclineEnrolmentMutationPayload>;
  createMyProfile?: Maybe<CreateMyProfileMutationPayload>;
  updateMyProfile?: Maybe<UpdateMyProfileMutationPayload>;
  addOrganisation?: Maybe<AddOrganisationMutationPayload>;
  updateOrganisation?: Maybe<UpdateOrganisationMutationPayload>;
  updatePerson?: Maybe<UpdatePersonMutationPayload>;
  addEventMutation?: Maybe<AddEventMutation>;
  updateEventMutation?: Maybe<UpdateEventMutation>;
  /** Using this mutation will update event publication status and also set the `start_time`, `end_time` of linkedEvent */
  publishEventMutation?: Maybe<PublishEventMutation>;
  deleteEventMutation?: Maybe<DeleteEventMutation>;
  uploadImageMutation?: Maybe<UploadImageMutation>;
  updateImageMutation?: Maybe<UpdateImageMutation>;
  deleteImageMutation?: Maybe<DeleteImageMutation>;
};


export type MutationAddOccurrenceArgs = {
  input: AddOccurrenceMutationInput;
};


export type MutationUpdateOccurrenceArgs = {
  input: UpdateOccurrenceMutationInput;
};


export type MutationDeleteOccurrenceArgs = {
  input: DeleteOccurrenceMutationInput;
};


export type MutationCancelOccurrenceArgs = {
  input: CancelOccurrenceMutationInput;
};


export type MutationAddVenueArgs = {
  input: AddVenueMutationInput;
};


export type MutationUpdateVenueArgs = {
  input: UpdateVenueMutationInput;
};


export type MutationDeleteVenueArgs = {
  input: DeleteVenueMutationInput;
};


export type MutationAddStudyGroupArgs = {
  input: AddStudyGroupMutationInput;
};


export type MutationUpdateStudyGroupArgs = {
  input: UpdateStudyGroupMutationInput;
};


export type MutationDeleteStudyGroupArgs = {
  input: DeleteStudyGroupMutationInput;
};


export type MutationEnrolOccurrenceArgs = {
  input: EnrolOccurrenceMutationInput;
};


export type MutationUnenrolOccurrenceArgs = {
  input: UnenrolOccurrenceMutationInput;
};


export type MutationUpdateEnrolmentArgs = {
  input: UpdateEnrolmentMutationInput;
};


export type MutationApproveEnrolmentArgs = {
  input: ApproveEnrolmentMutationInput;
};


export type MutationDeclineEnrolmentArgs = {
  input: DeclineEnrolmentMutationInput;
};


export type MutationCreateMyProfileArgs = {
  input: CreateMyProfileMutationInput;
};


export type MutationUpdateMyProfileArgs = {
  input: UpdateMyProfileMutationInput;
};


export type MutationAddOrganisationArgs = {
  input: AddOrganisationMutationInput;
};


export type MutationUpdateOrganisationArgs = {
  input: UpdateOrganisationMutationInput;
};


export type MutationUpdatePersonArgs = {
  input: UpdatePersonMutationInput;
};


export type MutationAddEventMutationArgs = {
  event?: Maybe<AddEventMutationInput>;
};


export type MutationUpdateEventMutationArgs = {
  event?: Maybe<UpdateEventMutationInput>;
};


export type MutationPublishEventMutationArgs = {
  event?: Maybe<PublishEventMutationInput>;
};


export type MutationDeleteEventMutationArgs = {
  eventId: Scalars['String'];
};


export type MutationUploadImageMutationArgs = {
  image?: Maybe<UploadImageMutationInput>;
};


export type MutationUpdateImageMutationArgs = {
  image?: Maybe<UpdateImageMutationInput>;
};


export type MutationDeleteImageMutationArgs = {
  imageId: Scalars['String'];
};

export type AddOccurrenceMutationPayload = {
  __typename?: 'AddOccurrenceMutationPayload';
  occurrence?: Maybe<OccurrenceNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddOccurrenceMutationInput = {
  placeId?: Maybe<Scalars['String']>;
  minGroupSize: Scalars['Int'];
  maxGroupSize: Scalars['Int'];
  startTime: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
  contactPersons?: Maybe<Array<Maybe<PersonNodeInput>>>;
  pEventId: Scalars['ID'];
  autoAcceptance: Scalars['Boolean'];
  amountOfSeats: Scalars['Int'];
  languages: Array<Maybe<OccurrenceLanguageInput>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type PersonNodeInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  /** Default `fi` */
  language?: Maybe<Language>;
};

export type OccurrenceLanguageInput = {
  id: Language;
};

export type UpdateOccurrenceMutationPayload = {
  __typename?: 'UpdateOccurrenceMutationPayload';
  occurrence?: Maybe<OccurrenceNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateOccurrenceMutationInput = {
  id: Scalars['ID'];
  placeId?: Maybe<Scalars['String']>;
  minGroupSize?: Maybe<Scalars['Int']>;
  maxGroupSize?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  /** Should include all contact persons of the occurrence, missing contact persons will be removed during mutation */
  contactPersons?: Maybe<Array<Maybe<PersonNodeInput>>>;
  pEventId?: Maybe<Scalars['ID']>;
  autoAcceptance?: Maybe<Scalars['Boolean']>;
  amountOfSeats?: Maybe<Scalars['Int']>;
  /** If present, should include all languages of the occurrence */
  languages: Array<Maybe<OccurrenceLanguageInput>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteOccurrenceMutationPayload = {
  __typename?: 'DeleteOccurrenceMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteOccurrenceMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelOccurrenceMutationPayload = {
  __typename?: 'CancelOccurrenceMutationPayload';
  occurrence?: Maybe<OccurrenceNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelOccurrenceMutationInput = {
  id: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddVenueMutationPayload = {
  __typename?: 'AddVenueMutationPayload';
  venue?: Maybe<VenueNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddVenueMutationInput = {
  /** Place id from linked event */
  id: Scalars['ID'];
  translations?: Maybe<Array<Maybe<VenueTranslationsInput>>>;
  hasClothingStorage: Scalars['Boolean'];
  hasSnackEatingPlace: Scalars['Boolean'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type VenueTranslationsInput = {
  description?: Maybe<Scalars['String']>;
  languageCode: Language;
};

export type UpdateVenueMutationPayload = {
  __typename?: 'UpdateVenueMutationPayload';
  venue?: Maybe<VenueNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateVenueMutationInput = {
  /** Place id from linked event */
  id: Scalars['ID'];
  translations?: Maybe<Array<Maybe<VenueTranslationsInput>>>;
  hasClothingStorage?: Maybe<Scalars['Boolean']>;
  hasSnackEatingPlace?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteVenueMutationPayload = {
  __typename?: 'DeleteVenueMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteVenueMutationInput = {
  /** Place id from linked event */
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddStudyGroupMutationPayload = {
  __typename?: 'AddStudyGroupMutationPayload';
  studyGroup?: Maybe<StudyGroupNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddStudyGroupMutationInput = {
  /** If person input doesn't include person id, a new person object will be created */
  person: PersonNodeInput;
  name?: Maybe<Scalars['String']>;
  groupSize: Scalars['Int'];
  groupName?: Maybe<Scalars['String']>;
  extraNeeds?: Maybe<Scalars['String']>;
  amountOfAdult?: Maybe<Scalars['Int']>;
  studyLevel?: Maybe<StudyLevel>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateStudyGroupMutationPayload = {
  __typename?: 'UpdateStudyGroupMutationPayload';
  studyGroup?: Maybe<StudyGroupNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateStudyGroupMutationInput = {
  id: Scalars['ID'];
  person?: Maybe<PersonNodeInput>;
  name?: Maybe<Scalars['String']>;
  groupSize?: Maybe<Scalars['Int']>;
  groupName?: Maybe<Scalars['String']>;
  extraNeeds?: Maybe<Scalars['String']>;
  amountOfAdult?: Maybe<Scalars['Int']>;
  studyLevel?: Maybe<StudyLevel>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteStudyGroupMutationPayload = {
  __typename?: 'DeleteStudyGroupMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteStudyGroupMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type EnrolOccurrenceMutationPayload = {
  __typename?: 'EnrolOccurrenceMutationPayload';
  enrolments?: Maybe<Array<Maybe<EnrolmentNode>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type EnrolOccurrenceMutationInput = {
  /** Occurrence ids of event */
  occurrenceIds: Array<Maybe<Scalars['ID']>>;
  /** Study group data */
  studyGroup: StudyGroupInput;
  notificationType?: Maybe<NotificationType>;
  /** Leave blank if the contact person is the same with group contact person */
  person?: Maybe<PersonNodeInput>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type StudyGroupInput = {
  /** If person input doesn't include person id, a new person object will be created */
  person: PersonNodeInput;
  name?: Maybe<Scalars['String']>;
  groupSize: Scalars['Int'];
  groupName?: Maybe<Scalars['String']>;
  extraNeeds?: Maybe<Scalars['String']>;
  amountOfAdult?: Maybe<Scalars['Int']>;
  studyLevel?: Maybe<StudyLevel>;
};

export type UnenrolOccurrenceMutationPayload = {
  __typename?: 'UnenrolOccurrenceMutationPayload';
  occurrence?: Maybe<OccurrenceNode>;
  studyGroup?: Maybe<StudyGroupNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnenrolOccurrenceMutationInput = {
  /** Occurrence id of event */
  occurrenceId: Scalars['ID'];
  /** Study group id */
  studyGroupId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnrolmentMutationPayload = {
  __typename?: 'UpdateEnrolmentMutationPayload';
  enrolment?: Maybe<EnrolmentNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateEnrolmentMutationInput = {
  enrolmentId: Scalars['ID'];
  notificationType?: Maybe<NotificationType>;
  /** Study group input */
  studyGroup?: Maybe<StudyGroupInput>;
  /** Leave blank if the contact person is the same with group contact person */
  person?: Maybe<PersonNodeInput>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ApproveEnrolmentMutationPayload = {
  __typename?: 'ApproveEnrolmentMutationPayload';
  enrolment?: Maybe<EnrolmentNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ApproveEnrolmentMutationInput = {
  enrolmentId: Scalars['ID'];
  customMessage?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeclineEnrolmentMutationPayload = {
  __typename?: 'DeclineEnrolmentMutationPayload';
  enrolment?: Maybe<EnrolmentNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeclineEnrolmentMutationInput = {
  enrolmentId: Scalars['ID'];
  customMessage?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMyProfileMutationPayload = {
  __typename?: 'CreateMyProfileMutationPayload';
  myProfile?: Maybe<PersonNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMyProfileMutationInput = {
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  organisations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Default `fi` */
  language?: Maybe<Language>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateMyProfileMutationPayload = {
  __typename?: 'UpdateMyProfileMutationPayload';
  myProfile?: Maybe<PersonNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateMyProfileMutationInput = {
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  /** If present, should include all organisation ids of user */
  organisations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Default `fi` */
  language?: Maybe<Language>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddOrganisationMutationPayload = {
  __typename?: 'AddOrganisationMutationPayload';
  organisation?: Maybe<OrganisationNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddOrganisationMutationInput = {
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  type: OrganisationTypeEnum;
  publisherId?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export enum OrganisationTypeEnum {
  User = 'USER',
  Provider = 'PROVIDER'
}

export type UpdateOrganisationMutationPayload = {
  __typename?: 'UpdateOrganisationMutationPayload';
  organisation?: Maybe<OrganisationNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateOrganisationMutationInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  type?: Maybe<OrganisationTypeEnum>;
  publisherId?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePersonMutationPayload = {
  __typename?: 'UpdatePersonMutationPayload';
  person?: Maybe<PersonNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePersonMutationInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddEventMutation = {
  __typename?: 'AddEventMutation';
  response?: Maybe<EventMutationResponse>;
};

export type EventMutationResponse = {
  __typename?: 'EventMutationResponse';
  statusCode: Scalars['Int'];
  body?: Maybe<Event>;
  resultText?: Maybe<Scalars['String']>;
};

export type AddEventMutationInput = {
  location: IdObjectInput;
  keywords: Array<IdObjectInput>;
  superEvent?: Maybe<Scalars['String']>;
  eventStatus?: Maybe<Scalars['String']>;
  externalLinks?: Maybe<Array<Scalars['String']>>;
  offers: Array<OfferInput>;
  subEvents?: Maybe<Array<Scalars['String']>>;
  images?: Maybe<Array<IdObjectInput>>;
  inLanguage?: Maybe<Array<IdObjectInput>>;
  audience?: Maybe<Array<IdObjectInput>>;
  datePublished?: Maybe<Scalars['String']>;
  startTime: Scalars['String'];
  endTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  audienceMinAge?: Maybe<Scalars['String']>;
  audienceMaxAge?: Maybe<Scalars['String']>;
  superEventType?: Maybe<Scalars['String']>;
  extensionCourse?: Maybe<IdObjectInput>;
  name: LocalisedObjectInput;
  localizationExtraInfo?: Maybe<LocalisedObjectInput>;
  shortDescription: LocalisedObjectInput;
  provider?: Maybe<LocalisedObjectInput>;
  infoUrl?: Maybe<LocalisedObjectInput>;
  providerContactInfo?: Maybe<Scalars['String']>;
  description: LocalisedObjectInput;
  /** Organisation global id which the created event belongs to */
  organisationId: Scalars['String'];
  /** Set to `true` to save event as draft version, when draft is true, event data validation will be skipped */
  draft?: Maybe<Scalars['Boolean']>;
  /** Palvelutarjotin event data */
  pEvent: PalvelutarjotinEventInput;
};

export type IdObjectInput = {
  internalId?: Maybe<Scalars['String']>;
};

export type OfferInput = {
  isFree?: Maybe<Scalars['Boolean']>;
  description?: Maybe<LocalisedObjectInput>;
  price?: Maybe<LocalisedObjectInput>;
  infoUrl?: Maybe<LocalisedObjectInput>;
};

export type LocalisedObjectInput = {
  fi?: Maybe<Scalars['String']>;
  sv?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type PalvelutarjotinEventInput = {
  enrolmentStart?: Maybe<Scalars['DateTime']>;
  enrolmentEndDays?: Maybe<Scalars['Int']>;
  duration: Scalars['Int'];
  neededOccurrences: Scalars['Int'];
  contactPersonId?: Maybe<Scalars['ID']>;
  contactPhoneNumber?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
};

export type UpdateEventMutation = {
  __typename?: 'UpdateEventMutation';
  response?: Maybe<EventMutationResponse>;
};

export type UpdateEventMutationInput = {
  location: IdObjectInput;
  keywords: Array<IdObjectInput>;
  superEvent?: Maybe<Scalars['String']>;
  eventStatus?: Maybe<Scalars['String']>;
  externalLinks?: Maybe<Array<Scalars['String']>>;
  offers: Array<OfferInput>;
  subEvents?: Maybe<Array<Scalars['String']>>;
  images?: Maybe<Array<IdObjectInput>>;
  inLanguage?: Maybe<Array<IdObjectInput>>;
  audience?: Maybe<Array<IdObjectInput>>;
  datePublished?: Maybe<Scalars['String']>;
  startTime: Scalars['String'];
  endTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  audienceMinAge?: Maybe<Scalars['String']>;
  audienceMaxAge?: Maybe<Scalars['String']>;
  superEventType?: Maybe<Scalars['String']>;
  extensionCourse?: Maybe<IdObjectInput>;
  name: LocalisedObjectInput;
  localizationExtraInfo?: Maybe<LocalisedObjectInput>;
  shortDescription: LocalisedObjectInput;
  provider?: Maybe<LocalisedObjectInput>;
  infoUrl?: Maybe<LocalisedObjectInput>;
  providerContactInfo?: Maybe<Scalars['String']>;
  description: LocalisedObjectInput;
  /** Organisation global id which the created event belongs to */
  organisationId: Scalars['String'];
  id: Scalars['String'];
  /** Palvelutarjotin event data */
  pEvent?: Maybe<PalvelutarjotinEventInput>;
  /** Set to `true` to save event as draft version, when draft is true, event data validation will be skipped */
  draft?: Maybe<Scalars['Boolean']>;
};

export type PublishEventMutation = {
  __typename?: 'PublishEventMutation';
  response?: Maybe<EventMutationResponse>;
};

export type PublishEventMutationInput = {
  location: IdObjectInput;
  keywords: Array<IdObjectInput>;
  superEvent?: Maybe<Scalars['String']>;
  eventStatus?: Maybe<Scalars['String']>;
  externalLinks?: Maybe<Array<Scalars['String']>>;
  offers: Array<OfferInput>;
  subEvents?: Maybe<Array<Scalars['String']>>;
  images?: Maybe<Array<IdObjectInput>>;
  inLanguage?: Maybe<Array<IdObjectInput>>;
  audience?: Maybe<Array<IdObjectInput>>;
  datePublished?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  audienceMinAge?: Maybe<Scalars['String']>;
  audienceMaxAge?: Maybe<Scalars['String']>;
  superEventType?: Maybe<Scalars['String']>;
  extensionCourse?: Maybe<IdObjectInput>;
  name: LocalisedObjectInput;
  localizationExtraInfo?: Maybe<LocalisedObjectInput>;
  shortDescription: LocalisedObjectInput;
  provider?: Maybe<LocalisedObjectInput>;
  infoUrl?: Maybe<LocalisedObjectInput>;
  providerContactInfo?: Maybe<Scalars['String']>;
  description: LocalisedObjectInput;
  /** Organisation global id which the created event belongs to */
  organisationId: Scalars['String'];
  id: Scalars['String'];
  /** Palvelutarjotin event data */
  pEvent?: Maybe<PalvelutarjotinEventInput>;
};

export type DeleteEventMutation = {
  __typename?: 'DeleteEventMutation';
  response?: Maybe<EventMutationResponse>;
};

export type UploadImageMutation = {
  __typename?: 'UploadImageMutation';
  response?: Maybe<ImageMutationResponse>;
};

export type ImageMutationResponse = {
  __typename?: 'ImageMutationResponse';
  statusCode: Scalars['Int'];
  body?: Maybe<Image>;
  resultText?: Maybe<Scalars['String']>;
};

export type UploadImageMutationInput = {
  license?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  cropping?: Maybe<Scalars['String']>;
  photographerName?: Maybe<Scalars['String']>;
  /** Following GraphQL file upload specs here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  image?: Maybe<Scalars['Upload']>;
};


export type UpdateImageMutation = {
  __typename?: 'UpdateImageMutation';
  response?: Maybe<ImageMutationResponse>;
};

export type UpdateImageMutationInput = {
  license?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  cropping?: Maybe<Scalars['String']>;
  photographerName?: Maybe<Scalars['String']>;
  /** Following GraphQL file upload specs here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  image?: Maybe<Scalars['Upload']>;
  id: Scalars['String'];
};

export type DeleteImageMutation = {
  __typename?: 'DeleteImageMutation';
  response?: Maybe<ImageMutationResponse>;
};

export type EnrolOccurrenceMutationVariables = Exact<{
  input: EnrolOccurrenceMutationInput;
}>;


export type EnrolOccurrenceMutation = (
  { __typename?: 'Mutation' }
  & { enrolOccurrence?: Maybe<(
    { __typename?: 'EnrolOccurrenceMutationPayload' }
    & { enrolments?: Maybe<Array<Maybe<(
      { __typename?: 'EnrolmentNode' }
      & EnrolmentFieldsFragment
    )>>> }
  )> }
);

export type EnrolmentFieldsFragment = (
  { __typename?: 'EnrolmentNode' }
  & Pick<EnrolmentNode, 'id' | 'notificationType' | 'enrolmentTime' | 'status'>
  & { person?: Maybe<(
    { __typename?: 'PersonNode' }
    & PersonFieldsFragment
  )>, studyGroup: (
    { __typename?: 'StudyGroupNode' }
    & StudyGroupFieldsFragment
  ) }
);

export type PEventFieldsFragment = (
  { __typename?: 'PalvelutarjotinEventNode' }
  & Pick<PalvelutarjotinEventNode, 'id' | 'duration' | 'enrolmentEndDays' | 'enrolmentStart' | 'neededOccurrences' | 'contactPhoneNumber' | 'contactEmail' | 'nextOccurrenceDatetime' | 'lastOccurrenceDatetime'>
  & { organisation?: Maybe<(
    { __typename?: 'OrganisationNode' }
    & Pick<OrganisationNode, 'id' | 'name'>
    & OrganisationFieldsFragment
  )>, contactPerson?: Maybe<(
    { __typename?: 'PersonNode' }
    & Pick<PersonNode, 'id' | 'name'>
  )>, occurrences: (
    { __typename?: 'OccurrenceNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'OccurrenceNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'OccurrenceNode' }
        & OccurrenceFieldsFragment
      )> }
    )>> }
  ) }
);

export type LocalisedFieldsFragment = (
  { __typename?: 'LocalisedObject' }
  & Pick<LocalisedObject, 'en' | 'fi' | 'sv'>
);

export type OfferFieldsFragment = (
  { __typename?: 'Offer' }
  & Pick<Offer, 'isFree'>
  & { description?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, price?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, infoUrl?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type EventFieldsFragment = (
  { __typename?: 'Event' }
  & Pick<Event, 'id' | 'internalId' | 'startTime'>
  & { name: (
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  ), shortDescription: (
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  ), description: (
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  ), images: Array<(
    { __typename?: 'Image' }
    & ImageFieldsFragment
  )>, infoUrl?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, offers: Array<(
    { __typename?: 'Offer' }
    & OfferFieldsFragment
  )>, pEvent: (
    { __typename?: 'PalvelutarjotinEventNode' }
    & PEventFieldsFragment
  ), inLanguage: Array<(
    { __typename?: 'InLanguage' }
    & Pick<InLanguage, 'id' | 'internalId'>
    & { name?: Maybe<(
      { __typename?: 'LocalisedObject' }
      & LocalisedFieldsFragment
    )> }
  )>, audience: Array<(
    { __typename?: 'Keyword' }
    & KeywordFieldsFragment
  )>, keywords: Array<(
    { __typename?: 'Keyword' }
    & KeywordFieldsFragment
  )>, location: (
    { __typename?: 'Place' }
    & PlaceFieldsFragment
  ), venue?: Maybe<(
    { __typename?: 'VenueNode' }
    & VenueFieldsFragment
  )> }
);

export type EventQueryVariables = Exact<{
  id: Scalars['ID'];
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;


export type EventQuery = (
  { __typename?: 'Query' }
  & { event?: Maybe<(
    { __typename?: 'Event' }
    & EventFieldsFragment
  )> }
);

export type MetaFieldsFragment = (
  { __typename?: 'Meta' }
  & Pick<Meta, 'count' | 'next' | 'previous'>
);

export type EventsQueryVariables = Exact<{
  divisions?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  include?: Maybe<Array<Maybe<Scalars['String']>>>;
  inLanguage?: Maybe<Scalars['String']>;
  isFree?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  keywordNot?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  locations?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  superEvent?: Maybe<Scalars['ID']>;
  superEventType?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  translation?: Maybe<Scalars['String']>;
}>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events?: Maybe<(
    { __typename?: 'EventListResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & MetaFieldsFragment
    ), data: Array<(
      { __typename?: 'Event' }
      & EventFieldsFragment
    )> }
  )> }
);

export type ImageFieldsFragment = (
  { __typename?: 'Image' }
  & Pick<Image, 'id' | 'internalId' | 'license' | 'name' | 'url' | 'cropping' | 'photographerName' | 'altText'>
);

export type ImageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageQuery = (
  { __typename?: 'Query' }
  & { image?: Maybe<(
    { __typename?: 'Image' }
    & ImageFieldsFragment
  )> }
);

export type KeywordFieldsFragment = (
  { __typename?: 'Keyword' }
  & Pick<Keyword, 'id' | 'internalId'>
  & { name?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type KeywordQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type KeywordQuery = (
  { __typename?: 'Query' }
  & { keyword?: Maybe<(
    { __typename?: 'Keyword' }
    & KeywordFieldsFragment
  )> }
);

export type KeywordsQueryVariables = Exact<{
  dataSource?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  showAllKeywords?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
}>;


export type KeywordsQuery = (
  { __typename?: 'Query' }
  & { keywords?: Maybe<(
    { __typename?: 'KeywordListResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & Pick<Meta, 'count' | 'next' | 'previous'>
    ), data: Array<(
      { __typename?: 'Keyword' }
      & KeywordFieldsFragment
    )> }
  )> }
);

export type OccurrenceFieldsFragment = (
  { __typename?: 'OccurrenceNode' }
  & Pick<OccurrenceNode, 'id' | 'amountOfSeats' | 'seatsTaken' | 'minGroupSize' | 'maxGroupSize' | 'autoAcceptance' | 'startTime' | 'endTime' | 'placeId'>
  & { pEvent?: Maybe<(
    { __typename?: 'PalvelutarjotinEventNode' }
    & Pick<PalvelutarjotinEventNode, 'id'>
  )>, languages: Array<(
    { __typename?: 'LanguageType' }
    & Pick<LanguageType, 'id' | 'name'>
  )> }
);

export type OccurrenceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OccurrenceQuery = (
  { __typename?: 'Query' }
  & { occurrence?: Maybe<(
    { __typename?: 'OccurrenceNode' }
    & OccurrenceFieldsFragment
  )> }
);

export type OrganisationFieldsFragment = (
  { __typename?: 'OrganisationNode' }
  & Pick<OrganisationNode, 'id' | 'name'>
);

export type PersonFieldsFragment = (
  { __typename?: 'PersonNode' }
  & Pick<PersonNode, 'id' | 'emailAddress' | 'name' | 'phoneNumber' | 'language'>
);

export type PlaceFieldsFragment = (
  { __typename?: 'Place' }
  & Pick<Place, 'id' | 'internalId'>
  & { name?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, streetAddress?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, addressLocality?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )>, telephone?: Maybe<(
    { __typename?: 'LocalisedObject' }
    & LocalisedFieldsFragment
  )> }
);

export type PlaceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PlaceQuery = (
  { __typename?: 'Query' }
  & { place?: Maybe<(
    { __typename?: 'Place' }
    & PlaceFieldsFragment
  )> }
);

export type PlacesQueryVariables = Exact<{
  dataSource?: Maybe<Scalars['String']>;
  divisions?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  showAllPlaces?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
}>;


export type PlacesQuery = (
  { __typename?: 'Query' }
  & { places?: Maybe<(
    { __typename?: 'PlaceListResponse' }
    & { meta: (
      { __typename?: 'Meta' }
      & Pick<Meta, 'count' | 'next' | 'previous'>
    ), data: Array<(
      { __typename?: 'Place' }
      & PlaceFieldsFragment
    )> }
  )> }
);

export type StudyGroupFieldsFragment = (
  { __typename?: 'StudyGroupNode' }
  & Pick<StudyGroupNode, 'id' | 'name' | 'groupSize' | 'amountOfAdult' | 'groupName' | 'studyLevel' | 'extraNeeds'>
  & { person: (
    { __typename?: 'PersonNode' }
    & PersonFieldsFragment
  ) }
);

export type VenueFieldsFragment = (
  { __typename?: 'VenueNode' }
  & Pick<VenueNode, 'id' | 'hasClothingStorage' | 'hasSnackEatingPlace'>
  & { translations: Array<(
    { __typename?: 'VenueTranslationType' }
    & Pick<VenueTranslationType, 'languageCode' | 'description'>
  )> }
);

export type VenueQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VenueQuery = (
  { __typename?: 'Query' }
  & { venue?: Maybe<(
    { __typename?: 'VenueNode' }
    & VenueFieldsFragment
  )> }
);

export const PersonFieldsFragmentDoc = gql`
    fragment personFields on PersonNode {
  id
  emailAddress
  name
  phoneNumber
  language
}
    `;
export const StudyGroupFieldsFragmentDoc = gql`
    fragment studyGroupFields on StudyGroupNode {
  id
  name
  groupSize
  amountOfAdult
  groupName
  studyLevel
  extraNeeds
  person {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;
export const EnrolmentFieldsFragmentDoc = gql`
    fragment enrolmentFields on EnrolmentNode {
  id
  notificationType
  enrolmentTime
  status
  person {
    ...personFields
  }
  studyGroup {
    ...studyGroupFields
  }
}
    ${PersonFieldsFragmentDoc}
${StudyGroupFieldsFragmentDoc}`;
export const LocalisedFieldsFragmentDoc = gql`
    fragment localisedFields on LocalisedObject {
  en
  fi
  sv
}
    `;
export const ImageFieldsFragmentDoc = gql`
    fragment imageFields on Image {
  id
  internalId
  license
  name
  url
  cropping
  photographerName
  altText
}
    `;
export const OfferFieldsFragmentDoc = gql`
    fragment offerFields on Offer {
  isFree
  description {
    ...localisedFields
  }
  price {
    ...localisedFields
  }
  infoUrl {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const OrganisationFieldsFragmentDoc = gql`
    fragment organisationFields on OrganisationNode {
  id
  name
}
    `;
export const OccurrenceFieldsFragmentDoc = gql`
    fragment occurrenceFields on OccurrenceNode {
  id
  pEvent {
    id
  }
  amountOfSeats
  seatsTaken
  minGroupSize
  maxGroupSize
  autoAcceptance
  languages {
    id
    name
  }
  startTime
  endTime
  placeId
}
    `;
export const PEventFieldsFragmentDoc = gql`
    fragment pEventFields on PalvelutarjotinEventNode {
  id
  duration
  enrolmentEndDays
  enrolmentStart
  neededOccurrences
  contactPhoneNumber
  contactEmail
  organisation {
    id
    name
    ...organisationFields
  }
  contactPerson {
    id
    name
  }
  occurrences {
    edges {
      node {
        ...occurrenceFields
      }
    }
  }
  organisation {
    ...organisationFields
  }
  nextOccurrenceDatetime
  lastOccurrenceDatetime
}
    ${OrganisationFieldsFragmentDoc}
${OccurrenceFieldsFragmentDoc}`;
export const KeywordFieldsFragmentDoc = gql`
    fragment keywordFields on Keyword {
  id
  name {
    ...localisedFields
  }
  internalId
}
    ${LocalisedFieldsFragmentDoc}`;
export const PlaceFieldsFragmentDoc = gql`
    fragment placeFields on Place {
  id
  internalId
  name {
    ...localisedFields
  }
  streetAddress {
    ...localisedFields
  }
  addressLocality {
    ...localisedFields
  }
  telephone {
    ...localisedFields
  }
}
    ${LocalisedFieldsFragmentDoc}`;
export const VenueFieldsFragmentDoc = gql`
    fragment venueFields on VenueNode {
  id
  hasClothingStorage
  hasSnackEatingPlace
  translations {
    languageCode
    description
  }
}
    `;
export const EventFieldsFragmentDoc = gql`
    fragment eventFields on Event {
  id
  internalId
  name {
    ...localisedFields
  }
  shortDescription {
    ...localisedFields
  }
  description {
    ...localisedFields
  }
  images {
    ...imageFields
  }
  infoUrl {
    ...localisedFields
  }
  offers {
    ...offerFields
  }
  pEvent {
    ...pEventFields
  }
  inLanguage {
    id
    internalId
    name {
      ...localisedFields
    }
  }
  audience {
    ...keywordFields
  }
  keywords {
    ...keywordFields
  }
  location {
    ...placeFields
  }
  venue {
    ...venueFields
  }
  startTime
}
    ${LocalisedFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${OfferFieldsFragmentDoc}
${PEventFieldsFragmentDoc}
${KeywordFieldsFragmentDoc}
${PlaceFieldsFragmentDoc}
${VenueFieldsFragmentDoc}`;
export const MetaFieldsFragmentDoc = gql`
    fragment metaFields on Meta {
  count
  next
  previous
}
    `;
export const EnrolOccurrenceDocument = gql`
    mutation EnrolOccurrence($input: EnrolOccurrenceMutationInput!) {
  enrolOccurrence(input: $input) {
    enrolments {
      ...enrolmentFields
    }
  }
}
    ${EnrolmentFieldsFragmentDoc}`;
export type EnrolOccurrenceMutationFn = ApolloReactCommon.MutationFunction<EnrolOccurrenceMutation, EnrolOccurrenceMutationVariables>;
export type EnrolOccurrenceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<EnrolOccurrenceMutation, EnrolOccurrenceMutationVariables>
    } & TChildProps;
export function withEnrolOccurrence<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EnrolOccurrenceMutation,
  EnrolOccurrenceMutationVariables,
  EnrolOccurrenceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EnrolOccurrenceMutation, EnrolOccurrenceMutationVariables, EnrolOccurrenceProps<TChildProps, TDataName>>(EnrolOccurrenceDocument, {
      alias: 'enrolOccurrence',
      ...operationOptions
    });
};

/**
 * __useEnrolOccurrenceMutation__
 *
 * To run a mutation, you first call `useEnrolOccurrenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnrolOccurrenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enrolOccurrenceMutation, { data, loading, error }] = useEnrolOccurrenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEnrolOccurrenceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EnrolOccurrenceMutation, EnrolOccurrenceMutationVariables>) {
        return ApolloReactHooks.useMutation<EnrolOccurrenceMutation, EnrolOccurrenceMutationVariables>(EnrolOccurrenceDocument, baseOptions);
      }
export type EnrolOccurrenceMutationHookResult = ReturnType<typeof useEnrolOccurrenceMutation>;
export type EnrolOccurrenceMutationResult = ApolloReactCommon.MutationResult<EnrolOccurrenceMutation>;
export type EnrolOccurrenceMutationOptions = ApolloReactCommon.BaseMutationOptions<EnrolOccurrenceMutation, EnrolOccurrenceMutationVariables>;
export const EventDocument = gql`
    query Event($id: ID!, $include: [String]) {
  event(id: $id, include: $include) {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export type EventProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EventQuery, EventQueryVariables>
    } & TChildProps;
export function withEvent<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EventQuery,
  EventQueryVariables,
  EventProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EventQuery, EventQueryVariables, EventProps<TChildProps, TDataName>>(EventDocument, {
      alias: 'event',
      ...operationOptions
    });
};

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *      include: // value for 'include'
 *   },
 * });
 */
export function useEventQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EventQuery, EventQueryVariables>) {
        return ApolloReactHooks.useQuery<EventQuery, EventQueryVariables>(EventDocument, baseOptions);
      }
export function useEventLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, baseOptions);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = ApolloReactCommon.QueryResult<EventQuery, EventQueryVariables>;
export const EventsDocument = gql`
    query Events($divisions: [String], $end: String, $include: [String], $inLanguage: String, $isFree: Boolean, $keywords: [String], $keywordNot: [String], $language: String, $locations: String, $page: Int, $pageSize: Int, $publisher: ID, $sort: String, $start: String, $superEvent: ID, $superEventType: [String], $text: String, $translation: String) {
  events(divisions: $divisions, end: $end, include: $include, inLanguage: $inLanguage, isFree: $isFree, keywords: $keywords, keywordNot: $keywordNot, language: $language, locations: $locations, page: $page, pageSize: $pageSize, publisher: $publisher, sort: $sort, start: $start, superEvent: $superEvent, superEventType: $superEventType, text: $text, translation: $translation) {
    meta {
      ...metaFields
    }
    data {
      ...eventFields
    }
  }
}
    ${MetaFieldsFragmentDoc}
${EventFieldsFragmentDoc}`;
export type EventsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EventsQuery, EventsQueryVariables>
    } & TChildProps;
export function withEvents<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EventsQuery,
  EventsQueryVariables,
  EventsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EventsQuery, EventsQueryVariables, EventsProps<TChildProps, TDataName>>(EventsDocument, {
      alias: 'events',
      ...operationOptions
    });
};

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      divisions: // value for 'divisions'
 *      end: // value for 'end'
 *      include: // value for 'include'
 *      inLanguage: // value for 'inLanguage'
 *      isFree: // value for 'isFree'
 *      keywords: // value for 'keywords'
 *      keywordNot: // value for 'keywordNot'
 *      language: // value for 'language'
 *      locations: // value for 'locations'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      publisher: // value for 'publisher'
 *      sort: // value for 'sort'
 *      start: // value for 'start'
 *      superEvent: // value for 'superEvent'
 *      superEventType: // value for 'superEventType'
 *      text: // value for 'text'
 *      translation: // value for 'translation'
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        return ApolloReactHooks.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, baseOptions);
      }
export function useEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, baseOptions);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = ApolloReactCommon.QueryResult<EventsQuery, EventsQueryVariables>;
export const ImageDocument = gql`
    query Image($id: ID!) {
  image(id: $id) {
    ...imageFields
  }
}
    ${ImageFieldsFragmentDoc}`;
export type ImageProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ImageQuery, ImageQueryVariables>
    } & TChildProps;
export function withImage<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ImageQuery,
  ImageQueryVariables,
  ImageProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ImageQuery, ImageQueryVariables, ImageProps<TChildProps, TDataName>>(ImageDocument, {
      alias: 'image',
      ...operationOptions
    });
};

/**
 * __useImageQuery__
 *
 * To run a query within a React component, call `useImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ImageQuery, ImageQueryVariables>) {
        return ApolloReactHooks.useQuery<ImageQuery, ImageQueryVariables>(ImageDocument, baseOptions);
      }
export function useImageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ImageQuery, ImageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ImageQuery, ImageQueryVariables>(ImageDocument, baseOptions);
        }
export type ImageQueryHookResult = ReturnType<typeof useImageQuery>;
export type ImageLazyQueryHookResult = ReturnType<typeof useImageLazyQuery>;
export type ImageQueryResult = ApolloReactCommon.QueryResult<ImageQuery, ImageQueryVariables>;
export const KeywordDocument = gql`
    query Keyword($id: ID!) {
  keyword(id: $id) {
    ...keywordFields
  }
}
    ${KeywordFieldsFragmentDoc}`;
export type KeywordProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<KeywordQuery, KeywordQueryVariables>
    } & TChildProps;
export function withKeyword<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  KeywordQuery,
  KeywordQueryVariables,
  KeywordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, KeywordQuery, KeywordQueryVariables, KeywordProps<TChildProps, TDataName>>(KeywordDocument, {
      alias: 'keyword',
      ...operationOptions
    });
};

/**
 * __useKeywordQuery__
 *
 * To run a query within a React component, call `useKeywordQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useKeywordQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<KeywordQuery, KeywordQueryVariables>) {
        return ApolloReactHooks.useQuery<KeywordQuery, KeywordQueryVariables>(KeywordDocument, baseOptions);
      }
export function useKeywordLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<KeywordQuery, KeywordQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<KeywordQuery, KeywordQueryVariables>(KeywordDocument, baseOptions);
        }
export type KeywordQueryHookResult = ReturnType<typeof useKeywordQuery>;
export type KeywordLazyQueryHookResult = ReturnType<typeof useKeywordLazyQuery>;
export type KeywordQueryResult = ApolloReactCommon.QueryResult<KeywordQuery, KeywordQueryVariables>;
export const KeywordsDocument = gql`
    query Keywords($dataSource: String, $page: Int, $pageSize: Int, $showAllKeywords: Boolean, $sort: String, $text: String) {
  keywords(dataSource: $dataSource, page: $page, pageSize: $pageSize, showAllKeywords: $showAllKeywords, sort: $sort, text: $text) {
    meta {
      count
      next
      previous
    }
    data {
      ...keywordFields
    }
  }
}
    ${KeywordFieldsFragmentDoc}`;
export type KeywordsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<KeywordsQuery, KeywordsQueryVariables>
    } & TChildProps;
export function withKeywords<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  KeywordsQuery,
  KeywordsQueryVariables,
  KeywordsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, KeywordsQuery, KeywordsQueryVariables, KeywordsProps<TChildProps, TDataName>>(KeywordsDocument, {
      alias: 'keywords',
      ...operationOptions
    });
};

/**
 * __useKeywordsQuery__
 *
 * To run a query within a React component, call `useKeywordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordsQuery({
 *   variables: {
 *      dataSource: // value for 'dataSource'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      showAllKeywords: // value for 'showAllKeywords'
 *      sort: // value for 'sort'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useKeywordsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<KeywordsQuery, KeywordsQueryVariables>) {
        return ApolloReactHooks.useQuery<KeywordsQuery, KeywordsQueryVariables>(KeywordsDocument, baseOptions);
      }
export function useKeywordsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<KeywordsQuery, KeywordsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<KeywordsQuery, KeywordsQueryVariables>(KeywordsDocument, baseOptions);
        }
export type KeywordsQueryHookResult = ReturnType<typeof useKeywordsQuery>;
export type KeywordsLazyQueryHookResult = ReturnType<typeof useKeywordsLazyQuery>;
export type KeywordsQueryResult = ApolloReactCommon.QueryResult<KeywordsQuery, KeywordsQueryVariables>;
export const OccurrenceDocument = gql`
    query Occurrence($id: ID!) {
  occurrence(id: $id) {
    ...occurrenceFields
  }
}
    ${OccurrenceFieldsFragmentDoc}`;
export type OccurrenceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OccurrenceQuery, OccurrenceQueryVariables>
    } & TChildProps;
export function withOccurrence<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OccurrenceQuery,
  OccurrenceQueryVariables,
  OccurrenceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, OccurrenceQuery, OccurrenceQueryVariables, OccurrenceProps<TChildProps, TDataName>>(OccurrenceDocument, {
      alias: 'occurrence',
      ...operationOptions
    });
};

/**
 * __useOccurrenceQuery__
 *
 * To run a query within a React component, call `useOccurrenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useOccurrenceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOccurrenceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOccurrenceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OccurrenceQuery, OccurrenceQueryVariables>) {
        return ApolloReactHooks.useQuery<OccurrenceQuery, OccurrenceQueryVariables>(OccurrenceDocument, baseOptions);
      }
export function useOccurrenceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OccurrenceQuery, OccurrenceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OccurrenceQuery, OccurrenceQueryVariables>(OccurrenceDocument, baseOptions);
        }
export type OccurrenceQueryHookResult = ReturnType<typeof useOccurrenceQuery>;
export type OccurrenceLazyQueryHookResult = ReturnType<typeof useOccurrenceLazyQuery>;
export type OccurrenceQueryResult = ApolloReactCommon.QueryResult<OccurrenceQuery, OccurrenceQueryVariables>;
export const PlaceDocument = gql`
    query Place($id: ID!) {
  place(id: $id) {
    ...placeFields
  }
}
    ${PlaceFieldsFragmentDoc}`;
export type PlaceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PlaceQuery, PlaceQueryVariables>
    } & TChildProps;
export function withPlace<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PlaceQuery,
  PlaceQueryVariables,
  PlaceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PlaceQuery, PlaceQueryVariables, PlaceProps<TChildProps, TDataName>>(PlaceDocument, {
      alias: 'place',
      ...operationOptions
    });
};

/**
 * __usePlaceQuery__
 *
 * To run a query within a React component, call `usePlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlaceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
        return ApolloReactHooks.useQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, baseOptions);
      }
export function usePlaceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, baseOptions);
        }
export type PlaceQueryHookResult = ReturnType<typeof usePlaceQuery>;
export type PlaceLazyQueryHookResult = ReturnType<typeof usePlaceLazyQuery>;
export type PlaceQueryResult = ApolloReactCommon.QueryResult<PlaceQuery, PlaceQueryVariables>;
export const PlacesDocument = gql`
    query Places($dataSource: String, $divisions: [String], $page: Int, $pageSize: Int, $showAllPlaces: Boolean, $sort: String, $text: String) {
  places(dataSource: $dataSource, divisions: $divisions, page: $page, pageSize: $pageSize, showAllPlaces: $showAllPlaces, sort: $sort, text: $text) {
    meta {
      count
      next
      previous
    }
    data {
      ...placeFields
    }
  }
}
    ${PlaceFieldsFragmentDoc}`;
export type PlacesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PlacesQuery, PlacesQueryVariables>
    } & TChildProps;
export function withPlaces<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PlacesQuery,
  PlacesQueryVariables,
  PlacesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PlacesQuery, PlacesQueryVariables, PlacesProps<TChildProps, TDataName>>(PlacesDocument, {
      alias: 'places',
      ...operationOptions
    });
};

/**
 * __usePlacesQuery__
 *
 * To run a query within a React component, call `usePlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesQuery({
 *   variables: {
 *      dataSource: // value for 'dataSource'
 *      divisions: // value for 'divisions'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      showAllPlaces: // value for 'showAllPlaces'
 *      sort: // value for 'sort'
 *      text: // value for 'text'
 *   },
 * });
 */
export function usePlacesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
        return ApolloReactHooks.useQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
      }
export function usePlacesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
        }
export type PlacesQueryHookResult = ReturnType<typeof usePlacesQuery>;
export type PlacesLazyQueryHookResult = ReturnType<typeof usePlacesLazyQuery>;
export type PlacesQueryResult = ApolloReactCommon.QueryResult<PlacesQuery, PlacesQueryVariables>;
export const VenueDocument = gql`
    query Venue($id: ID!) {
  venue(id: $id) {
    ...venueFields
  }
}
    ${VenueFieldsFragmentDoc}`;
export type VenueProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<VenueQuery, VenueQueryVariables>
    } & TChildProps;
export function withVenue<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VenueQuery,
  VenueQueryVariables,
  VenueProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, VenueQuery, VenueQueryVariables, VenueProps<TChildProps, TDataName>>(VenueDocument, {
      alias: 'venue',
      ...operationOptions
    });
};

/**
 * __useVenueQuery__
 *
 * To run a query within a React component, call `useVenueQuery` and pass it any options that fit your needs.
 * When your component renders, `useVenueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVenueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVenueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VenueQuery, VenueQueryVariables>) {
        return ApolloReactHooks.useQuery<VenueQuery, VenueQueryVariables>(VenueDocument, baseOptions);
      }
export function useVenueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VenueQuery, VenueQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VenueQuery, VenueQueryVariables>(VenueDocument, baseOptions);
        }
export type VenueQueryHookResult = ReturnType<typeof useVenueQuery>;
export type VenueLazyQueryHookResult = ReturnType<typeof useVenueLazyQuery>;
export type VenueQueryResult = ApolloReactCommon.QueryResult<VenueQuery, VenueQueryVariables>;