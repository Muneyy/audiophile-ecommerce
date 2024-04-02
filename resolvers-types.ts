import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  Dimension: { input: any; output: any }
  HexColor: { input: any; output: any }
  JSON: { input: any; output: any }
  Quality: { input: any; output: any }
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  fileName?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Int']['output']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  width?: Maybe<Scalars['Int']['output']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']['input']>
  contentType_contains?: InputMaybe<Scalars['String']['input']>
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentType_not?: InputMaybe<Scalars['String']['input']>
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName?: InputMaybe<Scalars['String']['input']>
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName_not?: InputMaybe<Scalars['String']['input']>
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  height?: InputMaybe<Scalars['Int']['input']>
  height_exists?: InputMaybe<Scalars['Boolean']['input']>
  height_gt?: InputMaybe<Scalars['Int']['input']>
  height_gte?: InputMaybe<Scalars['Int']['input']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  height_lt?: InputMaybe<Scalars['Int']['input']>
  height_lte?: InputMaybe<Scalars['Int']['input']>
  height_not?: InputMaybe<Scalars['Int']['input']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size?: InputMaybe<Scalars['Int']['input']>
  size_exists?: InputMaybe<Scalars['Boolean']['input']>
  size_gt?: InputMaybe<Scalars['Int']['input']>
  size_gte?: InputMaybe<Scalars['Int']['input']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size_lt?: InputMaybe<Scalars['Int']['input']>
  size_lte?: InputMaybe<Scalars['Int']['input']>
  size_not?: InputMaybe<Scalars['Int']['input']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
  url_contains?: InputMaybe<Scalars['String']['input']>
  url_exists?: InputMaybe<Scalars['Boolean']['input']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url_not?: InputMaybe<Scalars['String']['input']>
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  width?: InputMaybe<Scalars['Int']['input']>
  width_exists?: InputMaybe<Scalars['Boolean']['input']>
  width_gt?: InputMaybe<Scalars['Int']['input']>
  width_gte?: InputMaybe<Scalars['Int']['input']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  width_lt?: InputMaybe<Scalars['Int']['input']>
  width_lte?: InputMaybe<Scalars['Int']['input']>
  width_not?: InputMaybe<Scalars['Int']['input']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  footerContentCollection?: Maybe<FooterContentCollection>
  homepageContentCollection?: Maybe<HomepageContentCollection>
  navLinksCollection?: Maybe<NavLinksCollection>
  productCollection?: Maybe<ProductCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsFooterContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsHomepageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsNavLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/footerContent) */
export type FooterContent = Entry & {
  __typename?: 'FooterContent'
  contentfulMetadata: ContentfulMetadata
  copyright?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  descriptionSecond?: Maybe<Scalars['String']['output']>
  footerImage?: Maybe<Asset>
  headline?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<FooterContentLinkingCollections>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/footerContent) */
