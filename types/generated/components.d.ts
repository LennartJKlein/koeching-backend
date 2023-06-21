import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentParagraph extends Schema.Component {
  collectionName: 'components_content_paragraphs';
  info: {
    displayName: 'Alinea';
    description: '';
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
  };
}

export interface ContentYoutubeVideo extends Schema.Component {
  collectionName: 'components_content_youtube_videos';
  info: {
    displayName: 'Youtube video';
    description: '';
  };
  attributes: {
    url: Attribute.String;
  };
}

export interface DetailsAddress extends Schema.Component {
  collectionName: 'components_details_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    street: Attribute.String;
    streetNr: Attribute.String;
    postalCode: Attribute.String;
    city: Attribute.String;
  };
}

export interface DetailsContact extends Schema.Component {
  collectionName: 'components_details_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    name: Attribute.String;
    phone: Attribute.String;
    address: Attribute.Component<'details.address'>;
    email: Attribute.Email;
  };
}

export interface DetailsKeywords extends Schema.Component {
  collectionName: 'components_details_keywords';
  info: {
    displayName: 'Sleutelwoorden';
    icon: 'tags';
    description: '';
  };
  attributes: {
    keyword: Attribute.String;
  };
}

export interface DetailsMoment extends Schema.Component {
  collectionName: 'components_details_moments';
  info: {
    displayName: 'Groep';
    icon: 'chart-bubble';
    description: '';
  };
  attributes: {
    start_date: Attribute.DateTime;
    end_date: Attribute.DateTime;
    title: Attribute.String;
    description: Attribute.RichText;
    open: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface DetailsParticipants extends Schema.Component {
  collectionName: 'components_details_participants';
  info: {
    displayName: 'participants';
  };
  attributes: {
    name: Attribute.String;
    age: Attribute.Integer;
  };
}

export interface DetailsPrice extends Schema.Component {
  collectionName: 'components_details_prices';
  info: {
    displayName: 'Tarief';
    icon: 'dollar-sign';
    description: '';
  };
  attributes: {
    price: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'content.paragraph': ContentParagraph;
      'content.youtube-video': ContentYoutubeVideo;
      'details.address': DetailsAddress;
      'details.contact': DetailsContact;
      'details.keywords': DetailsKeywords;
      'details.moment': DetailsMoment;
      'details.participants': DetailsParticipants;
      'details.price': DetailsPrice;
    }
  }
}
