import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginPublisherAction extends Schema.CollectionType {
  collectionName: 'actions';
  info: {
    singularName: 'action';
    pluralName: 'actions';
    displayName: 'actions';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    executeAt: Attribute.DateTime;
    mode: Attribute.String;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiActivityActivity extends Schema.CollectionType {
  collectionName: 'activities';
  info: {
    singularName: 'activity';
    pluralName: 'activities';
    displayName: 'Activiteit';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    moments: Attribute.Component<'details.moment', true>;
    coaches: Attribute.Relation<
      'api::activity.activity',
      'manyToMany',
      'api::coach.coach'
    >;
    interventions: Attribute.Relation<
      'api::activity.activity',
      'manyToMany',
      'api::intervention.intervention'
    >;
    photos: Attribute.Media;
    location: Attribute.String;
    slug: Attribute.UID<'api::activity.activity', 'name'>;
    seo_description: Attribute.Text;
    seo_title: Attribute.String;
    intro: Attribute.Text;
    thumbnail: Attribute.Media;
    seo_keywords: Attribute.Component<'details.keywords', true> &
      Attribute.SetMinMax<{
        max: 5;
      }>;
    rank: Attribute.Integer;
    pricings: Attribute.Relation<
      'api::activity.activity',
      'manyToMany',
      'api::pricing.pricing'
    >;
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::activity.activity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::activity.activity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAnimalAnimal extends Schema.CollectionType {
  collectionName: 'animals';
  info: {
    singularName: 'animal';
    pluralName: 'animals';
    displayName: 'Dier';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    photos: Attribute.Media;
    slug: Attribute.UID<'api::animal.animal', 'name'> & Attribute.Required;
    bio: Attribute.RichText;
    rank: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::animal.animal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::animal.animal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoachCoach extends Schema.CollectionType {
  collectionName: 'coaches';
  info: {
    singularName: 'coach';
    pluralName: 'coaches';
    displayName: 'Coach';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    photos: Attribute.Media & Attribute.Required;
    bio: Attribute.RichText;
    intro: Attribute.Text;
    slug: Attribute.UID<'api::coach.coach', 'name'> & Attribute.Required;
    rank: Attribute.Integer;
    seminars: Attribute.Relation<
      'api::coach.coach',
      'manyToMany',
      'api::seminar.seminar'
    >;
    trainings: Attribute.Relation<
      'api::coach.coach',
      'manyToMany',
      'api::training.training'
    >;
    programs: Attribute.Relation<
      'api::coach.coach',
      'manyToMany',
      'api::program.program'
    >;
    interventions: Attribute.Relation<
      'api::coach.coach',
      'manyToMany',
      'api::intervention.intervention'
    >;
    activities: Attribute.Relation<
      'api::coach.coach',
      'manyToMany',
      'api::activity.activity'
    >;
    external: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coach.coach',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coach.coach',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFarmFarm extends Schema.SingleType {
  collectionName: 'farms';
  info: {
    singularName: 'farm';
    pluralName: 'farms';
    displayName: 'Boerderij';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Boerderij Borreveld'>;
    content: Attribute.RichText;
    photos: Attribute.Media;
    intro: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::farm.farm', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::farm.farm', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'Homepage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    photos: Attribute.Media & Attribute.Required;
    sales_text: Attribute.Component<'content.paragraph', true> &
      Attribute.SetMinMax<{
        min: 1;
        max: 3;
      }>;
    title: Attribute.String & Attribute.Required;
    videos: Attribute.Component<'content.youtube-video', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInterventionIntervention extends Schema.CollectionType {
  collectionName: 'interventions';
  info: {
    singularName: 'intervention';
    pluralName: 'interventions';
    displayName: 'Interventie';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::intervention.intervention', 'name'> &
      Attribute.Required;
    seminars: Attribute.Relation<
      'api::intervention.intervention',
      'manyToMany',
      'api::seminar.seminar'
    >;
    trainings: Attribute.Relation<
      'api::intervention.intervention',
      'manyToMany',
      'api::training.training'
    >;
    rank: Attribute.Integer;
    seo_title: Attribute.String;
    seo_description: Attribute.Text;
    seo_keywords: Attribute.Component<'details.keywords', true> &
      Attribute.SetMinMax<{
        max: 5;
      }>;
    thumbnail: Attribute.Media & Attribute.Required;
    photos: Attribute.Media;
    content: Attribute.RichText;
    location: Attribute.String;
    pricings: Attribute.Relation<
      'api::intervention.intervention',
      'manyToMany',
      'api::pricing.pricing'
    >;
    programs: Attribute.Relation<
      'api::intervention.intervention',
      'manyToMany',
      'api::program.program'
    >;
    intro: Attribute.Text;
    coaches: Attribute.Relation<
      'api::intervention.intervention',
      'manyToMany',
      'api::coach.coach'
    >;
    activities: Attribute.Relation<
      'api::intervention.intervention',
      'manyToMany',
      'api::activity.activity'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::intervention.intervention',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::intervention.intervention',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLegalLegal extends Schema.SingleType {
  collectionName: 'legals';
  info: {
    singularName: 'legal';
    pluralName: 'legals';
    displayName: 'Juridisch';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    privacy_data: Attribute.RichText;
    terms: Attribute.RichText;
    privacy_web: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legal.legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::legal.legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMembershipMembership extends Schema.CollectionType {
  collectionName: 'memberships';
  info: {
    singularName: 'membership';
    pluralName: 'memberships';
    displayName: 'Lidmaatschap';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    membership_id: Attribute.String;
    url: Attribute.String;
    logo: Attribute.Media;
    slug: Attribute.UID<'api::membership.membership', 'name'> &
      Attribute.Required;
    rank: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::membership.membership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::membership.membership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMessageMessage extends Schema.CollectionType {
  collectionName: 'messages';
  info: {
    singularName: 'message';
    pluralName: 'messages';
    displayName: 'Nieuwsbericht';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media;
    content: Attribute.RichText;
    author: Attribute.Relation<
      'api::message.message',
      'oneToOne',
      'admin::user'
    >;
    seo_title: Attribute.String;
    seo_description: Attribute.Text;
    slug: Attribute.UID<'api::message.message', 'title'>;
    seo_keywords: Attribute.Component<'details.keywords', true> &
      Attribute.SetMinMax<{
        max: 5;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::message.message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::message.message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiParticipantParticipant extends Schema.CollectionType {
  collectionName: 'participants';
  info: {
    singularName: 'participant';
    pluralName: 'participants';
    displayName: 'Aanmelding';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seminar: Attribute.Relation<
      'api::participant.participant',
      'oneToOne',
      'api::seminar.seminar'
    >;
    training: Attribute.Relation<
      'api::participant.participant',
      'oneToOne',
      'api::training.training'
    >;
    moment: Attribute.Component<'details.moment'>;
    payment: Attribute.Boolean;
    comments: Attribute.Text;
    contact: Attribute.Component<'details.contact'>;
    participants: Attribute.Component<'details.participants', true>;
    rank: Attribute.Integer;
    activity: Attribute.Relation<
      'api::participant.participant',
      'oneToOne',
      'api::activity.activity'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::participant.participant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::participant.participant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingPricing extends Schema.CollectionType {
  collectionName: 'pricings';
  info: {
    singularName: 'pricing';
    pluralName: 'pricings';
    displayName: 'Tarief';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'--- euro per sessie van --- uur'>;
    programs: Attribute.Relation<
      'api::pricing.pricing',
      'manyToMany',
      'api::program.program'
    >;
    trainings: Attribute.Relation<
      'api::pricing.pricing',
      'manyToMany',
      'api::training.training'
    >;
    seminars: Attribute.Relation<
      'api::pricing.pricing',
      'manyToMany',
      'api::seminar.seminar'
    >;
    interventions: Attribute.Relation<
      'api::pricing.pricing',
      'manyToMany',
      'api::intervention.intervention'
    >;
    rank: Attribute.Integer;
    activities: Attribute.Relation<
      'api::pricing.pricing',
      'manyToMany',
      'api::activity.activity'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing.pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing.pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcessProcess extends Schema.SingleType {
  collectionName: 'processes';
  info: {
    singularName: 'process';
    pluralName: 'processes';
    displayName: 'Werkwijze';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Werkwijze'>;
    content_adults: Attribute.RichText;
    photos: Attribute.Media;
    intro: Attribute.Text;
    content_minors: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::process.process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::process.process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramProgram extends Schema.CollectionType {
  collectionName: 'programs';
  info: {
    singularName: 'program';
    pluralName: 'programs';
    displayName: 'Traject';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    intro: Attribute.Text;
    content: Attribute.RichText;
    seo_title: Attribute.String;
    seo_description: Attribute.Text;
    coaches: Attribute.Relation<
      'api::program.program',
      'manyToMany',
      'api::coach.coach'
    >;
    interventions: Attribute.Relation<
      'api::program.program',
      'manyToMany',
      'api::intervention.intervention'
    >;
    location: Attribute.String;
    slug: Attribute.UID<'api::program.program', 'name'>;
    photos: Attribute.Media;
    seo_keywords: Attribute.Component<'details.keywords', true> &
      Attribute.SetMinMax<{
        max: 5;
      }>;
    rank: Attribute.Integer;
    thumbnail: Attribute.Media & Attribute.Required;
    pricings: Attribute.Relation<
      'api::program.program',
      'manyToMany',
      'api::pricing.pricing'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program.program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::program.program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReimbursementReimbursement extends Schema.SingleType {
  collectionName: 'reimbursements';
  info: {
    singularName: 'reimbursement';
    pluralName: 'reimbursements';
    displayName: 'Vergoedingen';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    files: Attribute.Media;
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reimbursement.reimbursement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reimbursement.reimbursement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeminarSeminar extends Schema.CollectionType {
  collectionName: 'seminars';
  info: {
    singularName: 'seminar';
    pluralName: 'seminars';
    displayName: 'Informatieavond';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    moments: Attribute.Component<'details.moment', true>;
    coaches: Attribute.Relation<
      'api::seminar.seminar',
      'manyToMany',
      'api::coach.coach'
    >;
    interventions: Attribute.Relation<
      'api::seminar.seminar',
      'manyToMany',
      'api::intervention.intervention'
    >;
    intro: Attribute.Text;
    seo_description: Attribute.Text;
    seo_title: Attribute.String;
    slug: Attribute.UID<'api::seminar.seminar', 'name'> & Attribute.Required;
    thumbnail: Attribute.Media & Attribute.Required;
    photos: Attribute.Media;
    seo_keywords: Attribute.Component<'details.keywords', true> &
      Attribute.SetMinMax<{
        max: 5;
      }>;
    rank: Attribute.Integer;
    pricings: Attribute.Relation<
      'api::seminar.seminar',
      'manyToMany',
      'api::pricing.pricing'
    >;
    content: Attribute.RichText;
    location: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seminar.seminar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seminar.seminar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrainingTraining extends Schema.CollectionType {
  collectionName: 'trainings';
  info: {
    singularName: 'training';
    pluralName: 'trainings';
    displayName: 'Training';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    moments: Attribute.Component<'details.moment', true>;
    coaches: Attribute.Relation<
      'api::training.training',
      'manyToMany',
      'api::coach.coach'
    >;
    interventions: Attribute.Relation<
      'api::training.training',
      'manyToMany',
      'api::intervention.intervention'
    >;
    photos: Attribute.Media;
    location: Attribute.String;
    slug: Attribute.UID<'api::training.training', 'name'> & Attribute.Required;
    seo_description: Attribute.Text;
    seo_title: Attribute.String;
    intro: Attribute.Text;
    thumbnail: Attribute.Media & Attribute.Required;
    seo_keywords: Attribute.Component<'details.keywords', true> &
      Attribute.SetMinMax<{
        max: 5;
      }>;
    rank: Attribute.Integer;
    pricings: Attribute.Relation<
      'api::training.training',
      'manyToMany',
      'api::pricing.pricing'
    >;
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::training.training',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::training.training',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::publisher.action': PluginPublisherAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::activity.activity': ApiActivityActivity;
      'api::animal.animal': ApiAnimalAnimal;
      'api::coach.coach': ApiCoachCoach;
      'api::farm.farm': ApiFarmFarm;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::intervention.intervention': ApiInterventionIntervention;
      'api::legal.legal': ApiLegalLegal;
      'api::membership.membership': ApiMembershipMembership;
      'api::message.message': ApiMessageMessage;
      'api::participant.participant': ApiParticipantParticipant;
      'api::pricing.pricing': ApiPricingPricing;
      'api::process.process': ApiProcessProcess;
      'api::program.program': ApiProgramProgram;
      'api::reimbursement.reimbursement': ApiReimbursementReimbursement;
      'api::seminar.seminar': ApiSeminarSeminar;
      'api::training.training': ApiTrainingTraining;
    }
  }
}