export type FooterContentCopyrightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/footerContent) */
export type FooterContentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/footerContent) */
export type FooterContentDescriptionSecondArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/footerContent) */
export type FooterContentFooterImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/footerContent) */
export type FooterContentHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/footerContent) */
export type FooterContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FooterContentCollection = {
  __typename?: 'FooterContentCollection'
  items: Array<Maybe<FooterContent>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type FooterContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterContentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<FooterContentFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  copyright?: InputMaybe<Scalars['String']['input']>
  copyright_contains?: InputMaybe<Scalars['String']['input']>
  copyright_exists?: InputMaybe<Scalars['Boolean']['input']>
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  copyright_not?: InputMaybe<Scalars['String']['input']>
  copyright_not_contains?: InputMaybe<Scalars['String']['input']>
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description?: InputMaybe<Scalars['String']['input']>
  descriptionSecond?: InputMaybe<Scalars['String']['input']>
  descriptionSecond_contains?: InputMaybe<Scalars['String']['input']>
  descriptionSecond_exists?: InputMaybe<Scalars['Boolean']['input']>
  descriptionSecond_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  descriptionSecond_not?: InputMaybe<Scalars['String']['input']>
  descriptionSecond_not_contains?: InputMaybe<Scalars['String']['input']>
  descriptionSecond_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  footerImage_exists?: InputMaybe<Scalars['Boolean']['input']>
  headline?: InputMaybe<Scalars['String']['input']>
  headline_contains?: InputMaybe<Scalars['String']['input']>
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  headline_not?: InputMaybe<Scalars['String']['input']>
  headline_not_contains?: InputMaybe<Scalars['String']['input']>
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type FooterContentLinkingCollections = {
  __typename?: 'FooterContentLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type FooterContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum FooterContentOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContent = Entry & {
  __typename?: 'HomepageContent'
  bannerContent?: Maybe<Scalars['JSON']['output']>
  bannerDescription?: Maybe<Scalars['String']['output']>
  bannerImageCollection?: Maybe<AssetCollection>
  bannerProductReference?: Maybe<Entry>
  bannerTitle?: Maybe<Scalars['String']['output']>
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  categoriesImagesCollection?: Maybe<AssetCollection>
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<HomepageContentLinkingCollections>
  promotionImagesCollection?: Maybe<AssetCollection>
  promotionProducts?: Maybe<Scalars['JSON']['output']>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentBannerContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentBannerDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentBannerImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentBannerProductReferenceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentCategoriesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentCategoriesImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentPromotionImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/HomepageContent) */
export type HomepageContentPromotionProductsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type HomepageContentCollection = {
  __typename?: 'HomepageContentCollection'
  items: Array<Maybe<HomepageContent>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type HomepageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomepageContentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HomepageContentFilter>>>
  bannerContent_exists?: InputMaybe<Scalars['Boolean']['input']>
  bannerDescription?: InputMaybe<Scalars['String']['input']>
  bannerDescription_contains?: InputMaybe<Scalars['String']['input']>
  bannerDescription_exists?: InputMaybe<Scalars['Boolean']['input']>
  bannerDescription_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  bannerDescription_not?: InputMaybe<Scalars['String']['input']>
  bannerDescription_not_contains?: InputMaybe<Scalars['String']['input']>
  bannerDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  bannerImageCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  bannerProductReference_exists?: InputMaybe<Scalars['Boolean']['input']>
  bannerTitle?: InputMaybe<Scalars['String']['input']>
  bannerTitle_contains?: InputMaybe<Scalars['String']['input']>
  bannerTitle_exists?: InputMaybe<Scalars['Boolean']['input']>
  bannerTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  bannerTitle_not?: InputMaybe<Scalars['String']['input']>
  bannerTitle_not_contains?: InputMaybe<Scalars['String']['input']>
  bannerTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  categoriesImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  categories_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  categories_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  categories_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  promotionImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  promotionProducts_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
}

export type HomepageContentLinkingCollections = {
  __typename?: 'HomepageContentLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type HomepageContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum HomepageContentOrder {
  BannerTitleAsc = 'bannerTitle_ASC',
  BannerTitleDesc = 'bannerTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/navLinks) */
export type NavLinks = Entry & {
  __typename?: 'NavLinks'
  categories?: Maybe<Scalars['JSON']['output']>
  categoriesImagesCollection?: Maybe<AssetCollection>
  contentfulMetadata: ContentfulMetadata
  entryText?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<NavLinksLinkingCollections>
  links?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/navLinks) */
export type NavLinksCategoriesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/navLinks) */
export type NavLinksCategoriesImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/navLinks) */
export type NavLinksEntryTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/navLinks) */
export type NavLinksLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/navLinks) */
export type NavLinksLinksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type NavLinksCollection = {
  __typename?: 'NavLinksCollection'
  items: Array<Maybe<NavLinks>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type NavLinksFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavLinksFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NavLinksFilter>>>
  categoriesImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  entryText?: InputMaybe<Scalars['String']['input']>
  entryText_contains?: InputMaybe<Scalars['String']['input']>
  entryText_exists?: InputMaybe<Scalars['Boolean']['input']>
  entryText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  entryText_not?: InputMaybe<Scalars['String']['input']>
  entryText_not_contains?: InputMaybe<Scalars['String']['input']>
  entryText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  links_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  links_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  links_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
}

