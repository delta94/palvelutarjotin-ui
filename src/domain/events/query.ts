import gql from 'graphql-tag';

export const QUERY_EVENTS = gql`
  fragment metaFields on Meta {
    count
    next
    previous
  }

  query Events(
    $divisions: [String]
    $end: String
    $include: [String]
    $inLanguage: String
    $isFree: Boolean
    $keywords: [String]
    $keywordNot: [String]
    $language: String
    $locations: String
    $page: Int
    $pageSize: Int
    $publisher: ID
    $sort: String
    $start: String
    $superEvent: ID
    $superEventType: [String]
    $text: String
    $translation: String
  ) {
    events(
      divisions: $divisions
      end: $end
      include: $include
      inLanguage: $inLanguage
      isFree: $isFree
      keywords: $keywords
      keywordNot: $keywordNot
      language: $language
      locations: $locations
      page: $page
      pageSize: $pageSize
      publisher: $publisher
      sort: $sort
      start: $start
      superEvent: $superEvent
      superEventType: $superEventType
      text: $text
      translation: $translation
    ) {
      meta {
        ...metaFields
      }
      data {
        ...eventFields
      }
    }
  }
`;
