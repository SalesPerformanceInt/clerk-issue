/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** This field accepts both ISODateString and ISODateTimeStringexample: 1992-08-14 or 1992-08-14T03:42:00.000Z */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AllItem = {
  __typename?: 'AllItem';
  items?: Maybe<Array<Maybe<Item>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllItemModularNested = {
  __typename?: 'AllItemModularNested';
  items?: Maybe<Array<Maybe<ItemModularNested>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllQuestionitem = {
  __typename?: 'AllQuestionitem';
  items?: Maybe<Array<Maybe<Questionitem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSysAsset = {
  __typename?: 'AllSysAsset';
  items?: Maybe<Array<Maybe<SysAsset>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllTaxonBottomUp = {
  __typename?: 'AllTaxonBottomUp';
  items?: Maybe<Array<Maybe<TaxonBottomUp>>>;
  total?: Maybe<Scalars['Int']>;
};

export type DeletedReferencesConnection = {
  __typename?: 'DeletedReferencesConnection';
  edges?: Maybe<Array<Maybe<DeletedReferencesEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeletedReferencesEdge = {
  __typename?: 'DeletedReferencesEdge';
  node?: Maybe<Scalars['String']>;
};

export type EntrySystemField = {
  __typename?: 'EntrySystemField';
  branch?: Maybe<Scalars['String']>;
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  extensionConnection?: Maybe<SysExtensionConnection>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};


export type EntrySystemFieldExtensionConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EvalReferenceEnum {
  All = 'ALL',
  Any = 'ANY'
}

export type Item = {
  __typename?: 'Item';
  categorization?: Maybe<ItemCategorization>;
  concept?: Maybe<ItemConcept>;
  concept_words?: Maybe<Array<Maybe<ItemConceptWords>>>;
  matching?: Maybe<ItemMatching>;
  matching_pairs?: Maybe<Array<Maybe<ItemMatchingPairs>>>;
  multiple_choice?: Maybe<ItemMultipleChoice>;
  multiple_choice_choices?: Maybe<Array<Maybe<ItemMultipleChoiceChoices>>>;
  ordering?: Maybe<ItemOrdering>;
  ordering_entries?: Maybe<Array<Maybe<ItemOrderingEntries>>>;
  passive_learning?: Maybe<ItemPassiveLearning>;
  system?: Maybe<EntrySystemField>;
  taxonomyConnection?: Maybe<DeletedReferencesConnection>;
  title?: Maybe<Scalars['String']>;
  true_false_statement?: Maybe<ItemTrueFalseStatement>;
};


export type ItemTaxonomyConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ItemCategorization = {
  __typename?: 'ItemCategorization';
  cat_answer?: Maybe<Scalars['String']>;
  cat_answer_points?: Maybe<Scalars['Float']>;
  cat_detractor?: Maybe<Scalars['String']>;
  cat_detractor_points?: Maybe<Scalars['Float']>;
  cat_instruction?: Maybe<Scalars['String']>;
  cat_prompt?: Maybe<Scalars['String']>;
  cat_stem?: Maybe<Scalars['String']>;
};

export type ItemCategorizationWhere = {
  cat_answer?: InputMaybe<Scalars['String']>;
  cat_answer_exists?: InputMaybe<Scalars['Boolean']>;
  cat_answer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_answer_ne?: InputMaybe<Scalars['String']>;
  cat_answer_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_answer_points?: InputMaybe<Scalars['Float']>;
  cat_answer_points_exists?: InputMaybe<Scalars['Boolean']>;
  cat_answer_points_gt?: InputMaybe<Scalars['Float']>;
  cat_answer_points_gte?: InputMaybe<Scalars['Float']>;
  cat_answer_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cat_answer_points_lt?: InputMaybe<Scalars['Float']>;
  cat_answer_points_lte?: InputMaybe<Scalars['Float']>;
  cat_answer_points_ne?: InputMaybe<Scalars['Float']>;
  cat_answer_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cat_detractor?: InputMaybe<Scalars['String']>;
  cat_detractor_exists?: InputMaybe<Scalars['Boolean']>;
  cat_detractor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_detractor_ne?: InputMaybe<Scalars['String']>;
  cat_detractor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_detractor_points?: InputMaybe<Scalars['Float']>;
  cat_detractor_points_exists?: InputMaybe<Scalars['Boolean']>;
  cat_detractor_points_gt?: InputMaybe<Scalars['Float']>;
  cat_detractor_points_gte?: InputMaybe<Scalars['Float']>;
  cat_detractor_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cat_detractor_points_lt?: InputMaybe<Scalars['Float']>;
  cat_detractor_points_lte?: InputMaybe<Scalars['Float']>;
  cat_detractor_points_ne?: InputMaybe<Scalars['Float']>;
  cat_detractor_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cat_instruction?: InputMaybe<Scalars['String']>;
  cat_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  cat_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_instruction_ne?: InputMaybe<Scalars['String']>;
  cat_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_prompt?: InputMaybe<Scalars['String']>;
  cat_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  cat_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_prompt_ne?: InputMaybe<Scalars['String']>;
  cat_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_stem?: InputMaybe<Scalars['String']>;
  cat_stem_exists?: InputMaybe<Scalars['Boolean']>;
  cat_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_stem_ne?: InputMaybe<Scalars['String']>;
  cat_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemConcept = {
  __typename?: 'ItemConcept';
  concept_instruction?: Maybe<Scalars['String']>;
  concept_points?: Maybe<Scalars['Float']>;
  concept_prompt?: Maybe<Scalars['String']>;
  concept_stem?: Maybe<Scalars['String']>;
};

export type ItemConceptWhere = {
  concept_instruction?: InputMaybe<Scalars['String']>;
  concept_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  concept_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_instruction_ne?: InputMaybe<Scalars['String']>;
  concept_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_points?: InputMaybe<Scalars['Float']>;
  concept_points_exists?: InputMaybe<Scalars['Boolean']>;
  concept_points_gt?: InputMaybe<Scalars['Float']>;
  concept_points_gte?: InputMaybe<Scalars['Float']>;
  concept_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  concept_points_lt?: InputMaybe<Scalars['Float']>;
  concept_points_lte?: InputMaybe<Scalars['Float']>;
  concept_points_ne?: InputMaybe<Scalars['Float']>;
  concept_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  concept_prompt?: InputMaybe<Scalars['String']>;
  concept_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  concept_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_prompt_ne?: InputMaybe<Scalars['String']>;
  concept_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_stem?: InputMaybe<Scalars['String']>;
  concept_stem_exists?: InputMaybe<Scalars['Boolean']>;
  concept_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_stem_ne?: InputMaybe<Scalars['String']>;
  concept_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemConceptWords = ItemConceptWordsConceptWordChoice;

export type ItemConceptWordsConceptWordChoice = {
  __typename?: 'ItemConceptWordsConceptWordChoice';
  concept_word_choice?: Maybe<ItemConceptWordsConceptWordChoiceBlock>;
};

export type ItemConceptWordsConceptWordChoiceBlock = {
  __typename?: 'ItemConceptWordsConceptWordChoiceBlock';
  concept_word_choice_answer?: Maybe<Scalars['String']>;
  concept_word_choice_detractor?: Maybe<Scalars['String']>;
};

export type ItemConceptWordsConceptWordChoiceBlockWhere = {
  concept_word_choice_answer?: InputMaybe<Scalars['String']>;
  concept_word_choice_answer_exists?: InputMaybe<Scalars['Boolean']>;
  concept_word_choice_answer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_word_choice_answer_ne?: InputMaybe<Scalars['String']>;
  concept_word_choice_answer_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_word_choice_detractor?: InputMaybe<Scalars['String']>;
  concept_word_choice_detractor_exists?: InputMaybe<Scalars['Boolean']>;
  concept_word_choice_detractor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_word_choice_detractor_ne?: InputMaybe<Scalars['String']>;
  concept_word_choice_detractor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemConceptWordsWhere = {
  concept_word_choice?: InputMaybe<ItemConceptWordsConceptWordChoiceBlockWhere>;
  concept_word_choice_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemMatching = {
  __typename?: 'ItemMatching';
  matching_instruction?: Maybe<Scalars['String']>;
  matching_points?: Maybe<Scalars['Float']>;
  matching_prompt?: Maybe<Scalars['String']>;
};

export type ItemMatchingPairs = ItemMatchingPairsMatchingDetractors | ItemMatchingPairsMatchingPairChoice;

export type ItemMatchingPairsMatchingDetractors = {
  __typename?: 'ItemMatchingPairsMatchingDetractors';
  matching_detractors?: Maybe<ItemMatchingPairsMatchingDetractorsBlock>;
};

export type ItemMatchingPairsMatchingDetractorsBlock = {
  __typename?: 'ItemMatchingPairsMatchingDetractorsBlock';
  matching_detractor_text?: Maybe<Scalars['String']>;
};

export type ItemMatchingPairsMatchingDetractorsBlockWhere = {
  matching_detractor_text?: InputMaybe<Scalars['String']>;
  matching_detractor_text_exists?: InputMaybe<Scalars['Boolean']>;
  matching_detractor_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_detractor_text_ne?: InputMaybe<Scalars['String']>;
  matching_detractor_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemMatchingPairsMatchingPairChoice = {
  __typename?: 'ItemMatchingPairsMatchingPairChoice';
  matching_pair_choice?: Maybe<ItemMatchingPairsMatchingPairChoiceBlock>;
};

export type ItemMatchingPairsMatchingPairChoiceBlock = {
  __typename?: 'ItemMatchingPairsMatchingPairChoiceBlock';
  matching_pair_choice_a?: Maybe<Scalars['String']>;
  matching_pair_choice_b?: Maybe<Scalars['String']>;
};

export type ItemMatchingPairsMatchingPairChoiceBlockWhere = {
  matching_pair_choice_a?: InputMaybe<Scalars['String']>;
  matching_pair_choice_a_exists?: InputMaybe<Scalars['Boolean']>;
  matching_pair_choice_a_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_pair_choice_a_ne?: InputMaybe<Scalars['String']>;
  matching_pair_choice_a_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_pair_choice_b?: InputMaybe<Scalars['String']>;
  matching_pair_choice_b_exists?: InputMaybe<Scalars['Boolean']>;
  matching_pair_choice_b_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_pair_choice_b_ne?: InputMaybe<Scalars['String']>;
  matching_pair_choice_b_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemMatchingPairsWhere = {
  matching_detractors?: InputMaybe<ItemMatchingPairsMatchingDetractorsBlockWhere>;
  matching_detractors_exists?: InputMaybe<Scalars['Boolean']>;
  matching_pair_choice?: InputMaybe<ItemMatchingPairsMatchingPairChoiceBlockWhere>;
  matching_pair_choice_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemMatchingWhere = {
  matching_instruction?: InputMaybe<Scalars['String']>;
  matching_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  matching_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_instruction_ne?: InputMaybe<Scalars['String']>;
  matching_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_points?: InputMaybe<Scalars['Float']>;
  matching_points_exists?: InputMaybe<Scalars['Boolean']>;
  matching_points_gt?: InputMaybe<Scalars['Float']>;
  matching_points_gte?: InputMaybe<Scalars['Float']>;
  matching_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  matching_points_lt?: InputMaybe<Scalars['Float']>;
  matching_points_lte?: InputMaybe<Scalars['Float']>;
  matching_points_ne?: InputMaybe<Scalars['Float']>;
  matching_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  matching_prompt?: InputMaybe<Scalars['String']>;
  matching_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  matching_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_prompt_ne?: InputMaybe<Scalars['String']>;
  matching_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNested = {
  __typename?: 'ItemModularNested';
  modular_blocks?: Maybe<Array<Maybe<ItemModularNestedModularBlocks>>>;
  system?: Maybe<EntrySystemField>;
  taxonomyConnection?: Maybe<DeletedReferencesConnection>;
  title?: Maybe<Scalars['String']>;
};


export type ItemModularNestedTaxonomyConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ItemModularNestedModularBlocks = ItemModularNestedModularBlocksCategorisation | ItemModularNestedModularBlocksConcept | ItemModularNestedModularBlocksMatching | ItemModularNestedModularBlocksMcQuestion | ItemModularNestedModularBlocksOrdering | ItemModularNestedModularBlocksTfQuestion;

export type ItemModularNestedModularBlocksCategorisation = {
  __typename?: 'ItemModularNestedModularBlocksCategorisation';
  categorisation?: Maybe<ItemModularNestedModularBlocksCategorisationBlock>;
};

export type ItemModularNestedModularBlocksCategorisationBlock = {
  __typename?: 'ItemModularNestedModularBlocksCategorisationBlock';
  cat_options?: Maybe<Array<Maybe<ItemModularNestedModularBlocksCategorisationBlockCatOptions>>>;
  categorisation_instruction?: Maybe<Scalars['String']>;
  categorisation_prompt?: Maybe<Scalars['String']>;
  categorisation_stem?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksCategorisationBlockCatOptions = ItemModularNestedModularBlocksCategorisationBlockCatOptionsCatOption;

export type ItemModularNestedModularBlocksCategorisationBlockCatOptionsCatOption = {
  __typename?: 'ItemModularNestedModularBlocksCategorisationBlockCatOptionsCatOption';
  cat_option?: Maybe<ItemModularNestedModularBlocksCategorisationBlockCatOptionsCatOptionBlock>;
};

export type ItemModularNestedModularBlocksCategorisationBlockCatOptionsCatOptionBlock = {
  __typename?: 'ItemModularNestedModularBlocksCategorisationBlockCatOptionsCatOptionBlock';
  cat_option_scoring?: Maybe<Scalars['Float']>;
  cat_option_text?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksCategorisationBlockCatOptionsCatOptionBlockWhere = {
  cat_option_scoring?: InputMaybe<Scalars['Float']>;
  cat_option_scoring_exists?: InputMaybe<Scalars['Boolean']>;
  cat_option_scoring_gt?: InputMaybe<Scalars['Float']>;
  cat_option_scoring_gte?: InputMaybe<Scalars['Float']>;
  cat_option_scoring_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cat_option_scoring_lt?: InputMaybe<Scalars['Float']>;
  cat_option_scoring_lte?: InputMaybe<Scalars['Float']>;
  cat_option_scoring_ne?: InputMaybe<Scalars['Float']>;
  cat_option_scoring_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cat_option_text?: InputMaybe<Scalars['String']>;
  cat_option_text_exists?: InputMaybe<Scalars['Boolean']>;
  cat_option_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cat_option_text_ne?: InputMaybe<Scalars['String']>;
  cat_option_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksCategorisationBlockCatOptionsWhere = {
  cat_option?: InputMaybe<ItemModularNestedModularBlocksCategorisationBlockCatOptionsCatOptionBlockWhere>;
  cat_option_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksCategorisationBlockWhere = {
  cat_options?: InputMaybe<ItemModularNestedModularBlocksCategorisationBlockCatOptionsWhere>;
  cat_options_exists?: InputMaybe<Scalars['Boolean']>;
  categorisation_instruction?: InputMaybe<Scalars['String']>;
  categorisation_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  categorisation_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorisation_instruction_ne?: InputMaybe<Scalars['String']>;
  categorisation_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorisation_prompt?: InputMaybe<Scalars['String']>;
  categorisation_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  categorisation_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorisation_prompt_ne?: InputMaybe<Scalars['String']>;
  categorisation_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorisation_stem?: InputMaybe<Scalars['String']>;
  categorisation_stem_exists?: InputMaybe<Scalars['Boolean']>;
  categorisation_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorisation_stem_ne?: InputMaybe<Scalars['String']>;
  categorisation_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksConcept = {
  __typename?: 'ItemModularNestedModularBlocksConcept';
  concept?: Maybe<ItemModularNestedModularBlocksConceptBlock>;
};

export type ItemModularNestedModularBlocksConceptBlock = {
  __typename?: 'ItemModularNestedModularBlocksConceptBlock';
  concept_instruction?: Maybe<Scalars['String']>;
  concept_prompt?: Maybe<Scalars['String']>;
  concept_stem?: Maybe<Scalars['String']>;
  concept_words?: Maybe<Array<Maybe<ItemModularNestedModularBlocksConceptBlockConceptWords>>>;
};

export type ItemModularNestedModularBlocksConceptBlockConceptWords = ItemModularNestedModularBlocksConceptBlockConceptWordsConceptWordChoice;

export type ItemModularNestedModularBlocksConceptBlockConceptWordsConceptWordChoice = {
  __typename?: 'ItemModularNestedModularBlocksConceptBlockConceptWordsConceptWordChoice';
  concept_word_choice?: Maybe<ItemModularNestedModularBlocksConceptBlockConceptWordsConceptWordChoiceBlock>;
};

export type ItemModularNestedModularBlocksConceptBlockConceptWordsConceptWordChoiceBlock = {
  __typename?: 'ItemModularNestedModularBlocksConceptBlockConceptWordsConceptWordChoiceBlock';
  concept_word_choice_antonym?: Maybe<Scalars['String']>;
  concept_word_choice_text?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksConceptBlockConceptWordsConceptWordChoiceBlockWhere = {
  concept_word_choice_antonym?: InputMaybe<Scalars['String']>;
  concept_word_choice_antonym_exists?: InputMaybe<Scalars['Boolean']>;
  concept_word_choice_antonym_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_word_choice_antonym_ne?: InputMaybe<Scalars['String']>;
  concept_word_choice_antonym_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_word_choice_text?: InputMaybe<Scalars['String']>;
  concept_word_choice_text_exists?: InputMaybe<Scalars['Boolean']>;
  concept_word_choice_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_word_choice_text_ne?: InputMaybe<Scalars['String']>;
  concept_word_choice_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksConceptBlockConceptWordsWhere = {
  concept_word_choice?: InputMaybe<ItemModularNestedModularBlocksConceptBlockConceptWordsConceptWordChoiceBlockWhere>;
  concept_word_choice_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksConceptBlockWhere = {
  concept_instruction?: InputMaybe<Scalars['String']>;
  concept_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  concept_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_instruction_ne?: InputMaybe<Scalars['String']>;
  concept_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_prompt?: InputMaybe<Scalars['String']>;
  concept_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  concept_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_prompt_ne?: InputMaybe<Scalars['String']>;
  concept_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_stem?: InputMaybe<Scalars['String']>;
  concept_stem_exists?: InputMaybe<Scalars['Boolean']>;
  concept_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_stem_ne?: InputMaybe<Scalars['String']>;
  concept_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concept_words?: InputMaybe<ItemModularNestedModularBlocksConceptBlockConceptWordsWhere>;
  concept_words_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksMatching = {
  __typename?: 'ItemModularNestedModularBlocksMatching';
  matching?: Maybe<ItemModularNestedModularBlocksMatchingBlock>;
};

export type ItemModularNestedModularBlocksMatchingBlock = {
  __typename?: 'ItemModularNestedModularBlocksMatchingBlock';
  matching_instruction?: Maybe<Scalars['String']>;
  matching_pairs?: Maybe<Array<Maybe<ItemModularNestedModularBlocksMatchingBlockMatchingPairs>>>;
  matching_prompt?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksMatchingBlockMatchingPairs = ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairChoice | ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairDetractors;

export type ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairChoice = {
  __typename?: 'ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairChoice';
  matching_pair_choice?: Maybe<ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairChoiceBlock>;
};

export type ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairChoiceBlock = {
  __typename?: 'ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairChoiceBlock';
  matching_pair_choice_a?: Maybe<Scalars['String']>;
  matching_pair_choice_b?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairChoiceBlockWhere = {
  matching_pair_choice_a?: InputMaybe<Scalars['String']>;
  matching_pair_choice_a_exists?: InputMaybe<Scalars['Boolean']>;
  matching_pair_choice_a_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_pair_choice_a_ne?: InputMaybe<Scalars['String']>;
  matching_pair_choice_a_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_pair_choice_b?: InputMaybe<Scalars['String']>;
  matching_pair_choice_b_exists?: InputMaybe<Scalars['Boolean']>;
  matching_pair_choice_b_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_pair_choice_b_ne?: InputMaybe<Scalars['String']>;
  matching_pair_choice_b_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairDetractors = {
  __typename?: 'ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairDetractors';
  matching_pair_detractors?: Maybe<ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairDetractorsBlock>;
};

export type ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairDetractorsBlock = {
  __typename?: 'ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairDetractorsBlock';
  matching_pair_detractor_text?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairDetractorsBlockWhere = {
  matching_pair_detractor_text?: InputMaybe<Scalars['String']>;
  matching_pair_detractor_text_exists?: InputMaybe<Scalars['Boolean']>;
  matching_pair_detractor_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_pair_detractor_text_ne?: InputMaybe<Scalars['String']>;
  matching_pair_detractor_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksMatchingBlockMatchingPairsWhere = {
  matching_pair_choice?: InputMaybe<ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairChoiceBlockWhere>;
  matching_pair_choice_exists?: InputMaybe<Scalars['Boolean']>;
  matching_pair_detractors?: InputMaybe<ItemModularNestedModularBlocksMatchingBlockMatchingPairsMatchingPairDetractorsBlockWhere>;
  matching_pair_detractors_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksMatchingBlockWhere = {
  matching_instruction?: InputMaybe<Scalars['String']>;
  matching_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  matching_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_instruction_ne?: InputMaybe<Scalars['String']>;
  matching_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_pairs?: InputMaybe<ItemModularNestedModularBlocksMatchingBlockMatchingPairsWhere>;
  matching_pairs_exists?: InputMaybe<Scalars['Boolean']>;
  matching_prompt?: InputMaybe<Scalars['String']>;
  matching_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  matching_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching_prompt_ne?: InputMaybe<Scalars['String']>;
  matching_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksMcQuestion = {
  __typename?: 'ItemModularNestedModularBlocksMcQuestion';
  mc_question?: Maybe<ItemModularNestedModularBlocksMcQuestionBlock>;
};

export type ItemModularNestedModularBlocksMcQuestionBlock = {
  __typename?: 'ItemModularNestedModularBlocksMcQuestionBlock';
  mc_answers?: Maybe<Array<Maybe<ItemModularNestedModularBlocksMcQuestionBlockMcAnswers>>>;
  mc_detractors?: Maybe<Array<Maybe<ItemModularNestedModularBlocksMcQuestionBlockMcDetractors>>>;
  mc_instruction?: Maybe<Scalars['String']>;
  mc_prompt?: Maybe<Scalars['String']>;
  mc_stem?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockMcAnswers = ItemModularNestedModularBlocksMcQuestionBlockMcAnswersMcAnswerChoice;

export type ItemModularNestedModularBlocksMcQuestionBlockMcAnswersMcAnswerChoice = {
  __typename?: 'ItemModularNestedModularBlocksMcQuestionBlockMcAnswersMcAnswerChoice';
  mc_answer_choice?: Maybe<ItemModularNestedModularBlocksMcQuestionBlockMcAnswersMcAnswerChoiceBlock>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockMcAnswersMcAnswerChoiceBlock = {
  __typename?: 'ItemModularNestedModularBlocksMcQuestionBlockMcAnswersMcAnswerChoiceBlock';
  mc_answer_choice_points?: Maybe<Scalars['Float']>;
  mc_answer_choice_text?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockMcAnswersMcAnswerChoiceBlockWhere = {
  mc_answer_choice_points?: InputMaybe<Scalars['Float']>;
  mc_answer_choice_points_exists?: InputMaybe<Scalars['Boolean']>;
  mc_answer_choice_points_gt?: InputMaybe<Scalars['Float']>;
  mc_answer_choice_points_gte?: InputMaybe<Scalars['Float']>;
  mc_answer_choice_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  mc_answer_choice_points_lt?: InputMaybe<Scalars['Float']>;
  mc_answer_choice_points_lte?: InputMaybe<Scalars['Float']>;
  mc_answer_choice_points_ne?: InputMaybe<Scalars['Float']>;
  mc_answer_choice_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  mc_answer_choice_text?: InputMaybe<Scalars['String']>;
  mc_answer_choice_text_exists?: InputMaybe<Scalars['Boolean']>;
  mc_answer_choice_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_answer_choice_text_ne?: InputMaybe<Scalars['String']>;
  mc_answer_choice_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockMcAnswersWhere = {
  mc_answer_choice?: InputMaybe<ItemModularNestedModularBlocksMcQuestionBlockMcAnswersMcAnswerChoiceBlockWhere>;
  mc_answer_choice_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockMcDetractors = ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsMcDetractorChoice;

export type ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsMcDetractorChoice = {
  __typename?: 'ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsMcDetractorChoice';
  mc_detractor_choice?: Maybe<ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsMcDetractorChoiceBlock>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsMcDetractorChoiceBlock = {
  __typename?: 'ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsMcDetractorChoiceBlock';
  mc_detractor_choice_points?: Maybe<Scalars['Float']>;
  mc_detractor_choice_text?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsMcDetractorChoiceBlockWhere = {
  mc_detractor_choice_points?: InputMaybe<Scalars['Float']>;
  mc_detractor_choice_points_exists?: InputMaybe<Scalars['Boolean']>;
  mc_detractor_choice_points_gt?: InputMaybe<Scalars['Float']>;
  mc_detractor_choice_points_gte?: InputMaybe<Scalars['Float']>;
  mc_detractor_choice_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  mc_detractor_choice_points_lt?: InputMaybe<Scalars['Float']>;
  mc_detractor_choice_points_lte?: InputMaybe<Scalars['Float']>;
  mc_detractor_choice_points_ne?: InputMaybe<Scalars['Float']>;
  mc_detractor_choice_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  mc_detractor_choice_text?: InputMaybe<Scalars['String']>;
  mc_detractor_choice_text_exists?: InputMaybe<Scalars['Boolean']>;
  mc_detractor_choice_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_detractor_choice_text_ne?: InputMaybe<Scalars['String']>;
  mc_detractor_choice_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsWhere = {
  mc_detractor_choice?: InputMaybe<ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsMcDetractorChoiceBlockWhere>;
  mc_detractor_choice_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksMcQuestionBlockWhere = {
  mc_answers?: InputMaybe<ItemModularNestedModularBlocksMcQuestionBlockMcAnswersWhere>;
  mc_answers_exists?: InputMaybe<Scalars['Boolean']>;
  mc_detractors?: InputMaybe<ItemModularNestedModularBlocksMcQuestionBlockMcDetractorsWhere>;
  mc_detractors_exists?: InputMaybe<Scalars['Boolean']>;
  mc_instruction?: InputMaybe<Scalars['String']>;
  mc_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  mc_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_instruction_ne?: InputMaybe<Scalars['String']>;
  mc_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_prompt?: InputMaybe<Scalars['String']>;
  mc_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  mc_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_prompt_ne?: InputMaybe<Scalars['String']>;
  mc_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_stem?: InputMaybe<Scalars['String']>;
  mc_stem_exists?: InputMaybe<Scalars['Boolean']>;
  mc_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_stem_ne?: InputMaybe<Scalars['String']>;
  mc_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksOrdering = {
  __typename?: 'ItemModularNestedModularBlocksOrdering';
  ordering?: Maybe<ItemModularNestedModularBlocksOrderingBlock>;
};

export type ItemModularNestedModularBlocksOrderingBlock = {
  __typename?: 'ItemModularNestedModularBlocksOrderingBlock';
  ordering_instruction?: Maybe<Scalars['String']>;
  ordering_options?: Maybe<Array<Maybe<ItemModularNestedModularBlocksOrderingBlockOrderingOptions>>>;
  ordering_prompt?: Maybe<Scalars['String']>;
  ordering_stem?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksOrderingBlockOrderingOptions = ItemModularNestedModularBlocksOrderingBlockOrderingOptionsOrderingOption;

export type ItemModularNestedModularBlocksOrderingBlockOrderingOptionsOrderingOption = {
  __typename?: 'ItemModularNestedModularBlocksOrderingBlockOrderingOptionsOrderingOption';
  ordering_option?: Maybe<ItemModularNestedModularBlocksOrderingBlockOrderingOptionsOrderingOptionBlock>;
};

export type ItemModularNestedModularBlocksOrderingBlockOrderingOptionsOrderingOptionBlock = {
  __typename?: 'ItemModularNestedModularBlocksOrderingBlockOrderingOptionsOrderingOptionBlock';
  ordering_option_order?: Maybe<Scalars['Float']>;
  ordering_option_text?: Maybe<Scalars['String']>;
};

export type ItemModularNestedModularBlocksOrderingBlockOrderingOptionsOrderingOptionBlockWhere = {
  ordering_option_order?: InputMaybe<Scalars['Float']>;
  ordering_option_order_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_option_order_gt?: InputMaybe<Scalars['Float']>;
  ordering_option_order_gte?: InputMaybe<Scalars['Float']>;
  ordering_option_order_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  ordering_option_order_lt?: InputMaybe<Scalars['Float']>;
  ordering_option_order_lte?: InputMaybe<Scalars['Float']>;
  ordering_option_order_ne?: InputMaybe<Scalars['Float']>;
  ordering_option_order_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  ordering_option_text?: InputMaybe<Scalars['String']>;
  ordering_option_text_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_option_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_option_text_ne?: InputMaybe<Scalars['String']>;
  ordering_option_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksOrderingBlockOrderingOptionsWhere = {
  ordering_option?: InputMaybe<ItemModularNestedModularBlocksOrderingBlockOrderingOptionsOrderingOptionBlockWhere>;
  ordering_option_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksOrderingBlockWhere = {
  ordering_instruction?: InputMaybe<Scalars['String']>;
  ordering_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_instruction_ne?: InputMaybe<Scalars['String']>;
  ordering_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_options?: InputMaybe<ItemModularNestedModularBlocksOrderingBlockOrderingOptionsWhere>;
  ordering_options_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_prompt?: InputMaybe<Scalars['String']>;
  ordering_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_prompt_ne?: InputMaybe<Scalars['String']>;
  ordering_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_stem?: InputMaybe<Scalars['String']>;
  ordering_stem_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_stem_ne?: InputMaybe<Scalars['String']>;
  ordering_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemModularNestedModularBlocksTfQuestion = {
  __typename?: 'ItemModularNestedModularBlocksTfQuestion';
  tf_question?: Maybe<ItemModularNestedModularBlocksTfQuestionBlock>;
};

export type ItemModularNestedModularBlocksTfQuestionBlock = {
  __typename?: 'ItemModularNestedModularBlocksTfQuestionBlock';
  tf_instruction?: Maybe<Scalars['String']>;
  tf_prompt?: Maybe<Scalars['String']>;
  tf_stems?: Maybe<Array<Maybe<ItemModularNestedModularBlocksTfQuestionBlockTfStems>>>;
};

export type ItemModularNestedModularBlocksTfQuestionBlockTfStems = ItemModularNestedModularBlocksTfQuestionBlockTfStemsTfStemChoice;

export type ItemModularNestedModularBlocksTfQuestionBlockTfStemsTfStemChoice = {
  __typename?: 'ItemModularNestedModularBlocksTfQuestionBlockTfStemsTfStemChoice';
  tf_stem_choice?: Maybe<ItemModularNestedModularBlocksTfQuestionBlockTfStemsTfStemChoiceBlock>;
};

export type ItemModularNestedModularBlocksTfQuestionBlockTfStemsTfStemChoiceBlock = {
  __typename?: 'ItemModularNestedModularBlocksTfQuestionBlockTfStemsTfStemChoiceBlock';
  tf_stem_choice_text?: Maybe<Scalars['String']>;
  tf_stem_choice_true?: Maybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksTfQuestionBlockTfStemsTfStemChoiceBlockWhere = {
  tf_stem_choice_text?: InputMaybe<Scalars['String']>;
  tf_stem_choice_text_exists?: InputMaybe<Scalars['Boolean']>;
  tf_stem_choice_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_stem_choice_text_ne?: InputMaybe<Scalars['String']>;
  tf_stem_choice_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_stem_choice_true?: InputMaybe<Scalars['Boolean']>;
  tf_stem_choice_true_exists?: InputMaybe<Scalars['Boolean']>;
  tf_stem_choice_true_ne?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksTfQuestionBlockTfStemsWhere = {
  tf_stem_choice?: InputMaybe<ItemModularNestedModularBlocksTfQuestionBlockTfStemsTfStemChoiceBlockWhere>;
  tf_stem_choice_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksTfQuestionBlockWhere = {
  tf_instruction?: InputMaybe<Scalars['String']>;
  tf_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  tf_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_instruction_ne?: InputMaybe<Scalars['String']>;
  tf_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_prompt?: InputMaybe<Scalars['String']>;
  tf_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  tf_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_prompt_ne?: InputMaybe<Scalars['String']>;
  tf_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_stems?: InputMaybe<ItemModularNestedModularBlocksTfQuestionBlockTfStemsWhere>;
  tf_stems_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemModularNestedModularBlocksWhere = {
  categorisation?: InputMaybe<ItemModularNestedModularBlocksCategorisationBlockWhere>;
  categorisation_exists?: InputMaybe<Scalars['Boolean']>;
  concept?: InputMaybe<ItemModularNestedModularBlocksConceptBlockWhere>;
  concept_exists?: InputMaybe<Scalars['Boolean']>;
  matching?: InputMaybe<ItemModularNestedModularBlocksMatchingBlockWhere>;
  matching_exists?: InputMaybe<Scalars['Boolean']>;
  mc_question?: InputMaybe<ItemModularNestedModularBlocksMcQuestionBlockWhere>;
  mc_question_exists?: InputMaybe<Scalars['Boolean']>;
  ordering?: InputMaybe<ItemModularNestedModularBlocksOrderingBlockWhere>;
  ordering_exists?: InputMaybe<Scalars['Boolean']>;
  tf_question?: InputMaybe<ItemModularNestedModularBlocksTfQuestionBlockWhere>;
  tf_question_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum ItemModularNestedOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ItemModularNestedWhere = {
  AND?: InputMaybe<Array<InputMaybe<ItemModularNestedWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemModularNestedWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modular_blocks?: InputMaybe<ItemModularNestedModularBlocksWhere>;
  modular_blocks_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomy_count?: InputMaybe<Scalars['Int']>;
  taxonomy_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type ItemMultipleChoice = {
  __typename?: 'ItemMultipleChoice';
  mc_instruction?: Maybe<Scalars['String']>;
  mc_prompt?: Maybe<Scalars['String']>;
  mc_stem?: Maybe<Scalars['String']>;
};

export type ItemMultipleChoiceChoices = ItemMultipleChoiceChoicesMcChoiceAnswer | ItemMultipleChoiceChoicesMcChoiceDetractor;

export type ItemMultipleChoiceChoicesMcChoiceAnswer = {
  __typename?: 'ItemMultipleChoiceChoicesMcChoiceAnswer';
  mc_choice_answer?: Maybe<ItemMultipleChoiceChoicesMcChoiceAnswerBlock>;
};

export type ItemMultipleChoiceChoicesMcChoiceAnswerBlock = {
  __typename?: 'ItemMultipleChoiceChoicesMcChoiceAnswerBlock';
  mc_choice_answer_points?: Maybe<Scalars['Float']>;
  mc_choice_answer_text?: Maybe<Scalars['String']>;
};

export type ItemMultipleChoiceChoicesMcChoiceAnswerBlockWhere = {
  mc_choice_answer_points?: InputMaybe<Scalars['Float']>;
  mc_choice_answer_points_exists?: InputMaybe<Scalars['Boolean']>;
  mc_choice_answer_points_gt?: InputMaybe<Scalars['Float']>;
  mc_choice_answer_points_gte?: InputMaybe<Scalars['Float']>;
  mc_choice_answer_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  mc_choice_answer_points_lt?: InputMaybe<Scalars['Float']>;
  mc_choice_answer_points_lte?: InputMaybe<Scalars['Float']>;
  mc_choice_answer_points_ne?: InputMaybe<Scalars['Float']>;
  mc_choice_answer_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  mc_choice_answer_text?: InputMaybe<Scalars['String']>;
  mc_choice_answer_text_exists?: InputMaybe<Scalars['Boolean']>;
  mc_choice_answer_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_choice_answer_text_ne?: InputMaybe<Scalars['String']>;
  mc_choice_answer_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemMultipleChoiceChoicesMcChoiceDetractor = {
  __typename?: 'ItemMultipleChoiceChoicesMcChoiceDetractor';
  mc_choice_detractor?: Maybe<ItemMultipleChoiceChoicesMcChoiceDetractorBlock>;
};

export type ItemMultipleChoiceChoicesMcChoiceDetractorBlock = {
  __typename?: 'ItemMultipleChoiceChoicesMcChoiceDetractorBlock';
  mc_choice_detractor_points?: Maybe<Scalars['Float']>;
  mc_choice_detractor_text?: Maybe<Scalars['String']>;
};

export type ItemMultipleChoiceChoicesMcChoiceDetractorBlockWhere = {
  mc_choice_detractor_points?: InputMaybe<Scalars['Float']>;
  mc_choice_detractor_points_exists?: InputMaybe<Scalars['Boolean']>;
  mc_choice_detractor_points_gt?: InputMaybe<Scalars['Float']>;
  mc_choice_detractor_points_gte?: InputMaybe<Scalars['Float']>;
  mc_choice_detractor_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  mc_choice_detractor_points_lt?: InputMaybe<Scalars['Float']>;
  mc_choice_detractor_points_lte?: InputMaybe<Scalars['Float']>;
  mc_choice_detractor_points_ne?: InputMaybe<Scalars['Float']>;
  mc_choice_detractor_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  mc_choice_detractor_text?: InputMaybe<Scalars['String']>;
  mc_choice_detractor_text_exists?: InputMaybe<Scalars['Boolean']>;
  mc_choice_detractor_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_choice_detractor_text_ne?: InputMaybe<Scalars['String']>;
  mc_choice_detractor_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemMultipleChoiceChoicesWhere = {
  mc_choice_answer?: InputMaybe<ItemMultipleChoiceChoicesMcChoiceAnswerBlockWhere>;
  mc_choice_answer_exists?: InputMaybe<Scalars['Boolean']>;
  mc_choice_detractor?: InputMaybe<ItemMultipleChoiceChoicesMcChoiceDetractorBlockWhere>;
  mc_choice_detractor_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemMultipleChoiceWhere = {
  mc_instruction?: InputMaybe<Scalars['String']>;
  mc_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  mc_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_instruction_ne?: InputMaybe<Scalars['String']>;
  mc_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_prompt?: InputMaybe<Scalars['String']>;
  mc_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  mc_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_prompt_ne?: InputMaybe<Scalars['String']>;
  mc_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_stem?: InputMaybe<Scalars['String']>;
  mc_stem_exists?: InputMaybe<Scalars['Boolean']>;
  mc_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mc_stem_ne?: InputMaybe<Scalars['String']>;
  mc_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ItemOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ItemOrdering = {
  __typename?: 'ItemOrdering';
  ordering_instruction?: Maybe<Scalars['String']>;
  ordering_prompt?: Maybe<Scalars['String']>;
  ordering_stem?: Maybe<Scalars['String']>;
};

export type ItemOrderingEntries = ItemOrderingEntriesOrderingEntry;

export type ItemOrderingEntriesOrderingEntry = {
  __typename?: 'ItemOrderingEntriesOrderingEntry';
  ordering_entry?: Maybe<ItemOrderingEntriesOrderingEntryBlock>;
};

export type ItemOrderingEntriesOrderingEntryBlock = {
  __typename?: 'ItemOrderingEntriesOrderingEntryBlock';
  ordering_entry_order?: Maybe<Scalars['Float']>;
  ordering_entry_text?: Maybe<Scalars['String']>;
};

export type ItemOrderingEntriesOrderingEntryBlockWhere = {
  ordering_entry_order?: InputMaybe<Scalars['Float']>;
  ordering_entry_order_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_entry_order_gt?: InputMaybe<Scalars['Float']>;
  ordering_entry_order_gte?: InputMaybe<Scalars['Float']>;
  ordering_entry_order_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  ordering_entry_order_lt?: InputMaybe<Scalars['Float']>;
  ordering_entry_order_lte?: InputMaybe<Scalars['Float']>;
  ordering_entry_order_ne?: InputMaybe<Scalars['Float']>;
  ordering_entry_order_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  ordering_entry_text?: InputMaybe<Scalars['String']>;
  ordering_entry_text_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_entry_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_entry_text_ne?: InputMaybe<Scalars['String']>;
  ordering_entry_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemOrderingEntriesWhere = {
  ordering_entry?: InputMaybe<ItemOrderingEntriesOrderingEntryBlockWhere>;
  ordering_entry_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ItemOrderingWhere = {
  ordering_instruction?: InputMaybe<Scalars['String']>;
  ordering_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_instruction_ne?: InputMaybe<Scalars['String']>;
  ordering_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_prompt?: InputMaybe<Scalars['String']>;
  ordering_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_prompt_ne?: InputMaybe<Scalars['String']>;
  ordering_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_stem?: InputMaybe<Scalars['String']>;
  ordering_stem_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ordering_stem_ne?: InputMaybe<Scalars['String']>;
  ordering_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemPassiveLearning = {
  __typename?: 'ItemPassiveLearning';
  passive_content_block?: Maybe<Scalars['String']>;
  video_explainer_closed_caption_fileConnection?: Maybe<SysAssetConnection>;
  video_explainer_fileConnection?: Maybe<SysAssetConnection>;
  video_explainer_prompt?: Maybe<Scalars['String']>;
  video_explainer_text_caption?: Maybe<Scalars['String']>;
};

export type ItemPassiveLearningWhere = {
  passive_content_block?: InputMaybe<Scalars['String']>;
  passive_content_block_exists?: InputMaybe<Scalars['Boolean']>;
  passive_content_block_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passive_content_block_ne?: InputMaybe<Scalars['String']>;
  passive_content_block_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_explainer_closed_caption_file?: InputMaybe<SysAssetWhere>;
  video_explainer_closed_caption_file_exists?: InputMaybe<Scalars['Boolean']>;
  video_explainer_file?: InputMaybe<SysAssetWhere>;
  video_explainer_file_exists?: InputMaybe<Scalars['Boolean']>;
  video_explainer_prompt?: InputMaybe<Scalars['String']>;
  video_explainer_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  video_explainer_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_explainer_prompt_ne?: InputMaybe<Scalars['String']>;
  video_explainer_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_explainer_text_caption?: InputMaybe<Scalars['String']>;
  video_explainer_text_caption_exists?: InputMaybe<Scalars['Boolean']>;
  video_explainer_text_caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_explainer_text_caption_ne?: InputMaybe<Scalars['String']>;
  video_explainer_text_caption_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemTrueFalseStatement = {
  __typename?: 'ItemTrueFalseStatement';
  tf_instruction?: Maybe<Scalars['String']>;
  tf_is_true?: Maybe<Scalars['Boolean']>;
  tf_points?: Maybe<Scalars['Float']>;
  tf_prompt?: Maybe<Scalars['String']>;
  tf_stem?: Maybe<Scalars['String']>;
};

export type ItemTrueFalseStatementWhere = {
  tf_instruction?: InputMaybe<Scalars['String']>;
  tf_instruction_exists?: InputMaybe<Scalars['Boolean']>;
  tf_instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_instruction_ne?: InputMaybe<Scalars['String']>;
  tf_instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_is_true?: InputMaybe<Scalars['Boolean']>;
  tf_is_true_exists?: InputMaybe<Scalars['Boolean']>;
  tf_is_true_ne?: InputMaybe<Scalars['Boolean']>;
  tf_points?: InputMaybe<Scalars['Float']>;
  tf_points_exists?: InputMaybe<Scalars['Boolean']>;
  tf_points_gt?: InputMaybe<Scalars['Float']>;
  tf_points_gte?: InputMaybe<Scalars['Float']>;
  tf_points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  tf_points_lt?: InputMaybe<Scalars['Float']>;
  tf_points_lte?: InputMaybe<Scalars['Float']>;
  tf_points_ne?: InputMaybe<Scalars['Float']>;
  tf_points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  tf_prompt?: InputMaybe<Scalars['String']>;
  tf_prompt_exists?: InputMaybe<Scalars['Boolean']>;
  tf_prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_prompt_ne?: InputMaybe<Scalars['String']>;
  tf_prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_stem?: InputMaybe<Scalars['String']>;
  tf_stem_exists?: InputMaybe<Scalars['Boolean']>;
  tf_stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tf_stem_ne?: InputMaybe<Scalars['String']>;
  tf_stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ItemWhere = {
  AND?: InputMaybe<Array<InputMaybe<ItemWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemWhere>>>;
  categorization?: InputMaybe<ItemCategorizationWhere>;
  categorization_exists?: InputMaybe<Scalars['Boolean']>;
  concept?: InputMaybe<ItemConceptWhere>;
  concept_exists?: InputMaybe<Scalars['Boolean']>;
  concept_words?: InputMaybe<ItemConceptWordsWhere>;
  concept_words_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matching?: InputMaybe<ItemMatchingWhere>;
  matching_exists?: InputMaybe<Scalars['Boolean']>;
  matching_pairs?: InputMaybe<ItemMatchingPairsWhere>;
  matching_pairs_exists?: InputMaybe<Scalars['Boolean']>;
  multiple_choice?: InputMaybe<ItemMultipleChoiceWhere>;
  multiple_choice_choices?: InputMaybe<ItemMultipleChoiceChoicesWhere>;
  multiple_choice_choices_exists?: InputMaybe<Scalars['Boolean']>;
  multiple_choice_exists?: InputMaybe<Scalars['Boolean']>;
  ordering?: InputMaybe<ItemOrderingWhere>;
  ordering_entries?: InputMaybe<ItemOrderingEntriesWhere>;
  ordering_entries_exists?: InputMaybe<Scalars['Boolean']>;
  ordering_exists?: InputMaybe<Scalars['Boolean']>;
  passive_learning?: InputMaybe<ItemPassiveLearningWhere>;
  passive_learning_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomy_count?: InputMaybe<Scalars['Int']>;
  taxonomy_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  true_false_statement?: InputMaybe<ItemTrueFalseStatementWhere>;
  true_false_statement_exists?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Query = {
  __typename?: 'Query';
  all_assets?: Maybe<AllSysAsset>;
  all_item?: Maybe<AllItem>;
  all_item_modular_nested?: Maybe<AllItemModularNested>;
  all_questionitem?: Maybe<AllQuestionitem>;
  all_taxon_bottom_up?: Maybe<AllTaxonBottomUp>;
  assets?: Maybe<SysAsset>;
  item?: Maybe<Item>;
  item_modular_nested?: Maybe<ItemModularNested>;
  questionitem?: Maybe<Questionitem>;
  taxon_bottom_up?: Maybe<TaxonBottomUp>;
};


export type QueryAll_AssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<SysAssetOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysAssetWhere>;
};


export type QueryAll_ItemArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ItemOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ItemWhere>;
};


export type QueryAll_Item_Modular_NestedArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<ItemModularNestedOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ItemModularNestedWhere>;
};


export type QueryAll_QuestionitemArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<QuestionitemOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionitemWhere>;
};


export type QueryAll_Taxon_Bottom_UpArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<TaxonBottomUpOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaxonBottomUpWhere>;
};


export type QueryAssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};


export type QueryItemArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryItem_Modular_NestedArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryQuestionitemArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryTaxon_Bottom_UpArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};

export type Questionitem = {
  __typename?: 'Questionitem';
  client_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  system?: Maybe<EntrySystemField>;
  taxonomyConnection?: Maybe<QuestionitemTaxonomyConnection>;
  title?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<QuestionitemVariants>>>;
};

export enum QuestionitemOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type QuestionitemTaxonomyConnection = {
  __typename?: 'QuestionitemTaxonomyConnection';
  edges?: Maybe<Array<Maybe<QuestionitemTaxonomyEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type QuestionitemTaxonomyEdge = {
  __typename?: 'QuestionitemTaxonomyEdge';
  node?: Maybe<QuestionitemTaxonomyNode>;
};

export type QuestionitemTaxonomyNode = TaxonBottomUp;

export type QuestionitemTaxonomyWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  taxon_bottom_up?: InputMaybe<TaxonBottomUpWhere>;
};

export type QuestionitemVariants = QuestionitemVariantsMcquestion | QuestionitemVariantsTfquestion;

export type QuestionitemVariantsMcquestion = {
  __typename?: 'QuestionitemVariantsMcquestion';
  mcquestion?: Maybe<QuestionitemVariantsMcquestionBlock>;
};

export type QuestionitemVariantsMcquestionBlock = {
  __typename?: 'QuestionitemVariantsMcquestionBlock';
  choices?: Maybe<Array<Maybe<QuestionitemVariantsMcquestionBlockChoices>>>;
  custom?: Maybe<Scalars['JSON']>;
  instruction?: Maybe<Scalars['String']>;
  prompt?: Maybe<Scalars['String']>;
  stem?: Maybe<Scalars['String']>;
  video_caption_fileConnection?: Maybe<SysAssetConnection>;
  video_fileConnection?: Maybe<SysAssetConnection>;
};

export type QuestionitemVariantsMcquestionBlockChoices = QuestionitemVariantsMcquestionBlockChoicesChoice;

export type QuestionitemVariantsMcquestionBlockChoicesChoice = {
  __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoice';
  choice?: Maybe<QuestionitemVariantsMcquestionBlockChoicesChoiceBlock>;
};

export type QuestionitemVariantsMcquestionBlockChoicesChoiceBlock = {
  __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock';
  body?: Maybe<Scalars['String']>;
  correct?: Maybe<Scalars['Boolean']>;
  feedback?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Float']>;
};

export type QuestionitemVariantsMcquestionBlockChoicesChoiceBlockWhere = {
  body?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_ne?: InputMaybe<Scalars['String']>;
  body_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  correct?: InputMaybe<Scalars['Boolean']>;
  correct_exists?: InputMaybe<Scalars['Boolean']>;
  correct_ne?: InputMaybe<Scalars['Boolean']>;
  feedback?: InputMaybe<Scalars['String']>;
  feedback_exists?: InputMaybe<Scalars['Boolean']>;
  feedback_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feedback_ne?: InputMaybe<Scalars['String']>;
  feedback_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  points?: InputMaybe<Scalars['Float']>;
  points_exists?: InputMaybe<Scalars['Boolean']>;
  points_gt?: InputMaybe<Scalars['Float']>;
  points_gte?: InputMaybe<Scalars['Float']>;
  points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  points_lt?: InputMaybe<Scalars['Float']>;
  points_lte?: InputMaybe<Scalars['Float']>;
  points_ne?: InputMaybe<Scalars['Float']>;
  points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type QuestionitemVariantsMcquestionBlockChoicesWhere = {
  choice?: InputMaybe<QuestionitemVariantsMcquestionBlockChoicesChoiceBlockWhere>;
  choice_exists?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionitemVariantsMcquestionBlockWhere = {
  choices?: InputMaybe<QuestionitemVariantsMcquestionBlockChoicesWhere>;
  choices_exists?: InputMaybe<Scalars['Boolean']>;
  custom?: InputMaybe<Scalars['JSON']>;
  custom_exists?: InputMaybe<Scalars['Boolean']>;
  instruction?: InputMaybe<Scalars['String']>;
  instruction_exists?: InputMaybe<Scalars['Boolean']>;
  instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instruction_ne?: InputMaybe<Scalars['String']>;
  instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prompt?: InputMaybe<Scalars['String']>;
  prompt_exists?: InputMaybe<Scalars['Boolean']>;
  prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prompt_ne?: InputMaybe<Scalars['String']>;
  prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stem?: InputMaybe<Scalars['String']>;
  stem_exists?: InputMaybe<Scalars['Boolean']>;
  stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stem_ne?: InputMaybe<Scalars['String']>;
  stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_caption_file?: InputMaybe<SysAssetWhere>;
  video_caption_file_exists?: InputMaybe<Scalars['Boolean']>;
  video_file?: InputMaybe<SysAssetWhere>;
  video_file_exists?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionitemVariantsTfquestion = {
  __typename?: 'QuestionitemVariantsTfquestion';
  tfquestion?: Maybe<QuestionitemVariantsTfquestionBlock>;
};

export type QuestionitemVariantsTfquestionBlock = {
  __typename?: 'QuestionitemVariantsTfquestionBlock';
  correct?: Maybe<Scalars['Boolean']>;
  feedback?: Maybe<Scalars['String']>;
  incorrect_feedback?: Maybe<Scalars['String']>;
  instruction?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Float']>;
  prompt?: Maybe<Scalars['String']>;
  stem?: Maybe<Scalars['String']>;
  video_caption_fileConnection?: Maybe<SysAssetConnection>;
  video_fileConnection?: Maybe<SysAssetConnection>;
};

export type QuestionitemVariantsTfquestionBlockWhere = {
  correct?: InputMaybe<Scalars['Boolean']>;
  correct_exists?: InputMaybe<Scalars['Boolean']>;
  correct_ne?: InputMaybe<Scalars['Boolean']>;
  feedback?: InputMaybe<Scalars['String']>;
  feedback_exists?: InputMaybe<Scalars['Boolean']>;
  feedback_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feedback_ne?: InputMaybe<Scalars['String']>;
  feedback_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  incorrect_feedback?: InputMaybe<Scalars['String']>;
  incorrect_feedback_exists?: InputMaybe<Scalars['Boolean']>;
  incorrect_feedback_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  incorrect_feedback_ne?: InputMaybe<Scalars['String']>;
  incorrect_feedback_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instruction?: InputMaybe<Scalars['String']>;
  instruction_exists?: InputMaybe<Scalars['Boolean']>;
  instruction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instruction_ne?: InputMaybe<Scalars['String']>;
  instruction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  points?: InputMaybe<Scalars['Float']>;
  points_exists?: InputMaybe<Scalars['Boolean']>;
  points_gt?: InputMaybe<Scalars['Float']>;
  points_gte?: InputMaybe<Scalars['Float']>;
  points_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  points_lt?: InputMaybe<Scalars['Float']>;
  points_lte?: InputMaybe<Scalars['Float']>;
  points_ne?: InputMaybe<Scalars['Float']>;
  points_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  prompt?: InputMaybe<Scalars['String']>;
  prompt_exists?: InputMaybe<Scalars['Boolean']>;
  prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prompt_ne?: InputMaybe<Scalars['String']>;
  prompt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stem?: InputMaybe<Scalars['String']>;
  stem_exists?: InputMaybe<Scalars['Boolean']>;
  stem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stem_ne?: InputMaybe<Scalars['String']>;
  stem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_caption_file?: InputMaybe<SysAssetWhere>;
  video_caption_file_exists?: InputMaybe<Scalars['Boolean']>;
  video_file?: InputMaybe<SysAssetWhere>;
  video_file_exists?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionitemVariantsWhere = {
  mcquestion?: InputMaybe<QuestionitemVariantsMcquestionBlockWhere>;
  mcquestion_exists?: InputMaybe<Scalars['Boolean']>;
  tfquestion?: InputMaybe<QuestionitemVariantsTfquestionBlockWhere>;
  tfquestion_exists?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionitemWhere = {
  AND?: InputMaybe<Array<InputMaybe<QuestionitemWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<QuestionitemWhere>>>;
  client_list?: InputMaybe<Scalars['String']>;
  client_list_exists?: InputMaybe<Scalars['Boolean']>;
  client_list_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  client_list_ne?: InputMaybe<Scalars['String']>;
  client_list_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taxonomy?: InputMaybe<QuestionitemTaxonomyWhere>;
  taxonomy_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  variants?: InputMaybe<QuestionitemVariantsWhere>;
  variants_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SysAsset = {
  __typename?: 'SysAsset';
  content_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimension?: Maybe<SysAssetDimension>;
  file_size?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  system?: Maybe<SysAssetSystemField>;
  title?: Maybe<Scalars['String']>;
  unique_identifier?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SysAssetUrlArgs = {
  transform?: InputMaybe<SysAssetTransformUrl>;
};

/** WEBP images are usually lower in size and have good quality. */
export enum SysAssetAutoValues {
  Webp = 'WEBP'
}

export type SysAssetConnection = {
  __typename?: 'SysAssetConnection';
  edges?: Maybe<Array<Maybe<SysAssetEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysAssetDimension = {
  __typename?: 'SysAssetDimension';
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type SysAssetDimensionWhere = {
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_ne?: InputMaybe<Scalars['Int']>;
  height_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_ne?: InputMaybe<Scalars['Int']>;
  width_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum SysAssetDisableValues {
  /** UPSCALE is always enabled, in which the image is upscaled if the output image (by specifying the width or height) is bigger than the source image */
  Upscale = 'UPSCALE'
}

/** This parameter allows an image to be downloaded or rendered on page */
export enum SysAssetDispositionValues {
  /** Allows to download an image */
  Attachment = 'ATTACHMENT',
  /** Allows an image to be rendered on page */
  Inline = 'INLINE'
}

export type SysAssetEdge = {
  __typename?: 'SysAssetEdge';
  node?: Maybe<SysAsset>;
};

export enum SysAssetFitValues {
  Bounds = 'BOUNDS',
  Crop = 'CROP'
}

export enum SysAssetImageFormats {
  /** Convert an image to GIF format */
  Gif = 'GIF',
  /** Convert an image to JPEG format */
  Jpg = 'JPG',
  /** A Progressive JPEG is an image file created using a compression method that displays higher detail in progression */
  Pjpg = 'PJPG',
  /** Convert an image to PNG format */
  Png = 'PNG',
  /** WEBP images are usually lower in size and have good quality */
  Webp = 'WEBP',
  /** WEBP Lossless format */
  Webpll = 'WEBPLL',
  /** WEBP Lossy format */
  Webply = 'WEBPLY'
}

export enum SysAssetOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export enum SysAssetOrientValues {
  /** Flip image horizontally and vertically */
  Both = 'BOTH',
  /** Set image to default */
  Default = 'DEFAULT',
  /** Flip image horizontally */
  Horizontally = 'HORIZONTALLY',
  /** Flip image horizontally and then rotate 90 degrees towards left */
  Rotate90Left = 'ROTATE90LEFT',
  /** Rotate image 90 degrees towards right */
  Rotate90Right = 'ROTATE90RIGHT',
  /** Flip image vertically */
  Vertically = 'VERTICALLY'
}

/** The overlay_align parameter allows you to put one image on top of another */
export enum SysAssetOverlayAlignValues {
  /** Align the overlay image to the bottom of the actual image */
  Bottom = 'BOTTOM',
  /** Align the overlay image to the center (horizontally) of the actual image */
  Center = 'CENTER',
  /** Align the overlay image to the left of the actual image */
  Left = 'LEFT',
  /** Align the overlay image to the middle (vertically) of the actual image */
  Middle = 'MIDDLE',
  /** Align the overlay image to the right of the actual image */
  Right = 'RIGHT',
  /** Align the overlay image to the top of the actual image */
  Top = 'TOP'
}

export enum SysAssetOverlayRepeatValues {
  /** Horizontal and vertical repetition */
  Both = 'BOTH',
  /** Horizontal repetition */
  X = 'X',
  /** Vertical repetition */
  Y = 'Y'
}

export type SysAssetSystemField = {
  __typename?: 'SysAssetSystemField';
  branch?: Maybe<Scalars['String']>;
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  extensionConnection?: Maybe<SysExtensionConnection>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};


export type SysAssetSystemFieldExtensionConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SysAssetTransformUrl = {
  /** When the auto parameter is set to webp, it enables WebP image support. WebP images have higher compression rate with minimum loss of quality. */
  auto?: InputMaybe<SysAssetAutoValues>;
  /** The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image */
  bg_color?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  /** The disable parameter disables the functionality that is enabled by default */
  disable?: InputMaybe<SysAssetDisableValues>;
  /** The disposition parameter lets you allow image to download or render.  */
  disposition?: InputMaybe<SysAssetDispositionValues>;
  /** The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret */
  dpr?: InputMaybe<Scalars['String']>;
  /** Fit parameter enables you to fit the given image properly within the specified height and width */
  fit?: InputMaybe<SysAssetFitValues>;
  /** Format parameter lets you converts a given image from one format to another */
  format?: InputMaybe<SysAssetImageFormats>;
  height?: InputMaybe<Scalars['String']>;
  /** The orient parameter lets you control the cardinal orientation of the given image */
  orient?: InputMaybe<SysAssetOrientValues>;
  overlay?: InputMaybe<Scalars['String']>;
  overlay_align?: InputMaybe<SysAssetOverlayAlignValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image */
  overlay_height?: InputMaybe<Scalars['String']>;
  /** The overlay_repeat parameter lets you define how the overlay image will be repeated on the given image */
  overlay_repeat?: InputMaybe<SysAssetOverlayRepeatValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When width is defined in percentage, it is relative to the output image */
  overlay_width?: InputMaybe<Scalars['String']>;
  /** This parameter lets you add extra pixels to the edges of an image. You can specify values for top, right, bottom, and left padding for an image */
  pad?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

export type SysAssetWhere = {
  AND?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dimension?: InputMaybe<SysAssetDimensionWhere>;
  dimension_exists?: InputMaybe<Scalars['Boolean']>;
  file_size?: InputMaybe<Scalars['Int']>;
  file_size_exists?: InputMaybe<Scalars['Boolean']>;
  file_size_gt?: InputMaybe<Scalars['Int']>;
  file_size_gte?: InputMaybe<Scalars['Int']>;
  file_size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  file_size_lt?: InputMaybe<Scalars['Int']>;
  file_size_lte?: InputMaybe<Scalars['Int']>;
  file_size_ne?: InputMaybe<Scalars['Int']>;
  file_size_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filename?: InputMaybe<Scalars['String']>;
  filename_exists?: InputMaybe<Scalars['Boolean']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename_ne?: InputMaybe<Scalars['String']>;
  filename_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags?: InputMaybe<Scalars['String']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysExtensionConnection = {
  __typename?: 'SysExtensionConnection';
  edges?: Maybe<Array<Maybe<SysExtensionEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysExtensionEdge = {
  __typename?: 'SysExtensionEdge';
  node?: Maybe<SysMetadata>;
};

export type SysMetadata = {
  __typename?: 'SysMetadata';
  extension_uid?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type SystemPublishDetails = {
  __typename?: 'SystemPublishDetails';
  environment?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
};

export type TaxonBottomUp = {
  __typename?: 'TaxonBottomUp';
  parent_taxonomiesConnection?: Maybe<TaxonBottomUpParentTaxonomiesConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};


export type TaxonBottomUpParent_TaxonomiesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TaxonBottomUpOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type TaxonBottomUpParentTaxonomiesConnection = {
  __typename?: 'TaxonBottomUpParentTaxonomiesConnection';
  edges?: Maybe<Array<Maybe<TaxonBottomUpParentTaxonomiesEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TaxonBottomUpParentTaxonomiesEdge = {
  __typename?: 'TaxonBottomUpParentTaxonomiesEdge';
  node?: Maybe<TaxonBottomUpParentTaxonomiesNode>;
};

export type TaxonBottomUpParentTaxonomiesNode = TaxonBottomUp;

export type TaxonBottomUpParentTaxonomiesWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  taxon_bottom_up?: InputMaybe<TaxonBottomUpWhere>;
};

export type TaxonBottomUpWhere = {
  AND?: InputMaybe<Array<InputMaybe<TaxonBottomUpWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<TaxonBottomUpWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parent_taxonomies?: InputMaybe<TaxonBottomUpParentTaxonomiesWhere>;
  parent_taxonomies_count?: InputMaybe<Scalars['Int']>;
  parent_taxonomies_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type McQuestionFragmentFragment = { __typename?: 'QuestionitemVariantsMcquestionBlock', instruction?: string | null, prompt?: string | null, stem?: string | null, choices?: Array<{ __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice', choice?: { __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock', body?: string | null, correct?: boolean | null, feedback?: string | null, points?: number | null } | null } | null> | null };

export type QuestionitemVariantsMcquestionBlockChoicesFragmentFragment = { __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice', choice?: { __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock', body?: string | null, correct?: boolean | null, feedback?: string | null, points?: number | null } | null };

export type QuestionitemVariantsTfquestionFragmentFragment = { __typename: 'QuestionitemVariantsTfquestion', tfquestion?: { __typename?: 'QuestionitemVariantsTfquestionBlock', correct?: boolean | null, feedback?: string | null, incorrect_feedback?: string | null, instruction?: string | null, points?: number | null, prompt?: string | null, stem?: string | null } | null };

export type QuestionItemFragmentFragment = { __typename?: 'Questionitem', title?: string | null, variants?: Array<{ __typename: 'QuestionitemVariantsMcquestion', mcquestion?: { __typename?: 'QuestionitemVariantsMcquestionBlock', instruction?: string | null, prompt?: string | null, stem?: string | null, choices?: Array<{ __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice', choice?: { __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock', body?: string | null, correct?: boolean | null, feedback?: string | null, points?: number | null } | null } | null> | null } | null } | { __typename: 'QuestionitemVariantsTfquestion', tfquestion?: { __typename?: 'QuestionitemVariantsTfquestionBlock', correct?: boolean | null, feedback?: string | null, incorrect_feedback?: string | null, instruction?: string | null, points?: number | null, prompt?: string | null, stem?: string | null } | null } | null> | null, system?: { __typename?: 'EntrySystemField', uid?: string | null, tags?: Array<string | null> | null, locale?: string | null, created_by?: string | null, created_at?: any | null, content_type_uid?: string | null, branch?: string | null, updated_at?: any | null, updated_by?: string | null, version?: number | null } | null };

export type QuestionItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionItemsQuery = { __typename?: 'Query', all_questionitem?: { __typename?: 'AllQuestionitem', total?: number | null, items?: Array<{ __typename?: 'Questionitem', title?: string | null, variants?: Array<{ __typename: 'QuestionitemVariantsMcquestion', mcquestion?: { __typename?: 'QuestionitemVariantsMcquestionBlock', instruction?: string | null, prompt?: string | null, stem?: string | null, choices?: Array<{ __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice', choice?: { __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock', body?: string | null, correct?: boolean | null, feedback?: string | null, points?: number | null } | null } | null> | null } | null } | { __typename: 'QuestionitemVariantsTfquestion', tfquestion?: { __typename?: 'QuestionitemVariantsTfquestionBlock', correct?: boolean | null, feedback?: string | null, incorrect_feedback?: string | null, instruction?: string | null, points?: number | null, prompt?: string | null, stem?: string | null } | null } | null> | null, system?: { __typename?: 'EntrySystemField', uid?: string | null, tags?: Array<string | null> | null, locale?: string | null, created_by?: string | null, created_at?: any | null, content_type_uid?: string | null, branch?: string | null, updated_at?: any | null, updated_by?: string | null, version?: number | null } | null } | null> | null } | null };

export type QuestionItemQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type QuestionItemQuery = { __typename?: 'Query', questionitem?: { __typename?: 'Questionitem', title?: string | null, variants?: Array<{ __typename: 'QuestionitemVariantsMcquestion', mcquestion?: { __typename?: 'QuestionitemVariantsMcquestionBlock', instruction?: string | null, prompt?: string | null, stem?: string | null, choices?: Array<{ __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice', choice?: { __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock', body?: string | null, correct?: boolean | null, feedback?: string | null, points?: number | null } | null } | null> | null } | null } | { __typename: 'QuestionitemVariantsTfquestion', tfquestion?: { __typename?: 'QuestionitemVariantsTfquestionBlock', correct?: boolean | null, feedback?: string | null, incorrect_feedback?: string | null, instruction?: string | null, points?: number | null, prompt?: string | null, stem?: string | null } | null } | null> | null, system?: { __typename?: 'EntrySystemField', uid?: string | null, tags?: Array<string | null> | null, locale?: string | null, created_by?: string | null, created_at?: any | null, content_type_uid?: string | null, branch?: string | null, updated_at?: any | null, updated_by?: string | null, version?: number | null } | null } | null };

export const QuestionitemVariantsMcquestionBlockChoicesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesChoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"choice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]}}]} as unknown as DocumentNode<QuestionitemVariantsMcquestionBlockChoicesFragmentFragment, unknown>;
export const McQuestionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MCQuestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesChoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"choice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]}}]} as unknown as DocumentNode<McQuestionFragmentFragment, unknown>;
export const QuestionitemVariantsTfquestionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsTfquestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsTfquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tfquestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"incorrect_feedback"}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}}]}}]} as unknown as DocumentNode<QuestionitemVariantsTfquestionFragmentFragment, unknown>;
export const QuestionItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Questionitem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mcquestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MCQuestionFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsTfquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionitemVariantsTfquestionFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"created_by"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_by"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesChoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"choice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MCQuestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsTfquestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsTfquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tfquestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"incorrect_feedback"}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}}]}}]} as unknown as DocumentNode<QuestionItemFragmentFragment, unknown>;
export const QuestionItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all_questionitem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionItemFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesChoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"choice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MCQuestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsTfquestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsTfquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tfquestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"incorrect_feedback"}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Questionitem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mcquestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MCQuestionFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsTfquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionitemVariantsTfquestionFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"created_by"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_by"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]} as unknown as DocumentNode<QuestionItemsQuery, QuestionItemsQueryVariables>;
export const QuestionItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionitem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesChoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"choice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MCQuestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionitemVariantsMcquestionBlockChoicesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionitemVariantsTfquestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsTfquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tfquestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"incorrect_feedback"}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Questionitem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsMcquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mcquestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MCQuestionFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionitemVariantsTfquestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionitemVariantsTfquestionFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"created_by"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_by"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]} as unknown as DocumentNode<QuestionItemQuery, QuestionItemQueryVariables>;