export type NavLinksLinkingCollections = {
  __typename?: 'NavLinksLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type NavLinksLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum NavLinksOrder {
  EntryTextAsc = 'entryText_ASC',
  EntryTextDesc = 'entryText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type Product = Entry & {
  __typename?: 'Product'
  apiRoute?: Maybe<Scalars['String']['output']>
  bannerDescription?: Maybe<Scalars['String']['output']>
  bannerUrlDesktop?: Maybe<Asset>
  bannerUrlMobile?: Maybe<Asset>
  category?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  features?: Maybe<Scalars['String']['output']>
  imageGalleryCollection?: Maybe<AssetCollection>
  imageMain?: Maybe<Asset>
  imageThumbnail?: Maybe<Asset>
  includedItems?: Maybe<Scalars['JSON']['output']>
  linkedFrom?: Maybe<ProductLinkingCollections>
  price?: Maybe<Scalars['Float']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductApiRouteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductBannerDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductBannerUrlDesktopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductBannerUrlMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductFeaturesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductImageGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductImageMainArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductImageThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductIncludedItemsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/2rezb5w2xoyv/content_types/product) */
export type ProductTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ProductCollection = {
  __typename?: 'ProductCollection'
  items: Array<Maybe<Product>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ProductFilter>>>
  apiRoute?: InputMaybe<Scalars['String']['input']>
  apiRoute_contains?: InputMaybe<Scalars['String']['input']>
  apiRoute_exists?: InputMaybe<Scalars['Boolean']['input']>
  apiRoute_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  apiRoute_not?: InputMaybe<Scalars['String']['input']>
  apiRoute_not_contains?: InputMaybe<Scalars['String']['input']>
  apiRoute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  bannerDescription?: InputMaybe<Scalars['String']['input']>
  bannerDescription_contains?: InputMaybe<Scalars['String']['input']>
  bannerDescription_exists?: InputMaybe<Scalars['Boolean']['input']>
  bannerDescription_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  bannerDescription_not?: InputMaybe<Scalars['String']['input']>
  bannerDescription_not_contains?: InputMaybe<Scalars['String']['input']>
  bannerDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  bannerUrlDesktop_exists?: InputMaybe<Scalars['Boolean']['input']>
  bannerUrlMobile_exists?: InputMaybe<Scalars['Boolean']['input']>
  category?: InputMaybe<Scalars['String']['input']>
  category_contains?: InputMaybe<Scalars['String']['input']>
  category_exists?: InputMaybe<Scalars['Boolean']['input']>
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  category_not?: InputMaybe<Scalars['String']['input']>
  category_not_contains?: InputMaybe<Scalars['String']['input']>
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  features?: InputMaybe<Scalars['String']['input']>
  features_contains?: InputMaybe<Scalars['String']['input']>
  features_exists?: InputMaybe<Scalars['Boolean']['input']>
  features_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  features_not?: InputMaybe<Scalars['String']['input']>
  features_not_contains?: InputMaybe<Scalars['String']['input']>
  features_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  imageGalleryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  imageMain_exists?: InputMaybe<Scalars['Boolean']['input']>
  imageThumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>
  includedItems_exists?: InputMaybe<Scalars['Boolean']['input']>
  price?: InputMaybe<Scalars['Float']['input']>
  price_exists?: InputMaybe<Scalars['Boolean']['input']>
  price_gt?: InputMaybe<Scalars['Float']['input']>
  price_gte?: InputMaybe<Scalars['Float']['input']>
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  price_lt?: InputMaybe<Scalars['Float']['input']>
  price_lte?: InputMaybe<Scalars['Float']['input']>
  price_not?: InputMaybe<Scalars['Float']['input']>
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProductLinkingCollections = {
  __typename?: 'ProductLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ProductOrder {
  ApiRouteAsc = 'apiRoute_ASC',
  ApiRouteDesc = 'apiRoute_DESC',
  BannerDescriptionAsc = 'bannerDescription_ASC',
  BannerDescriptionDesc = 'bannerDescription_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type Query = {
  __typename?: 'Query'
  _node?: Maybe<_Node>
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  entryCollection?: Maybe<EntryCollection>
  footerContent?: Maybe<FooterContent>
  footerContentCollection?: Maybe<FooterContentCollection>
  homepageContent?: Maybe<HomepageContent>
  homepageContentCollection?: Maybe<HomepageContentCollection>
  navLinks?: Maybe<NavLinks>
  navLinksCollection?: Maybe<NavLinksCollection>
  product?: Maybe<Product>
  productCollection?: Maybe<ProductCollection>
}

export type Query_NodeArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<EntryFilter>
}

