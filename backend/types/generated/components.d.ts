import type { Attribute, Schema } from '@strapi/strapi';

export interface BlocksAboutUs extends Schema.Component {
  collectionName: 'components_blocks_about_uses';
  info: {
    description: '';
    displayName: 'About Us';
  };
  attributes: {
    cta: Attribute.Component<'elements.link'>;
    description: Attribute.Text;
    employee: Attribute.Component<'elements.employee-info'>;
    heading: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface BlocksHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Attribute.Component<'elements.link'>;
    heading: Attribute.String;
    images: Attribute.Media<'images', true>;
  };
}

export interface ElementsEmployeeInfo extends Schema.Component {
  collectionName: 'components_elements_employee_infos';
  info: {
    displayName: 'Employee Info';
  };
  attributes: {
    designation: Attribute.String;
    image: Attribute.Media<'images'>;
    name: Attribute.String;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    logoText: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about-us': BlocksAboutUs;
      'blocks.hero-section': BlocksHeroSection;
      'elements.employee-info': ElementsEmployeeInfo;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
