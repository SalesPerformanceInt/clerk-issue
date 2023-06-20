/* eslint-disable */
import type { JSONB } from '../scalars';
import type { TIMESTAMPTZ } from '../scalars';
import type { UUID } from '../scalars';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  jsonb: JSONB;
  timestamptz: TIMESTAMPTZ;
  uuid: UUID;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "learning_record" */
export type Learning_Record = {
  __typename?: 'learning_record';
  created_at: Scalars['timestamptz'];
  data: Scalars['jsonb'];
  event_type: Scalars['String'];
  id: Scalars['uuid'];
  tenant_id: Scalars['String'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "learning_record" */
export type Learning_RecordDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "learning_record" */
export type Learning_Record_Aggregate = {
  __typename?: 'learning_record_aggregate';
  aggregate?: Maybe<Learning_Record_Aggregate_Fields>;
  nodes: Array<Learning_Record>;
};

export type Learning_Record_Aggregate_Bool_Exp = {
  count?: InputMaybe<Learning_Record_Aggregate_Bool_Exp_Count>;
};

export type Learning_Record_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Learning_Record_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Learning_Record_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "learning_record" */
export type Learning_Record_Aggregate_Fields = {
  __typename?: 'learning_record_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Learning_Record_Max_Fields>;
  min?: Maybe<Learning_Record_Min_Fields>;
};


/** aggregate fields of "learning_record" */
export type Learning_Record_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Learning_Record_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "learning_record" */
export type Learning_Record_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Learning_Record_Max_Order_By>;
  min?: InputMaybe<Learning_Record_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Learning_Record_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "learning_record" */
export type Learning_Record_Arr_Rel_Insert_Input = {
  data: Array<Learning_Record_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Learning_Record_On_Conflict>;
};

/** Boolean expression to filter rows from the table "learning_record". All fields are combined with a logical 'AND'. */
export type Learning_Record_Bool_Exp = {
  _and?: InputMaybe<Array<Learning_Record_Bool_Exp>>;
  _not?: InputMaybe<Learning_Record_Bool_Exp>;
  _or?: InputMaybe<Array<Learning_Record_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  event_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "learning_record" */
export enum Learning_Record_Constraint {
  /** unique or primary key constraint on columns "id" */
  LearningRecordsPkey = 'learning_records_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Learning_Record_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Learning_Record_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Learning_Record_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "learning_record" */
export type Learning_Record_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  event_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Learning_Record_Max_Fields = {
  __typename?: 'learning_record_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  event_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  tenant_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "learning_record" */
export type Learning_Record_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Learning_Record_Min_Fields = {
  __typename?: 'learning_record_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  event_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  tenant_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "learning_record" */
export type Learning_Record_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "learning_record" */
export type Learning_Record_Mutation_Response = {
  __typename?: 'learning_record_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Learning_Record>;
};

/** on_conflict condition type for table "learning_record" */
export type Learning_Record_On_Conflict = {
  constraint: Learning_Record_Constraint;
  update_columns?: Array<Learning_Record_Update_Column>;
  where?: InputMaybe<Learning_Record_Bool_Exp>;
};

/** Ordering options when selecting data from "learning_record". */
export type Learning_Record_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: learning_record */
export type Learning_Record_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Learning_Record_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "learning_record" */
export enum Learning_Record_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "learning_record" */
export type Learning_Record_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  event_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "learning_record" */
export type Learning_Record_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Learning_Record_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Learning_Record_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  event_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "learning_record" */
export enum Learning_Record_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Learning_Record_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Learning_Record_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Learning_Record_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Learning_Record_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Learning_Record_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Learning_Record_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Learning_Record_Set_Input>;
  /** filter the rows which have to be updated */
  where: Learning_Record_Bool_Exp;
};

/** columns and relationships of "link_token" */
export type Link_Token = {
  __typename?: 'link_token';
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  tenant_id: Scalars['String'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "link_token" */
export type Link_Token_Aggregate = {
  __typename?: 'link_token_aggregate';
  aggregate?: Maybe<Link_Token_Aggregate_Fields>;
  nodes: Array<Link_Token>;
};

export type Link_Token_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Link_Token_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Link_Token_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Link_Token_Aggregate_Bool_Exp_Count>;
};

export type Link_Token_Aggregate_Bool_Exp_Bool_And = {
  arguments: Link_Token_Select_Column_Link_Token_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Link_Token_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Link_Token_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Link_Token_Select_Column_Link_Token_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Link_Token_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Link_Token_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Link_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Link_Token_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "link_token" */
export type Link_Token_Aggregate_Fields = {
  __typename?: 'link_token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Link_Token_Max_Fields>;
  min?: Maybe<Link_Token_Min_Fields>;
};


/** aggregate fields of "link_token" */
export type Link_Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Link_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "link_token" */
export type Link_Token_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Link_Token_Max_Order_By>;
  min?: InputMaybe<Link_Token_Min_Order_By>;
};

/** input type for inserting array relation for remote table "link_token" */
export type Link_Token_Arr_Rel_Insert_Input = {
  data: Array<Link_Token_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Link_Token_On_Conflict>;
};

/** Boolean expression to filter rows from the table "link_token". All fields are combined with a logical 'AND'. */
export type Link_Token_Bool_Exp = {
  _and?: InputMaybe<Array<Link_Token_Bool_Exp>>;
  _not?: InputMaybe<Link_Token_Bool_Exp>;
  _or?: InputMaybe<Array<Link_Token_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "link_token" */
export enum Link_Token_Constraint {
  /** unique or primary key constraint on columns "id" */
  LinkTokensPkey = 'link_tokens_pkey'
}

/** input type for inserting data into table "link_token" */
export type Link_Token_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Link_Token_Max_Fields = {
  __typename?: 'link_token_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "link_token" */
export type Link_Token_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Link_Token_Min_Fields = {
  __typename?: 'link_token_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "link_token" */
export type Link_Token_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "link_token" */
export type Link_Token_Mutation_Response = {
  __typename?: 'link_token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Link_Token>;
};

/** on_conflict condition type for table "link_token" */
export type Link_Token_On_Conflict = {
  constraint: Link_Token_Constraint;
  update_columns?: Array<Link_Token_Update_Column>;
  where?: InputMaybe<Link_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "link_token". */
export type Link_Token_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: link_token */
export type Link_Token_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "link_token" */
export enum Link_Token_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** select "link_token_aggregate_bool_exp_bool_and_arguments_columns" columns of table "link_token" */
export enum Link_Token_Select_Column_Link_Token_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "link_token_aggregate_bool_exp_bool_or_arguments_columns" columns of table "link_token" */
export enum Link_Token_Select_Column_Link_Token_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "link_token" */
export type Link_Token_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "link_token" */
export type Link_Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Link_Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Link_Token_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "link_token" */
export enum Link_Token_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Link_Token_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Link_Token_Set_Input>;
  /** filter the rows which have to be updated */
  where: Link_Token_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "learning_record" */
  delete_learning_record?: Maybe<Learning_Record_Mutation_Response>;
  /** delete single row from the table: "learning_record" */
  delete_learning_record_by_pk?: Maybe<Learning_Record>;
  /** delete data from the table: "link_token" */
  delete_link_token?: Maybe<Link_Token_Mutation_Response>;
  /** delete single row from the table: "link_token" */
  delete_link_token_by_pk?: Maybe<Link_Token>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "learning_record" */
  insert_learning_record?: Maybe<Learning_Record_Mutation_Response>;
  /** insert a single row into the table: "learning_record" */
  insert_learning_record_one?: Maybe<Learning_Record>;
  /** insert data into the table: "link_token" */
  insert_link_token?: Maybe<Link_Token_Mutation_Response>;
  /** insert a single row into the table: "link_token" */
  insert_link_token_one?: Maybe<Link_Token>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "learning_record" */
  update_learning_record?: Maybe<Learning_Record_Mutation_Response>;
  /** update single row of the table: "learning_record" */
  update_learning_record_by_pk?: Maybe<Learning_Record>;
  /** update multiples rows of table: "learning_record" */
  update_learning_record_many?: Maybe<Array<Maybe<Learning_Record_Mutation_Response>>>;
  /** update data of the table: "link_token" */
  update_link_token?: Maybe<Link_Token_Mutation_Response>;
  /** update single row of the table: "link_token" */
  update_link_token_by_pk?: Maybe<Link_Token>;
  /** update multiples rows of table: "link_token" */
  update_link_token_many?: Maybe<Array<Maybe<Link_Token_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Learning_RecordArgs = {
  where: Learning_Record_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Learning_Record_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Link_TokenArgs = {
  where: Link_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Link_Token_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Learning_RecordArgs = {
  objects: Array<Learning_Record_Insert_Input>;
  on_conflict?: InputMaybe<Learning_Record_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Learning_Record_OneArgs = {
  object: Learning_Record_Insert_Input;
  on_conflict?: InputMaybe<Learning_Record_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Link_TokenArgs = {
  objects: Array<Link_Token_Insert_Input>;
  on_conflict?: InputMaybe<Link_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Link_Token_OneArgs = {
  object: Link_Token_Insert_Input;
  on_conflict?: InputMaybe<Link_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Learning_RecordArgs = {
  _append?: InputMaybe<Learning_Record_Append_Input>;
  _delete_at_path?: InputMaybe<Learning_Record_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Learning_Record_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Learning_Record_Delete_Key_Input>;
  _prepend?: InputMaybe<Learning_Record_Prepend_Input>;
  _set?: InputMaybe<Learning_Record_Set_Input>;
  where: Learning_Record_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Learning_Record_By_PkArgs = {
  _append?: InputMaybe<Learning_Record_Append_Input>;
  _delete_at_path?: InputMaybe<Learning_Record_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Learning_Record_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Learning_Record_Delete_Key_Input>;
  _prepend?: InputMaybe<Learning_Record_Prepend_Input>;
  _set?: InputMaybe<Learning_Record_Set_Input>;
  pk_columns: Learning_Record_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Learning_Record_ManyArgs = {
  updates: Array<Learning_Record_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Link_TokenArgs = {
  _set?: InputMaybe<Link_Token_Set_Input>;
  where: Link_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Link_Token_By_PkArgs = {
  _set?: InputMaybe<Link_Token_Set_Input>;
  pk_columns: Link_Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Link_Token_ManyArgs = {
  updates: Array<Link_Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "learning_record" */
  learning_record: Array<Learning_Record>;
  /** fetch aggregated fields from the table: "learning_record" */
  learning_record_aggregate: Learning_Record_Aggregate;
  /** fetch data from the table: "learning_record" using primary key columns */
  learning_record_by_pk?: Maybe<Learning_Record>;
  /** fetch data from the table: "link_token" */
  link_token: Array<Link_Token>;
  /** fetch aggregated fields from the table: "link_token" */
  link_token_aggregate: Link_Token_Aggregate;
  /** fetch data from the table: "link_token" using primary key columns */
  link_token_by_pk?: Maybe<Link_Token>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootLearning_RecordArgs = {
  distinct_on?: InputMaybe<Array<Learning_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Learning_Record_Order_By>>;
  where?: InputMaybe<Learning_Record_Bool_Exp>;
};


export type Query_RootLearning_Record_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Learning_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Learning_Record_Order_By>>;
  where?: InputMaybe<Learning_Record_Bool_Exp>;
};


export type Query_RootLearning_Record_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLink_TokenArgs = {
  distinct_on?: InputMaybe<Array<Link_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Token_Order_By>>;
  where?: InputMaybe<Link_Token_Bool_Exp>;
};


export type Query_RootLink_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Token_Order_By>>;
  where?: InputMaybe<Link_Token_Bool_Exp>;
};


export type Query_RootLink_Token_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  user_id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "learning_record" */
  learning_record: Array<Learning_Record>;
  /** fetch aggregated fields from the table: "learning_record" */
  learning_record_aggregate: Learning_Record_Aggregate;
  /** fetch data from the table: "learning_record" using primary key columns */
  learning_record_by_pk?: Maybe<Learning_Record>;
  /** fetch data from the table in a streaming manner: "learning_record" */
  learning_record_stream: Array<Learning_Record>;
  /** fetch data from the table: "link_token" */
  link_token: Array<Link_Token>;
  /** fetch aggregated fields from the table: "link_token" */
  link_token_aggregate: Link_Token_Aggregate;
  /** fetch data from the table: "link_token" using primary key columns */
  link_token_by_pk?: Maybe<Link_Token>;
  /** fetch data from the table in a streaming manner: "link_token" */
  link_token_stream: Array<Link_Token>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootLearning_RecordArgs = {
  distinct_on?: InputMaybe<Array<Learning_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Learning_Record_Order_By>>;
  where?: InputMaybe<Learning_Record_Bool_Exp>;
};


export type Subscription_RootLearning_Record_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Learning_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Learning_Record_Order_By>>;
  where?: InputMaybe<Learning_Record_Bool_Exp>;
};


export type Subscription_RootLearning_Record_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLearning_Record_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Learning_Record_Stream_Cursor_Input>>;
  where?: InputMaybe<Learning_Record_Bool_Exp>;
};


export type Subscription_RootLink_TokenArgs = {
  distinct_on?: InputMaybe<Array<Link_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Token_Order_By>>;
  where?: InputMaybe<Link_Token_Bool_Exp>;
};


export type Subscription_RootLink_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Token_Order_By>>;
  where?: InputMaybe<Link_Token_Bool_Exp>;
};


export type Subscription_RootLink_Token_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLink_Token_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Link_Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Link_Token_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  account: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  language_preference: Scalars['String'];
  last_name: Scalars['String'];
  /** An array relationship */
  learning_records: Array<Learning_Record>;
  /** An aggregate relationship */
  learning_records_aggregate: Learning_Record_Aggregate;
  /** An array relationship */
  link_tokens: Array<Link_Token>;
  /** An aggregate relationship */
  link_tokens_aggregate: Link_Token_Aggregate;
  next_question_id?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  sms_enabled: Scalars['Boolean'];
  tenant_id: Scalars['String'];
  timezone: Scalars['String'];
  user_id: Scalars['uuid'];
};


/** columns and relationships of "user" */
export type UserLearning_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Learning_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Learning_Record_Order_By>>;
  where?: InputMaybe<Learning_Record_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserLearning_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Learning_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Learning_Record_Order_By>>;
  where?: InputMaybe<Learning_Record_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserLink_TokensArgs = {
  distinct_on?: InputMaybe<Array<Link_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Token_Order_By>>;
  where?: InputMaybe<Link_Token_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserLink_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Token_Order_By>>;
  where?: InputMaybe<Link_Token_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  language_preference?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  learning_records?: InputMaybe<Learning_Record_Bool_Exp>;
  learning_records_aggregate?: InputMaybe<Learning_Record_Aggregate_Bool_Exp>;
  link_tokens?: InputMaybe<Link_Token_Bool_Exp>;
  link_tokens_aggregate?: InputMaybe<Link_Token_Aggregate_Bool_Exp>;
  next_question_id?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  sms_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  account?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  learning_records?: InputMaybe<Learning_Record_Arr_Rel_Insert_Input>;
  link_tokens?: InputMaybe<Link_Token_Arr_Rel_Insert_Input>;
  next_question_id?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  sms_enabled?: InputMaybe<Scalars['Boolean']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  account?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  language_preference?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  next_question_id?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  account?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  language_preference?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  next_question_id?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  account?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  language_preference?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  learning_records_aggregate?: InputMaybe<Learning_Record_Aggregate_Order_By>;
  link_tokens_aggregate?: InputMaybe<Link_Token_Aggregate_Order_By>;
  next_question_id?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  sms_enabled?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  user_id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LanguagePreference = 'language_preference',
  /** column name */
  LastName = 'last_name',
  /** column name */
  NextQuestionId = 'next_question_id',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  SmsEnabled = 'sms_enabled',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  account?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  next_question_id?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  sms_enabled?: InputMaybe<Scalars['Boolean']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  account?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  next_question_id?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  sms_enabled?: InputMaybe<Scalars['Boolean']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LanguagePreference = 'language_preference',
  /** column name */
  LastName = 'last_name',
  /** column name */
  NextQuestionId = 'next_question_id',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  SmsEnabled = 'sms_enabled',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  UserId = 'user_id'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type BaseLearningRecordFragment = { __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID };

export type BaseLinkTokenFragment = { __typename: 'link_token', id: string, created_at: TIMESTAMPTZ, active: boolean, user_id: UUID };

export type UserWithActiveTokenFragment = { __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TIMESTAMPTZ, active: boolean, user_id: UUID }>, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> };

export type BaseUserFragment = { __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> };

export type CreateLearningRecordMutationVariables = Exact<{
  learning_record: Learning_Record_Insert_Input;
}>;


export type CreateLearningRecordMutation = { __typename?: 'mutation_root', insert_learning_record_one?: { __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID } | null };

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  nextQuestionId?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> } | null };

export type GenerateNewTokenMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GenerateNewTokenMutation = { __typename?: 'mutation_root', update_link_token?: { __typename?: 'link_token_mutation_response', returning: Array<{ __typename: 'link_token', id: string, created_at: TIMESTAMPTZ, active: boolean, user_id: UUID }> } | null, insert_link_token_one?: { __typename: 'link_token', id: string, created_at: TIMESTAMPTZ, active: boolean, user_id: UUID, user: { __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TIMESTAMPTZ, active: boolean, user_id: UUID }>, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> } } | null };

export type ResetUserMutationVariables = Exact<{
  user_id: Scalars['uuid'];
  next_question_id?: InputMaybe<Scalars['String']>;
}>;


export type ResetUserMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> } | null, delete_learning_record?: { __typename?: 'learning_record_mutation_response', affected_rows: number } | null };

export type ToggleUserSmsEnabledMutationVariables = Exact<{
  userId: Scalars['uuid'];
  sms_enabled?: InputMaybe<Scalars['Boolean']>;
}>;


export type ToggleUserSmsEnabledMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> } | null };

export type UpdateNextQuestionIdMutationVariables = Exact<{
  user_id: Scalars['uuid'];
  next_question_id?: InputMaybe<Scalars['String']>;
}>;


export type UpdateNextQuestionIdMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> } | null };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'query_root', user: Array<{ __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TIMESTAMPTZ, active: boolean, user_id: UUID }>, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> }> };

export type GetLinkTokenQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetLinkTokenQuery = { __typename?: 'query_root', link_token_by_pk?: { __typename?: 'link_token', id: string, user_id: UUID, tenant_id: string, created_at: TIMESTAMPTZ, active: boolean } | null };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetUserQuery = { __typename?: 'query_root', user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, language_preference: string, last_name: string, next_question_id?: string | null, phone_number?: string | null, timezone: string, user_id: UUID, sms_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TIMESTAMPTZ, active: boolean, user_id: UUID }>, learning_records: Array<{ __typename: 'learning_record', created_at: TIMESTAMPTZ, data: JSONB, event_type: string, id: UUID, user_id: UUID }> } | null };

export const BaseLearningRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<BaseLearningRecordFragment, unknown>;
export const BaseUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<BaseUserFragment, unknown>;
export const BaseLinkTokenFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<BaseLinkTokenFragment, unknown>;
export const UserWithActiveTokenFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<UserWithActiveTokenFragment, unknown>;
export const CreateLearningRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLearningRecord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"learning_record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_learning_record_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"learning_record"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<CreateLearningRecordMutation, CreateLearningRecordMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextQuestionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"next_question_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextQuestionId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GenerateNewTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateNewToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_link_token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_link_token_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<GenerateNewTokenMutation, GenerateNewTokenMutationVariables>;
export const ResetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"next_question_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"next_question_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"next_question_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_learning_record"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}}]} as unknown as DocumentNode<ResetUserMutation, ResetUserMutationVariables>;
export const ToggleUserSmsEnabledDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleUserSMSEnabled"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sms_enabled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sms_enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sms_enabled"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}}]} as unknown as DocumentNode<ToggleUserSmsEnabledMutation, ToggleUserSmsEnabledMutationVariables>;
export const UpdateNextQuestionIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNextQuestionId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"next_question_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"next_question_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"next_question_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}}]} as unknown as DocumentNode<UpdateNextQuestionIdMutation, UpdateNextQuestionIdMutationVariables>;
export const GetAllUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<GetAllUserQuery, GetAllUserQueryVariables>;
export const GetLinkTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLinkToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_token_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetLinkTokenQuery, GetLinkTokenQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"next_question_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"learning_records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;