export type QueryFooterContentArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFooterContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<FooterContentOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FooterContentFilter>
}

export type QueryHomepageContentArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryHomepageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<HomepageContentOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HomepageContentFilter>
}

export type QueryNavLinksArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryNavLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<NavLinksOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<NavLinksFilter>
}

export type QueryProductArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ProductOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProductFilter>
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']['output']
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  publishedVersion?: Maybe<Scalars['Int']['output']>
  spaceId: Scalars['String']['output']
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  id?: InputMaybe<Scalars['String']['input']>
  id_contains?: InputMaybe<Scalars['String']['input']>
  id_exists?: InputMaybe<Scalars['Boolean']['input']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_not?: InputMaybe<Scalars['String']['input']>
  id_not_contains?: InputMaybe<Scalars['String']['input']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedVersion?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
}

export type _Node = {
  _id: Scalars['ID']['output']
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> =
  ResolversObject<{
    Entry: FooterContent | HomepageContent | NavLinks | Product
    _Node: never
  }>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Asset: ResolverTypeWrapper<Asset>
  AssetCollection: ResolverTypeWrapper<AssetCollection>
  AssetFilter: AssetFilter
  AssetLinkingCollections: ResolverTypeWrapper<AssetLinkingCollections>
  AssetOrder: AssetOrder
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>
  ContentfulMetadataFilter: ContentfulMetadataFilter
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter
  ContentfulTag: ResolverTypeWrapper<ContentfulTag>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>
  Dimension: ResolverTypeWrapper<Scalars['Dimension']['output']>
  Entry: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entry']>
  EntryCollection: ResolverTypeWrapper<EntryCollection>
  EntryFilter: EntryFilter
  EntryOrder: EntryOrder
  Float: ResolverTypeWrapper<Scalars['Float']['output']>
  FooterContent: ResolverTypeWrapper<FooterContent>
  FooterContentCollection: ResolverTypeWrapper<FooterContentCollection>
  FooterContentFilter: FooterContentFilter
  FooterContentLinkingCollections: ResolverTypeWrapper<FooterContentLinkingCollections>
  FooterContentOrder: FooterContentOrder
  HexColor: ResolverTypeWrapper<Scalars['HexColor']['output']>
  HomepageContent: ResolverTypeWrapper<HomepageContent>
  HomepageContentCollection: ResolverTypeWrapper<HomepageContentCollection>
  HomepageContentFilter: HomepageContentFilter
  HomepageContentLinkingCollections: ResolverTypeWrapper<HomepageContentLinkingCollections>
  HomepageContentOrder: HomepageContentOrder
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  ImageFormat: ImageFormat
  ImageResizeFocus: ImageResizeFocus
  ImageResizeStrategy: ImageResizeStrategy
  ImageTransformOptions: ImageTransformOptions
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>
  NavLinks: ResolverTypeWrapper<NavLinks>
  NavLinksCollection: ResolverTypeWrapper<NavLinksCollection>
  NavLinksFilter: NavLinksFilter
  NavLinksLinkingCollections: ResolverTypeWrapper<NavLinksLinkingCollections>
  NavLinksOrder: NavLinksOrder
  Product: ResolverTypeWrapper<Product>
  ProductCollection: ResolverTypeWrapper<ProductCollection>
  ProductFilter: ProductFilter
  ProductLinkingCollections: ResolverTypeWrapper<ProductLinkingCollections>
  ProductOrder: ProductOrder
  Quality: ResolverTypeWrapper<Scalars['Quality']['output']>
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  Sys: ResolverTypeWrapper<Sys>
  SysFilter: SysFilter
  _Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['_Node']>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Asset: Asset
  AssetCollection: AssetCollection
  AssetFilter: AssetFilter
  AssetLinkingCollections: AssetLinkingCollections
  Boolean: Scalars['Boolean']['output']
  ContentfulMetadata: ContentfulMetadata
  ContentfulMetadataFilter: ContentfulMetadataFilter
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter
  ContentfulTag: ContentfulTag
  DateTime: Scalars['DateTime']['output']
  Dimension: Scalars['Dimension']['output']
  Entry: ResolversInterfaceTypes<ResolversParentTypes>['Entry']
  EntryCollection: EntryCollection
  EntryFilter: EntryFilter
  Float: Scalars['Float']['output']
  FooterContent: FooterContent
  FooterContentCollection: FooterContentCollection
  FooterContentFilter: FooterContentFilter
  FooterContentLinkingCollections: FooterContentLinkingCollections
  HexColor: Scalars['HexColor']['output']
  HomepageContent: HomepageContent
  HomepageContentCollection: HomepageContentCollection
  HomepageContentFilter: HomepageContentFilter
  HomepageContentLinkingCollections: HomepageContentLinkingCollections
  ID: Scalars['ID']['output']
  ImageTransformOptions: ImageTransformOptions
  Int: Scalars['Int']['output']
  JSON: Scalars['JSON']['output']
  NavLinks: NavLinks
  NavLinksCollection: NavLinksCollection
  NavLinksFilter: NavLinksFilter
  NavLinksLinkingCollections: NavLinksLinkingCollections
  Product: Product
  ProductCollection: ProductCollection
  ProductFilter: ProductFilter
  ProductLinkingCollections: ProductLinkingCollections
  Quality: Scalars['Quality']['output']
  Query: {}
  String: Scalars['String']['output']
  Sys: Sys
  SysFilter: SysFilter
  _Node: ResolversInterfaceTypes<ResolversParentTypes>['_Node']
}>

export type AssetResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Asset'] = ResolversParentTypes['Asset'],
> = ResolversObject<{
  contentType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<AssetContentTypeArgs>
  >
  contentfulMetadata?: Resolver<
    ResolversTypes['ContentfulMetadata'],
    ParentType,
    ContextType
  >
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<AssetDescriptionArgs>
  >
  fileName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<AssetFileNameArgs>
  >
  height?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<AssetHeightArgs>
  >
  linkedFrom?: Resolver<
    Maybe<ResolversTypes['AssetLinkingCollections']>,
    ParentType,
    ContextType,
    Partial<AssetLinkedFromArgs>
  >
  size?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<AssetSizeArgs>
  >
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>
  title?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<AssetTitleArgs>
  >
  url?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<AssetUrlArgs>
  >
  width?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<AssetWidthArgs>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AssetCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AssetCollection'] = ResolversParentTypes['AssetCollection'],
> = ResolversObject<{
  items?: Resolver<
    Array<Maybe<ResolversTypes['Asset']>>,
    ParentType,
    ContextType
  >
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AssetLinkingCollectionsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AssetLinkingCollections'] = ResolversParentTypes['AssetLinkingCollections'],
> = ResolversObject<{
  entryCollection?: Resolver<
    Maybe<ResolversTypes['EntryCollection']>,
    ParentType,
    ContextType,
    RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
  >
  footerContentCollection?: Resolver<
    Maybe<ResolversTypes['FooterContentCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      AssetLinkingCollectionsFooterContentCollectionArgs,
      'limit' | 'skip'
    >
  >
  homepageContentCollection?: Resolver<
    Maybe<ResolversTypes['HomepageContentCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      AssetLinkingCollectionsHomepageContentCollectionArgs,
      'limit' | 'skip'
    >
  >
  navLinksCollection?: Resolver<
    Maybe<ResolversTypes['NavLinksCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      AssetLinkingCollectionsNavLinksCollectionArgs,
      'limit' | 'skip'
    >
  >
  productCollection?: Resolver<
    Maybe<ResolversTypes['ProductCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      AssetLinkingCollectionsProductCollectionArgs,
      'limit' | 'skip'
    >
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ContentfulMetadataResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ContentfulMetadata'] = ResolversParentTypes['ContentfulMetadata'],
> = ResolversObject<{
  tags?: Resolver<
    Array<Maybe<ResolversTypes['ContentfulTag']>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ContentfulTagResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ContentfulTag'] = ResolversParentTypes['ContentfulTag'],
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export interface DimensionScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Dimension'], any> {
  name: 'Dimension'
}

export type EntryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Entry'] = ResolversParentTypes['Entry'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'FooterContent' | 'HomepageContent' | 'NavLinks' | 'Product',
    ParentType,
    ContextType
  >
  contentfulMetadata?: Resolver<
    ResolversTypes['ContentfulMetadata'],
    ParentType,
    ContextType
  >
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>
}>

export type EntryCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['EntryCollection'] = ResolversParentTypes['EntryCollection'],
> = ResolversObject<{
  items?: Resolver<
    Array<Maybe<ResolversTypes['Entry']>>,
    ParentType,
    ContextType
  >
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FooterContentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['FooterContent'] = ResolversParentTypes['FooterContent'],
> = ResolversObject<{
  contentfulMetadata?: Resolver<
    ResolversTypes['ContentfulMetadata'],
    ParentType,
    ContextType
  >
  copyright?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<FooterContentCopyrightArgs>
  >
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<FooterContentDescriptionArgs>
  >
  descriptionSecond?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<FooterContentDescriptionSecondArgs>
  >
  footerImage?: Resolver<
    Maybe<ResolversTypes['Asset']>,
    ParentType,
    ContextType,
    Partial<FooterContentFooterImageArgs>
  >
  headline?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<FooterContentHeadlineArgs>
  >
  linkedFrom?: Resolver<
    Maybe<ResolversTypes['FooterContentLinkingCollections']>,
    ParentType,
    ContextType,
    Partial<FooterContentLinkedFromArgs>
  >
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FooterContentCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['FooterContentCollection'] = ResolversParentTypes['FooterContentCollection'],
> = ResolversObject<{
  items?: Resolver<
    Array<Maybe<ResolversTypes['FooterContent']>>,
    ParentType,
    ContextType
  >
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FooterContentLinkingCollectionsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['FooterContentLinkingCollections'] = ResolversParentTypes['FooterContentLinkingCollections'],
> = ResolversObject<{
  entryCollection?: Resolver<
    Maybe<ResolversTypes['EntryCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      FooterContentLinkingCollectionsEntryCollectionArgs,
      'limit' | 'skip'
    >
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface HexColorScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
  name: 'HexColor'
}

export type HomepageContentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['HomepageContent'] = ResolversParentTypes['HomepageContent'],
> = ResolversObject<{
  bannerContent?: Resolver<
    Maybe<ResolversTypes['JSON']>,
    ParentType,
    ContextType,
    Partial<HomepageContentBannerContentArgs>
  >
  bannerDescription?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<HomepageContentBannerDescriptionArgs>
  >
  bannerImageCollection?: Resolver<
    Maybe<ResolversTypes['AssetCollection']>,
    ParentType,
    ContextType,
    RequireFields<HomepageContentBannerImageCollectionArgs, 'limit' | 'skip'>
  >
  bannerProductReference?: Resolver<
    Maybe<ResolversTypes['Entry']>,
    ParentType,
    ContextType,
    Partial<HomepageContentBannerProductReferenceArgs>
  >
  bannerTitle?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<HomepageContentBannerTitleArgs>
  >
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType,
    Partial<HomepageContentCategoriesArgs>
  >
  categoriesImagesCollection?: Resolver<
    Maybe<ResolversTypes['AssetCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      HomepageContentCategoriesImagesCollectionArgs,
      'limit' | 'skip'
    >
  >
  contentfulMetadata?: Resolver<
    ResolversTypes['ContentfulMetadata'],
    ParentType,
    ContextType
  >
  linkedFrom?: Resolver<
    Maybe<ResolversTypes['HomepageContentLinkingCollections']>,
    ParentType,
    ContextType,
    Partial<HomepageContentLinkedFromArgs>
  >
  promotionImagesCollection?: Resolver<
    Maybe<ResolversTypes['AssetCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      HomepageContentPromotionImagesCollectionArgs,
      'limit' | 'skip'
    >
  >
  promotionProducts?: Resolver<
    Maybe<ResolversTypes['JSON']>,
    ParentType,
    ContextType,
    Partial<HomepageContentPromotionProductsArgs>
  >
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type HomepageContentCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['HomepageContentCollection'] = ResolversParentTypes['HomepageContentCollection'],
> = ResolversObject<{
  items?: Resolver<
    Array<Maybe<ResolversTypes['HomepageContent']>>,
    ParentType,
    ContextType
  >
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type HomepageContentLinkingCollectionsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['HomepageContentLinkingCollections'] = ResolversParentTypes['HomepageContentLinkingCollections'],
> = ResolversObject<{
  entryCollection?: Resolver<
    Maybe<ResolversTypes['EntryCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      HomepageContentLinkingCollectionsEntryCollectionArgs,
      'limit' | 'skip'
    >
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type NavLinksResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['NavLinks'] = ResolversParentTypes['NavLinks'],
> = ResolversObject<{
  categories?: Resolver<
    Maybe<ResolversTypes['JSON']>,
    ParentType,
    ContextType,
    Partial<NavLinksCategoriesArgs>
  >
  categoriesImagesCollection?: Resolver<
    Maybe<ResolversTypes['AssetCollection']>,
    ParentType,
    ContextType,
    RequireFields<NavLinksCategoriesImagesCollectionArgs, 'limit' | 'skip'>
  >
  contentfulMetadata?: Resolver<
    ResolversTypes['ContentfulMetadata'],
    ParentType,
    ContextType
  >
  entryText?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<NavLinksEntryTextArgs>
  >
  linkedFrom?: Resolver<
    Maybe<ResolversTypes['NavLinksLinkingCollections']>,
    ParentType,
    ContextType,
    Partial<NavLinksLinkedFromArgs>
  >
  links?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType,
    Partial<NavLinksLinksArgs>
  >
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NavLinksCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['NavLinksCollection'] = ResolversParentTypes['NavLinksCollection'],
> = ResolversObject<{
  items?: Resolver<
    Array<Maybe<ResolversTypes['NavLinks']>>,
    ParentType,
    ContextType
  >
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NavLinksLinkingCollectionsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['NavLinksLinkingCollections'] = ResolversParentTypes['NavLinksLinkingCollections'],
> = ResolversObject<{
  entryCollection?: Resolver<
    Maybe<ResolversTypes['EntryCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      NavLinksLinkingCollectionsEntryCollectionArgs,
      'limit' | 'skip'
    >
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Product'] = ResolversParentTypes['Product'],
> = ResolversObject<{
  apiRoute?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<ProductApiRouteArgs>
  >
  bannerDescription?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<ProductBannerDescriptionArgs>
  >
  bannerUrlDesktop?: Resolver<
    Maybe<ResolversTypes['Asset']>,
    ParentType,
    ContextType,
    Partial<ProductBannerUrlDesktopArgs>
  >
  bannerUrlMobile?: Resolver<
    Maybe<ResolversTypes['Asset']>,
    ParentType,
    ContextType,
    Partial<ProductBannerUrlMobileArgs>
  >
  category?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<ProductCategoryArgs>
  >
  contentfulMetadata?: Resolver<
    ResolversTypes['ContentfulMetadata'],
    ParentType,
    ContextType
  >
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<ProductDescriptionArgs>
  >
  features?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<ProductFeaturesArgs>
  >
  imageGalleryCollection?: Resolver<
    Maybe<ResolversTypes['AssetCollection']>,
    ParentType,
    ContextType,
    RequireFields<ProductImageGalleryCollectionArgs, 'limit' | 'skip'>
  >
  imageMain?: Resolver<
    Maybe<ResolversTypes['Asset']>,
    ParentType,
    ContextType,
    Partial<ProductImageMainArgs>
  >
  imageThumbnail?: Resolver<
    Maybe<ResolversTypes['Asset']>,
    ParentType,
    ContextType,
    Partial<ProductImageThumbnailArgs>
  >
  includedItems?: Resolver<
    Maybe<ResolversTypes['JSON']>,
    ParentType,
    ContextType,
    Partial<ProductIncludedItemsArgs>
  >
  linkedFrom?: Resolver<
    Maybe<ResolversTypes['ProductLinkingCollections']>,
    ParentType,
    ContextType,
    Partial<ProductLinkedFromArgs>
  >
  price?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    Partial<ProductPriceArgs>
  >
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>
  title?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<ProductTitleArgs>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProductCollection'] = ResolversParentTypes['ProductCollection'],
> = ResolversObject<{
  items?: Resolver<
    Array<Maybe<ResolversTypes['Product']>>,
    ParentType,
    ContextType
  >
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductLinkingCollectionsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProductLinkingCollections'] = ResolversParentTypes['ProductLinkingCollections'],
> = ResolversObject<{
  entryCollection?: Resolver<
    Maybe<ResolversTypes['EntryCollection']>,
    ParentType,
    ContextType,
    RequireFields<
      ProductLinkingCollectionsEntryCollectionArgs,
      'limit' | 'skip'
    >
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface QualityScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Quality'], any> {
  name: 'Quality'
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  _node?: Resolver<
    Maybe<ResolversTypes['_Node']>,
    ParentType,
    ContextType,
    RequireFields<Query_NodeArgs, 'id'>
  >
  asset?: Resolver<
    Maybe<ResolversTypes['Asset']>,
    ParentType,
    ContextType,
    RequireFields<QueryAssetArgs, 'id'>
  >
  assetCollection?: Resolver<
    Maybe<ResolversTypes['AssetCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>
  >
  entryCollection?: Resolver<
    Maybe<ResolversTypes['EntryCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>
  >
  footerContent?: Resolver<
    Maybe<ResolversTypes['FooterContent']>,
    ParentType,
    ContextType,
    RequireFields<QueryFooterContentArgs, 'id'>
  >
  footerContentCollection?: Resolver<
    Maybe<ResolversTypes['FooterContentCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryFooterContentCollectionArgs, 'limit' | 'skip'>
  >
  homepageContent?: Resolver<
    Maybe<ResolversTypes['HomepageContent']>,
    ParentType,
    ContextType,
    RequireFields<QueryHomepageContentArgs, 'id'>
  >
  homepageContentCollection?: Resolver<
    Maybe<ResolversTypes['HomepageContentCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryHomepageContentCollectionArgs, 'limit' | 'skip'>
  >
  navLinks?: Resolver<
    Maybe<ResolversTypes['NavLinks']>,
    ParentType,
    ContextType,
    RequireFields<QueryNavLinksArgs, 'id'>
  >
  navLinksCollection?: Resolver<
    Maybe<ResolversTypes['NavLinksCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryNavLinksCollectionArgs, 'limit' | 'skip'>
  >
  product?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductArgs, 'id'>
  >
  productCollection?: Resolver<
    Maybe<ResolversTypes['ProductCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductCollectionArgs, 'limit' | 'skip'>
  >
}>

export type SysResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Sys'] = ResolversParentTypes['Sys'],
> = ResolversObject<{
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  firstPublishedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  publishedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >
  publishedVersion?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >
  spaceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _NodeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['_Node'] = ResolversParentTypes['_Node'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  Asset?: AssetResolvers<ContextType>
  AssetCollection?: AssetCollectionResolvers<ContextType>
  AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>
  ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>
  ContentfulTag?: ContentfulTagResolvers<ContextType>
  DateTime?: GraphQLScalarType
  Dimension?: GraphQLScalarType
  Entry?: EntryResolvers<ContextType>
  EntryCollection?: EntryCollectionResolvers<ContextType>
  FooterContent?: FooterContentResolvers<ContextType>
  FooterContentCollection?: FooterContentCollectionResolvers<ContextType>
  FooterContentLinkingCollections?: FooterContentLinkingCollectionsResolvers<ContextType>
  HexColor?: GraphQLScalarType
  HomepageContent?: HomepageContentResolvers<ContextType>
  HomepageContentCollection?: HomepageContentCollectionResolvers<ContextType>
  HomepageContentLinkingCollections?: HomepageContentLinkingCollectionsResolvers<ContextType>
  JSON?: GraphQLScalarType
  NavLinks?: NavLinksResolvers<ContextType>
  NavLinksCollection?: NavLinksCollectionResolvers<ContextType>
  NavLinksLinkingCollections?: NavLinksLinkingCollectionsResolvers<ContextType>
  Product?: ProductResolvers<ContextType>
  ProductCollection?: ProductCollectionResolvers<ContextType>
  ProductLinkingCollections?: ProductLinkingCollectionsResolvers<ContextType>
  Quality?: GraphQLScalarType
  Query?: QueryResolvers<ContextType>
  Sys?: SysResolvers<ContextType>
  _Node?: _NodeResolvers<ContextType>
}>
