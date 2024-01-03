/* eslint-disable */
import type { ISODate } from '../scalars';
import type { Jsonb } from '../scalars';
import type { Numeric } from '../scalars';
import type { TimestampTZ } from '../scalars';
import type { Uuid } from '../scalars';
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
  date: ISODate;
  jsonb: Jsonb;
  numeric: Numeric;
  timestamp: TimestampTZ;
  timestamptz: TimestampTZ;
  uuid: Uuid;
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

/** columns and relationships of "acme-vib-staging.users" */
export type Acme__Users = {
  __typename?: 'acme__users';
  account_id?: Maybe<Scalars['uuid']>;
  active_tab?: Maybe<Scalars['String']>;
  block_email?: Maybe<Scalars['Boolean']>;
  can_delete_account: Scalars['Boolean'];
  confirmation_sent_at?: Maybe<Scalars['timestamp']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamp']>;
  created_at?: Maybe<Scalars['timestamp']>;
  current_sign_in_at?: Maybe<Scalars['timestamp']>;
  current_sign_in_ip?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  email_bounce_lock?: Maybe<Scalars['Boolean']>;
  encrypted_password: Scalars['String'];
  failed_attempts: Scalars['Int'];
  first_name?: Maybe<Scalars['String']>;
  force_reset_password_after_next_login?: Maybe<Scalars['Boolean']>;
  id: Scalars['uuid'];
  inactivated_at?: Maybe<Scalars['timestamp']>;
  language_preference?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_sign_in_at?: Maybe<Scalars['timestamp']>;
  last_sign_in_ip?: Maybe<Scalars['String']>;
  last_visited_path?: Maybe<Scalars['String']>;
  launch_email_method?: Maybe<Scalars['Int']>;
  launch_email_schedule_later_at?: Maybe<Scalars['timestamp']>;
  launch_email_schedule_later_job_id?: Maybe<Scalars['String']>;
  locked_at?: Maybe<Scalars['timestamp']>;
  manager_user_id?: Maybe<Scalars['uuid']>;
  profile_picture?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  remember_created_at?: Maybe<Scalars['timestamp']>;
  reset_password_sent_at?: Maybe<Scalars['timestamp']>;
  reset_password_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  sales_role_id?: Maybe<Scalars['uuid']>;
  sign_in_count: Scalars['Int'];
  status?: Maybe<Scalars['Int']>;
  tokens?: Maybe<Scalars['jsonb']>;
  uid: Scalars['String'];
  unconfirmed_email?: Maybe<Scalars['String']>;
  unlock_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "acme-vib-staging.users" */
export type Acme__UsersTokensArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "acme-vib-staging.users" */
export type Acme__Users_Aggregate = {
  __typename?: 'acme__users_aggregate';
  aggregate?: Maybe<Acme__Users_Aggregate_Fields>;
  nodes: Array<Acme__Users>;
};

/** aggregate fields of "acme-vib-staging.users" */
export type Acme__Users_Aggregate_Fields = {
  __typename?: 'acme__users_aggregate_fields';
  avg?: Maybe<Acme__Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acme__Users_Max_Fields>;
  min?: Maybe<Acme__Users_Min_Fields>;
  stddev?: Maybe<Acme__Users_Stddev_Fields>;
  stddev_pop?: Maybe<Acme__Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acme__Users_Stddev_Samp_Fields>;
  sum?: Maybe<Acme__Users_Sum_Fields>;
  var_pop?: Maybe<Acme__Users_Var_Pop_Fields>;
  var_samp?: Maybe<Acme__Users_Var_Samp_Fields>;
  variance?: Maybe<Acme__Users_Variance_Fields>;
};


/** aggregate fields of "acme-vib-staging.users" */
export type Acme__Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Acme__Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Acme__Users_Append_Input = {
  tokens?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Acme__Users_Avg_Fields = {
  __typename?: 'acme__users_avg_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
  launch_email_method?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  sign_in_count?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "acme-vib-staging.users". All fields are combined with a logical 'AND'. */
export type Acme__Users_Bool_Exp = {
  _and?: InputMaybe<Array<Acme__Users_Bool_Exp>>;
  _not?: InputMaybe<Acme__Users_Bool_Exp>;
  _or?: InputMaybe<Array<Acme__Users_Bool_Exp>>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  active_tab?: InputMaybe<String_Comparison_Exp>;
  block_email?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_account?: InputMaybe<Boolean_Comparison_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamp_Comparison_Exp>;
  confirmation_token?: InputMaybe<String_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  current_sign_in_at?: InputMaybe<Timestamp_Comparison_Exp>;
  current_sign_in_ip?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_bounce_lock?: InputMaybe<Boolean_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  failed_attempts?: InputMaybe<Int_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  force_reset_password_after_next_login?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inactivated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  language_preference?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamp_Comparison_Exp>;
  last_sign_in_ip?: InputMaybe<String_Comparison_Exp>;
  last_visited_path?: InputMaybe<String_Comparison_Exp>;
  launch_email_method?: InputMaybe<Int_Comparison_Exp>;
  launch_email_schedule_later_at?: InputMaybe<Timestamp_Comparison_Exp>;
  launch_email_schedule_later_job_id?: InputMaybe<String_Comparison_Exp>;
  locked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  manager_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  profile_picture?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  remember_created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  reset_password_sent_at?: InputMaybe<Timestamp_Comparison_Exp>;
  reset_password_token?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Int_Comparison_Exp>;
  sales_role_id?: InputMaybe<Uuid_Comparison_Exp>;
  sign_in_count?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  tokens?: InputMaybe<Jsonb_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  unconfirmed_email?: InputMaybe<String_Comparison_Exp>;
  unlock_token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "acme-vib-staging.users" */
export enum Acme__Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  IndexUsersOnEmail = 'index_users_on_email',
  /** unique or primary key constraint on columns "reset_password_token" */
  IndexUsersOnResetPasswordToken = 'index_users_on_reset_password_token',
  /** unique or primary key constraint on columns "unlock_token" */
  IndexUsersOnUnlockToken = 'index_users_on_unlock_token',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Acme__Users_Delete_At_Path_Input = {
  tokens?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Acme__Users_Delete_Elem_Input = {
  tokens?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Acme__Users_Delete_Key_Input = {
  tokens?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "acme-vib-staging.users" */
export type Acme__Users_Inc_Input = {
  failed_attempts?: InputMaybe<Scalars['Int']>;
  launch_email_method?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['Int']>;
  sign_in_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "acme-vib-staging.users" */
export type Acme__Users_Insert_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  active_tab?: InputMaybe<Scalars['String']>;
  block_email?: InputMaybe<Scalars['Boolean']>;
  can_delete_account?: InputMaybe<Scalars['Boolean']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamp']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  confirmed_at?: InputMaybe<Scalars['timestamp']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  current_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  current_sign_in_ip?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_bounce_lock?: InputMaybe<Scalars['Boolean']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  failed_attempts?: InputMaybe<Scalars['Int']>;
  first_name?: InputMaybe<Scalars['String']>;
  force_reset_password_after_next_login?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  inactivated_at?: InputMaybe<Scalars['timestamp']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  last_sign_in_ip?: InputMaybe<Scalars['String']>;
  last_visited_path?: InputMaybe<Scalars['String']>;
  launch_email_method?: InputMaybe<Scalars['Int']>;
  launch_email_schedule_later_at?: InputMaybe<Scalars['timestamp']>;
  launch_email_schedule_later_job_id?: InputMaybe<Scalars['String']>;
  locked_at?: InputMaybe<Scalars['timestamp']>;
  manager_user_id?: InputMaybe<Scalars['uuid']>;
  profile_picture?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  remember_created_at?: InputMaybe<Scalars['timestamp']>;
  reset_password_sent_at?: InputMaybe<Scalars['timestamp']>;
  reset_password_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Int']>;
  sales_role_id?: InputMaybe<Scalars['uuid']>;
  sign_in_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  tokens?: InputMaybe<Scalars['jsonb']>;
  uid?: InputMaybe<Scalars['String']>;
  unconfirmed_email?: InputMaybe<Scalars['String']>;
  unlock_token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Acme__Users_Max_Fields = {
  __typename?: 'acme__users_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  active_tab?: Maybe<Scalars['String']>;
  confirmation_sent_at?: Maybe<Scalars['timestamp']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamp']>;
  created_at?: Maybe<Scalars['timestamp']>;
  current_sign_in_at?: Maybe<Scalars['timestamp']>;
  current_sign_in_ip?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  failed_attempts?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inactivated_at?: Maybe<Scalars['timestamp']>;
  language_preference?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_sign_in_at?: Maybe<Scalars['timestamp']>;
  last_sign_in_ip?: Maybe<Scalars['String']>;
  last_visited_path?: Maybe<Scalars['String']>;
  launch_email_method?: Maybe<Scalars['Int']>;
  launch_email_schedule_later_at?: Maybe<Scalars['timestamp']>;
  launch_email_schedule_later_job_id?: Maybe<Scalars['String']>;
  locked_at?: Maybe<Scalars['timestamp']>;
  manager_user_id?: Maybe<Scalars['uuid']>;
  profile_picture?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  remember_created_at?: Maybe<Scalars['timestamp']>;
  reset_password_sent_at?: Maybe<Scalars['timestamp']>;
  reset_password_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  sales_role_id?: Maybe<Scalars['uuid']>;
  sign_in_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  unconfirmed_email?: Maybe<Scalars['String']>;
  unlock_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Acme__Users_Min_Fields = {
  __typename?: 'acme__users_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  active_tab?: Maybe<Scalars['String']>;
  confirmation_sent_at?: Maybe<Scalars['timestamp']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamp']>;
  created_at?: Maybe<Scalars['timestamp']>;
  current_sign_in_at?: Maybe<Scalars['timestamp']>;
  current_sign_in_ip?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  failed_attempts?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inactivated_at?: Maybe<Scalars['timestamp']>;
  language_preference?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_sign_in_at?: Maybe<Scalars['timestamp']>;
  last_sign_in_ip?: Maybe<Scalars['String']>;
  last_visited_path?: Maybe<Scalars['String']>;
  launch_email_method?: Maybe<Scalars['Int']>;
  launch_email_schedule_later_at?: Maybe<Scalars['timestamp']>;
  launch_email_schedule_later_job_id?: Maybe<Scalars['String']>;
  locked_at?: Maybe<Scalars['timestamp']>;
  manager_user_id?: Maybe<Scalars['uuid']>;
  profile_picture?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  remember_created_at?: Maybe<Scalars['timestamp']>;
  reset_password_sent_at?: Maybe<Scalars['timestamp']>;
  reset_password_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  sales_role_id?: Maybe<Scalars['uuid']>;
  sign_in_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  unconfirmed_email?: Maybe<Scalars['String']>;
  unlock_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "acme-vib-staging.users" */
export type Acme__Users_Mutation_Response = {
  __typename?: 'acme__users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Acme__Users>;
};

/** on_conflict condition type for table "acme-vib-staging.users" */
export type Acme__Users_On_Conflict = {
  constraint: Acme__Users_Constraint;
  update_columns?: Array<Acme__Users_Update_Column>;
  where?: InputMaybe<Acme__Users_Bool_Exp>;
};

/** Ordering options when selecting data from "acme-vib-staging.users". */
export type Acme__Users_Order_By = {
  account_id?: InputMaybe<Order_By>;
  active_tab?: InputMaybe<Order_By>;
  block_email?: InputMaybe<Order_By>;
  can_delete_account?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmation_token?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_sign_in_at?: InputMaybe<Order_By>;
  current_sign_in_ip?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_bounce_lock?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  failed_attempts?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  force_reset_password_after_next_login?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inactivated_at?: InputMaybe<Order_By>;
  language_preference?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  last_sign_in_ip?: InputMaybe<Order_By>;
  last_visited_path?: InputMaybe<Order_By>;
  launch_email_method?: InputMaybe<Order_By>;
  launch_email_schedule_later_at?: InputMaybe<Order_By>;
  launch_email_schedule_later_job_id?: InputMaybe<Order_By>;
  locked_at?: InputMaybe<Order_By>;
  manager_user_id?: InputMaybe<Order_By>;
  profile_picture?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  remember_created_at?: InputMaybe<Order_By>;
  reset_password_sent_at?: InputMaybe<Order_By>;
  reset_password_token?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sales_role_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  unconfirmed_email?: InputMaybe<Order_By>;
  unlock_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: acme-vib-staging.users */
export type Acme__Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Acme__Users_Prepend_Input = {
  tokens?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "acme-vib-staging.users" */
export enum Acme__Users_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  ActiveTab = 'active_tab',
  /** column name */
  BlockEmail = 'block_email',
  /** column name */
  CanDeleteAccount = 'can_delete_account',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentSignInAt = 'current_sign_in_at',
  /** column name */
  CurrentSignInIp = 'current_sign_in_ip',
  /** column name */
  Email = 'email',
  /** column name */
  EmailBounceLock = 'email_bounce_lock',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FailedAttempts = 'failed_attempts',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  ForceResetPasswordAfterNextLogin = 'force_reset_password_after_next_login',
  /** column name */
  Id = 'id',
  /** column name */
  InactivatedAt = 'inactivated_at',
  /** column name */
  LanguagePreference = 'language_preference',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  LastSignInIp = 'last_sign_in_ip',
  /** column name */
  LastVisitedPath = 'last_visited_path',
  /** column name */
  LaunchEmailMethod = 'launch_email_method',
  /** column name */
  LaunchEmailScheduleLaterAt = 'launch_email_schedule_later_at',
  /** column name */
  LaunchEmailScheduleLaterJobId = 'launch_email_schedule_later_job_id',
  /** column name */
  LockedAt = 'locked_at',
  /** column name */
  ManagerUserId = 'manager_user_id',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  Provider = 'provider',
  /** column name */
  RememberCreatedAt = 'remember_created_at',
  /** column name */
  ResetPasswordSentAt = 'reset_password_sent_at',
  /** column name */
  ResetPasswordToken = 'reset_password_token',
  /** column name */
  Role = 'role',
  /** column name */
  SalesRoleId = 'sales_role_id',
  /** column name */
  SignInCount = 'sign_in_count',
  /** column name */
  Status = 'status',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  Uid = 'uid',
  /** column name */
  UnconfirmedEmail = 'unconfirmed_email',
  /** column name */
  UnlockToken = 'unlock_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "acme-vib-staging.users" */
export type Acme__Users_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  active_tab?: InputMaybe<Scalars['String']>;
  block_email?: InputMaybe<Scalars['Boolean']>;
  can_delete_account?: InputMaybe<Scalars['Boolean']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamp']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  confirmed_at?: InputMaybe<Scalars['timestamp']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  current_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  current_sign_in_ip?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_bounce_lock?: InputMaybe<Scalars['Boolean']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  failed_attempts?: InputMaybe<Scalars['Int']>;
  first_name?: InputMaybe<Scalars['String']>;
  force_reset_password_after_next_login?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  inactivated_at?: InputMaybe<Scalars['timestamp']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  last_sign_in_ip?: InputMaybe<Scalars['String']>;
  last_visited_path?: InputMaybe<Scalars['String']>;
  launch_email_method?: InputMaybe<Scalars['Int']>;
  launch_email_schedule_later_at?: InputMaybe<Scalars['timestamp']>;
  launch_email_schedule_later_job_id?: InputMaybe<Scalars['String']>;
  locked_at?: InputMaybe<Scalars['timestamp']>;
  manager_user_id?: InputMaybe<Scalars['uuid']>;
  profile_picture?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  remember_created_at?: InputMaybe<Scalars['timestamp']>;
  reset_password_sent_at?: InputMaybe<Scalars['timestamp']>;
  reset_password_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Int']>;
  sales_role_id?: InputMaybe<Scalars['uuid']>;
  sign_in_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  tokens?: InputMaybe<Scalars['jsonb']>;
  uid?: InputMaybe<Scalars['String']>;
  unconfirmed_email?: InputMaybe<Scalars['String']>;
  unlock_token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Acme__Users_Stddev_Fields = {
  __typename?: 'acme__users_stddev_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
  launch_email_method?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  sign_in_count?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Acme__Users_Stddev_Pop_Fields = {
  __typename?: 'acme__users_stddev_pop_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
  launch_email_method?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  sign_in_count?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Acme__Users_Stddev_Samp_Fields = {
  __typename?: 'acme__users_stddev_samp_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
  launch_email_method?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  sign_in_count?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "acme__users" */
export type Acme__Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Acme__Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Acme__Users_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  active_tab?: InputMaybe<Scalars['String']>;
  block_email?: InputMaybe<Scalars['Boolean']>;
  can_delete_account?: InputMaybe<Scalars['Boolean']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamp']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  confirmed_at?: InputMaybe<Scalars['timestamp']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  current_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  current_sign_in_ip?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_bounce_lock?: InputMaybe<Scalars['Boolean']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  failed_attempts?: InputMaybe<Scalars['Int']>;
  first_name?: InputMaybe<Scalars['String']>;
  force_reset_password_after_next_login?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  inactivated_at?: InputMaybe<Scalars['timestamp']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  last_sign_in_ip?: InputMaybe<Scalars['String']>;
  last_visited_path?: InputMaybe<Scalars['String']>;
  launch_email_method?: InputMaybe<Scalars['Int']>;
  launch_email_schedule_later_at?: InputMaybe<Scalars['timestamp']>;
  launch_email_schedule_later_job_id?: InputMaybe<Scalars['String']>;
  locked_at?: InputMaybe<Scalars['timestamp']>;
  manager_user_id?: InputMaybe<Scalars['uuid']>;
  profile_picture?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  remember_created_at?: InputMaybe<Scalars['timestamp']>;
  reset_password_sent_at?: InputMaybe<Scalars['timestamp']>;
  reset_password_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Int']>;
  sales_role_id?: InputMaybe<Scalars['uuid']>;
  sign_in_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  tokens?: InputMaybe<Scalars['jsonb']>;
  uid?: InputMaybe<Scalars['String']>;
  unconfirmed_email?: InputMaybe<Scalars['String']>;
  unlock_token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Acme__Users_Sum_Fields = {
  __typename?: 'acme__users_sum_fields';
  failed_attempts?: Maybe<Scalars['Int']>;
  launch_email_method?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  sign_in_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

/** update columns of table "acme-vib-staging.users" */
export enum Acme__Users_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  ActiveTab = 'active_tab',
  /** column name */
  BlockEmail = 'block_email',
  /** column name */
  CanDeleteAccount = 'can_delete_account',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentSignInAt = 'current_sign_in_at',
  /** column name */
  CurrentSignInIp = 'current_sign_in_ip',
  /** column name */
  Email = 'email',
  /** column name */
  EmailBounceLock = 'email_bounce_lock',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FailedAttempts = 'failed_attempts',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  ForceResetPasswordAfterNextLogin = 'force_reset_password_after_next_login',
  /** column name */
  Id = 'id',
  /** column name */
  InactivatedAt = 'inactivated_at',
  /** column name */
  LanguagePreference = 'language_preference',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  LastSignInIp = 'last_sign_in_ip',
  /** column name */
  LastVisitedPath = 'last_visited_path',
  /** column name */
  LaunchEmailMethod = 'launch_email_method',
  /** column name */
  LaunchEmailScheduleLaterAt = 'launch_email_schedule_later_at',
  /** column name */
  LaunchEmailScheduleLaterJobId = 'launch_email_schedule_later_job_id',
  /** column name */
  LockedAt = 'locked_at',
  /** column name */
  ManagerUserId = 'manager_user_id',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  Provider = 'provider',
  /** column name */
  RememberCreatedAt = 'remember_created_at',
  /** column name */
  ResetPasswordSentAt = 'reset_password_sent_at',
  /** column name */
  ResetPasswordToken = 'reset_password_token',
  /** column name */
  Role = 'role',
  /** column name */
  SalesRoleId = 'sales_role_id',
  /** column name */
  SignInCount = 'sign_in_count',
  /** column name */
  Status = 'status',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  Uid = 'uid',
  /** column name */
  UnconfirmedEmail = 'unconfirmed_email',
  /** column name */
  UnlockToken = 'unlock_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Acme__Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Acme__Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Acme__Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Acme__Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Acme__Users_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Acme__Users_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Acme__Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Acme__Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Acme__Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Acme__Users_Var_Pop_Fields = {
  __typename?: 'acme__users_var_pop_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
  launch_email_method?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  sign_in_count?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Acme__Users_Var_Samp_Fields = {
  __typename?: 'acme__users_var_samp_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
  launch_email_method?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  sign_in_count?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Acme__Users_Variance_Fields = {
  __typename?: 'acme__users_variance_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
  launch_email_method?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  sign_in_count?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

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
  LearningRecordPkey = 'learning_record_pkey'
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
  LinkTokenPkey = 'link_token_pkey'
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
  /** delete data from the table: "acme-vib-staging.users" */
  delete_acme__users?: Maybe<Acme__Users_Mutation_Response>;
  /** delete single row from the table: "acme-vib-staging.users" */
  delete_acme__users_by_pk?: Maybe<Acme__Users>;
  /** delete data from the table: "learning_record" */
  delete_learning_record?: Maybe<Learning_Record_Mutation_Response>;
  /** delete single row from the table: "learning_record" */
  delete_learning_record_by_pk?: Maybe<Learning_Record>;
  /** delete data from the table: "link_token" */
  delete_link_token?: Maybe<Link_Token_Mutation_Response>;
  /** delete single row from the table: "link_token" */
  delete_link_token_by_pk?: Maybe<Link_Token>;
  /** delete data from the table: "tenant" */
  delete_tenant?: Maybe<Tenant_Mutation_Response>;
  /** delete single row from the table: "tenant" */
  delete_tenant_by_pk?: Maybe<Tenant>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "user_answer" */
  delete_user_answer?: Maybe<User_Answer_Mutation_Response>;
  /** delete single row from the table: "user_answer" */
  delete_user_answer_by_pk?: Maybe<User_Answer>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_enrollment" */
  delete_user_enrollment?: Maybe<User_Enrollment_Mutation_Response>;
  /** delete single row from the table: "user_enrollment" */
  delete_user_enrollment_by_pk?: Maybe<User_Enrollment>;
  /** delete data from the table: "user_question" */
  delete_user_question?: Maybe<User_Question_Mutation_Response>;
  /** delete single row from the table: "user_question" */
  delete_user_question_by_pk?: Maybe<User_Question>;
  /** insert data into the table: "acme-vib-staging.users" */
  insert_acme__users?: Maybe<Acme__Users_Mutation_Response>;
  /** insert a single row into the table: "acme-vib-staging.users" */
  insert_acme__users_one?: Maybe<Acme__Users>;
  /** insert data into the table: "learning_record" */
  insert_learning_record?: Maybe<Learning_Record_Mutation_Response>;
  /** insert a single row into the table: "learning_record" */
  insert_learning_record_one?: Maybe<Learning_Record>;
  /** insert data into the table: "link_token" */
  insert_link_token?: Maybe<Link_Token_Mutation_Response>;
  /** insert a single row into the table: "link_token" */
  insert_link_token_one?: Maybe<Link_Token>;
  /** insert data into the table: "tenant" */
  insert_tenant?: Maybe<Tenant_Mutation_Response>;
  /** insert a single row into the table: "tenant" */
  insert_tenant_one?: Maybe<Tenant>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_answer" */
  insert_user_answer?: Maybe<User_Answer_Mutation_Response>;
  /** insert a single row into the table: "user_answer" */
  insert_user_answer_one?: Maybe<User_Answer>;
  /** insert data into the table: "user_enrollment" */
  insert_user_enrollment?: Maybe<User_Enrollment_Mutation_Response>;
  /** insert a single row into the table: "user_enrollment" */
  insert_user_enrollment_one?: Maybe<User_Enrollment>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_question" */
  insert_user_question?: Maybe<User_Question_Mutation_Response>;
  /** insert a single row into the table: "user_question" */
  insert_user_question_one?: Maybe<User_Question>;
  /** update data of the table: "acme-vib-staging.users" */
  update_acme__users?: Maybe<Acme__Users_Mutation_Response>;
  /** update single row of the table: "acme-vib-staging.users" */
  update_acme__users_by_pk?: Maybe<Acme__Users>;
  /** update multiples rows of table: "acme-vib-staging.users" */
  update_acme__users_many?: Maybe<Array<Maybe<Acme__Users_Mutation_Response>>>;
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
  /** update data of the table: "tenant" */
  update_tenant?: Maybe<Tenant_Mutation_Response>;
  /** update single row of the table: "tenant" */
  update_tenant_by_pk?: Maybe<Tenant>;
  /** update multiples rows of table: "tenant" */
  update_tenant_many?: Maybe<Array<Maybe<Tenant_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update data of the table: "user_answer" */
  update_user_answer?: Maybe<User_Answer_Mutation_Response>;
  /** update single row of the table: "user_answer" */
  update_user_answer_by_pk?: Maybe<User_Answer>;
  /** update multiples rows of table: "user_answer" */
  update_user_answer_many?: Maybe<Array<Maybe<User_Answer_Mutation_Response>>>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_enrollment" */
  update_user_enrollment?: Maybe<User_Enrollment_Mutation_Response>;
  /** update single row of the table: "user_enrollment" */
  update_user_enrollment_by_pk?: Maybe<User_Enrollment>;
  /** update multiples rows of table: "user_enrollment" */
  update_user_enrollment_many?: Maybe<Array<Maybe<User_Enrollment_Mutation_Response>>>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_question" */
  update_user_question?: Maybe<User_Question_Mutation_Response>;
  /** update single row of the table: "user_question" */
  update_user_question_by_pk?: Maybe<User_Question>;
  /** update multiples rows of table: "user_question" */
  update_user_question_many?: Maybe<Array<Maybe<User_Question_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Acme__UsersArgs = {
  where: Acme__Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Acme__Users_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootDelete_TenantArgs = {
  where: Tenant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenant_By_PkArgs = {
  tenant_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_AnswerArgs = {
  where: User_Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Answer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_EnrollmentArgs = {
  where: User_Enrollment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Enrollment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_QuestionArgs = {
  where: User_Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Question_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Acme__UsersArgs = {
  objects: Array<Acme__Users_Insert_Input>;
  on_conflict?: InputMaybe<Acme__Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Acme__Users_OneArgs = {
  object: Acme__Users_Insert_Input;
  on_conflict?: InputMaybe<Acme__Users_On_Conflict>;
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
export type Mutation_RootInsert_TenantArgs = {
  objects: Array<Tenant_Insert_Input>;
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_OneArgs = {
  object: Tenant_Insert_Input;
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_AnswerArgs = {
  objects: Array<User_Answer_Insert_Input>;
  on_conflict?: InputMaybe<User_Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Answer_OneArgs = {
  object: User_Answer_Insert_Input;
  on_conflict?: InputMaybe<User_Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_EnrollmentArgs = {
  objects: Array<User_Enrollment_Insert_Input>;
  on_conflict?: InputMaybe<User_Enrollment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Enrollment_OneArgs = {
  object: User_Enrollment_Insert_Input;
  on_conflict?: InputMaybe<User_Enrollment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_QuestionArgs = {
  objects: Array<User_Question_Insert_Input>;
  on_conflict?: InputMaybe<User_Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Question_OneArgs = {
  object: User_Question_Insert_Input;
  on_conflict?: InputMaybe<User_Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Acme__UsersArgs = {
  _append?: InputMaybe<Acme__Users_Append_Input>;
  _delete_at_path?: InputMaybe<Acme__Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Acme__Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Acme__Users_Delete_Key_Input>;
  _inc?: InputMaybe<Acme__Users_Inc_Input>;
  _prepend?: InputMaybe<Acme__Users_Prepend_Input>;
  _set?: InputMaybe<Acme__Users_Set_Input>;
  where: Acme__Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Acme__Users_By_PkArgs = {
  _append?: InputMaybe<Acme__Users_Append_Input>;
  _delete_at_path?: InputMaybe<Acme__Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Acme__Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Acme__Users_Delete_Key_Input>;
  _inc?: InputMaybe<Acme__Users_Inc_Input>;
  _prepend?: InputMaybe<Acme__Users_Prepend_Input>;
  _set?: InputMaybe<Acme__Users_Set_Input>;
  pk_columns: Acme__Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Acme__Users_ManyArgs = {
  updates: Array<Acme__Users_Updates>;
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
export type Mutation_RootUpdate_TenantArgs = {
  _set?: InputMaybe<Tenant_Set_Input>;
  where: Tenant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_By_PkArgs = {
  _set?: InputMaybe<Tenant_Set_Input>;
  pk_columns: Tenant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_ManyArgs = {
  updates: Array<Tenant_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_AnswerArgs = {
  _set?: InputMaybe<User_Answer_Set_Input>;
  where: User_Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Answer_By_PkArgs = {
  _set?: InputMaybe<User_Answer_Set_Input>;
  pk_columns: User_Answer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Answer_ManyArgs = {
  updates: Array<User_Answer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_EnrollmentArgs = {
  _inc?: InputMaybe<User_Enrollment_Inc_Input>;
  _set?: InputMaybe<User_Enrollment_Set_Input>;
  where: User_Enrollment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Enrollment_By_PkArgs = {
  _inc?: InputMaybe<User_Enrollment_Inc_Input>;
  _set?: InputMaybe<User_Enrollment_Set_Input>;
  pk_columns: User_Enrollment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Enrollment_ManyArgs = {
  updates: Array<User_Enrollment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_QuestionArgs = {
  _inc?: InputMaybe<User_Question_Inc_Input>;
  _set?: InputMaybe<User_Question_Set_Input>;
  where: User_Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Question_By_PkArgs = {
  _inc?: InputMaybe<User_Question_Inc_Input>;
  _set?: InputMaybe<User_Question_Set_Input>;
  pk_columns: User_Question_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Question_ManyArgs = {
  updates: Array<User_Question_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
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
  /** fetch data from the table: "acme-vib-staging.users" */
  acme__users: Array<Acme__Users>;
  /** fetch aggregated fields from the table: "acme-vib-staging.users" */
  acme__users_aggregate: Acme__Users_Aggregate;
  /** fetch data from the table: "acme-vib-staging.users" using primary key columns */
  acme__users_by_pk?: Maybe<Acme__Users>;
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
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch aggregated fields from the table: "tenant" */
  tenant_aggregate: Tenant_Aggregate;
  /** fetch data from the table: "tenant" using primary key columns */
  tenant_by_pk?: Maybe<Tenant>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user_answer" */
  user_answer: Array<User_Answer>;
  /** fetch aggregated fields from the table: "user_answer" */
  user_answer_aggregate: User_Answer_Aggregate;
  /** fetch data from the table: "user_answer" using primary key columns */
  user_answer_by_pk?: Maybe<User_Answer>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_enrollment" */
  user_enrollment: Array<User_Enrollment>;
  /** fetch aggregated fields from the table: "user_enrollment" */
  user_enrollment_aggregate: User_Enrollment_Aggregate;
  /** fetch data from the table: "user_enrollment" using primary key columns */
  user_enrollment_by_pk?: Maybe<User_Enrollment>;
  /** fetch data from the table: "user_question" */
  user_question: Array<User_Question>;
  /** fetch aggregated fields from the table: "user_question" */
  user_question_aggregate: User_Question_Aggregate;
  /** fetch data from the table: "user_question" using primary key columns */
  user_question_by_pk?: Maybe<User_Question>;
};


export type Query_RootAcme__UsersArgs = {
  distinct_on?: InputMaybe<Array<Acme__Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Acme__Users_Order_By>>;
  where?: InputMaybe<Acme__Users_Bool_Exp>;
};


export type Query_RootAcme__Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Acme__Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Acme__Users_Order_By>>;
  where?: InputMaybe<Acme__Users_Bool_Exp>;
};


export type Query_RootAcme__Users_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Query_RootTenantArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Query_RootTenant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Query_RootTenant_By_PkArgs = {
  tenant_id: Scalars['String'];
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


export type Query_RootUser_AnswerArgs = {
  distinct_on?: InputMaybe<Array<User_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Answer_Order_By>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};


export type Query_RootUser_Answer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Answer_Order_By>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};


export type Query_RootUser_Answer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type Query_RootUser_EnrollmentArgs = {
  distinct_on?: InputMaybe<Array<User_Enrollment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Enrollment_Order_By>>;
  where?: InputMaybe<User_Enrollment_Bool_Exp>;
};


export type Query_RootUser_Enrollment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Enrollment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Enrollment_Order_By>>;
  where?: InputMaybe<User_Enrollment_Bool_Exp>;
};


export type Query_RootUser_Enrollment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_QuestionArgs = {
  distinct_on?: InputMaybe<Array<User_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Question_Order_By>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};


export type Query_RootUser_Question_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Question_Order_By>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};


export type Query_RootUser_Question_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "acme-vib-staging.users" */
  acme__users: Array<Acme__Users>;
  /** fetch aggregated fields from the table: "acme-vib-staging.users" */
  acme__users_aggregate: Acme__Users_Aggregate;
  /** fetch data from the table: "acme-vib-staging.users" using primary key columns */
  acme__users_by_pk?: Maybe<Acme__Users>;
  /** fetch data from the table in a streaming manner: "acme-vib-staging.users" */
  acme__users_stream: Array<Acme__Users>;
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
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch aggregated fields from the table: "tenant" */
  tenant_aggregate: Tenant_Aggregate;
  /** fetch data from the table: "tenant" using primary key columns */
  tenant_by_pk?: Maybe<Tenant>;
  /** fetch data from the table in a streaming manner: "tenant" */
  tenant_stream: Array<Tenant>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user_answer" */
  user_answer: Array<User_Answer>;
  /** fetch aggregated fields from the table: "user_answer" */
  user_answer_aggregate: User_Answer_Aggregate;
  /** fetch data from the table: "user_answer" using primary key columns */
  user_answer_by_pk?: Maybe<User_Answer>;
  /** fetch data from the table in a streaming manner: "user_answer" */
  user_answer_stream: Array<User_Answer>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_enrollment" */
  user_enrollment: Array<User_Enrollment>;
  /** fetch aggregated fields from the table: "user_enrollment" */
  user_enrollment_aggregate: User_Enrollment_Aggregate;
  /** fetch data from the table: "user_enrollment" using primary key columns */
  user_enrollment_by_pk?: Maybe<User_Enrollment>;
  /** fetch data from the table in a streaming manner: "user_enrollment" */
  user_enrollment_stream: Array<User_Enrollment>;
  /** fetch data from the table: "user_question" */
  user_question: Array<User_Question>;
  /** fetch aggregated fields from the table: "user_question" */
  user_question_aggregate: User_Question_Aggregate;
  /** fetch data from the table: "user_question" using primary key columns */
  user_question_by_pk?: Maybe<User_Question>;
  /** fetch data from the table in a streaming manner: "user_question" */
  user_question_stream: Array<User_Question>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootAcme__UsersArgs = {
  distinct_on?: InputMaybe<Array<Acme__Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Acme__Users_Order_By>>;
  where?: InputMaybe<Acme__Users_Bool_Exp>;
};


export type Subscription_RootAcme__Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Acme__Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Acme__Users_Order_By>>;
  where?: InputMaybe<Acme__Users_Bool_Exp>;
};


export type Subscription_RootAcme__Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAcme__Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Acme__Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Acme__Users_Bool_Exp>;
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


export type Subscription_RootTenantArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_By_PkArgs = {
  tenant_id: Scalars['String'];
};


export type Subscription_RootTenant_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tenant_Stream_Cursor_Input>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
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


export type Subscription_RootUser_AnswerArgs = {
  distinct_on?: InputMaybe<Array<User_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Answer_Order_By>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};


export type Subscription_RootUser_Answer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Answer_Order_By>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};


export type Subscription_RootUser_Answer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Answer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Answer_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_EnrollmentArgs = {
  distinct_on?: InputMaybe<Array<User_Enrollment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Enrollment_Order_By>>;
  where?: InputMaybe<User_Enrollment_Bool_Exp>;
};


export type Subscription_RootUser_Enrollment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Enrollment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Enrollment_Order_By>>;
  where?: InputMaybe<User_Enrollment_Bool_Exp>;
};


export type Subscription_RootUser_Enrollment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Enrollment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Enrollment_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Enrollment_Bool_Exp>;
};


export type Subscription_RootUser_QuestionArgs = {
  distinct_on?: InputMaybe<Array<User_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Question_Order_By>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};


export type Subscription_RootUser_Question_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Question_Order_By>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};


export type Subscription_RootUser_Question_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Question_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Question_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "tenant" */
export type Tenant = {
  __typename?: 'tenant';
  tenant_id: Scalars['String'];
  theme_id: Scalars['String'];
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "tenant" */
export type TenantUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "tenant" */
export type TenantUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "tenant" */
export type Tenant_Aggregate = {
  __typename?: 'tenant_aggregate';
  aggregate?: Maybe<Tenant_Aggregate_Fields>;
  nodes: Array<Tenant>;
};

/** aggregate fields of "tenant" */
export type Tenant_Aggregate_Fields = {
  __typename?: 'tenant_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tenant_Max_Fields>;
  min?: Maybe<Tenant_Min_Fields>;
};


/** aggregate fields of "tenant" */
export type Tenant_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenant_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tenant". All fields are combined with a logical 'AND'. */
export type Tenant_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_Bool_Exp>>;
  _not?: InputMaybe<Tenant_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_Bool_Exp>>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  theme_id?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<User_Bool_Exp>;
  users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tenant" */
export enum Tenant_Constraint {
  /** unique or primary key constraint on columns "tenant_id" */
  TenantPkey = 'tenant_pkey'
}

/** input type for inserting data into table "tenant" */
export type Tenant_Insert_Input = {
  tenant_id?: InputMaybe<Scalars['String']>;
  theme_id?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tenant_Max_Fields = {
  __typename?: 'tenant_max_fields';
  tenant_id?: Maybe<Scalars['String']>;
  theme_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tenant_Min_Fields = {
  __typename?: 'tenant_min_fields';
  tenant_id?: Maybe<Scalars['String']>;
  theme_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tenant" */
export type Tenant_Mutation_Response = {
  __typename?: 'tenant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant>;
};

/** input type for inserting object relation for remote table "tenant" */
export type Tenant_Obj_Rel_Insert_Input = {
  data: Tenant_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};

/** on_conflict condition type for table "tenant" */
export type Tenant_On_Conflict = {
  constraint: Tenant_Constraint;
  update_columns?: Array<Tenant_Update_Column>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};

/** Ordering options when selecting data from "tenant". */
export type Tenant_Order_By = {
  tenant_id?: InputMaybe<Order_By>;
  theme_id?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: tenant */
export type Tenant_Pk_Columns_Input = {
  tenant_id: Scalars['String'];
};

/** select columns of table "tenant" */
export enum Tenant_Select_Column {
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  ThemeId = 'theme_id'
}

/** input type for updating data in table "tenant" */
export type Tenant_Set_Input = {
  tenant_id?: InputMaybe<Scalars['String']>;
  theme_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tenant" */
export type Tenant_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tenant_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenant_Stream_Cursor_Value_Input = {
  tenant_id?: InputMaybe<Scalars['String']>;
  theme_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tenant" */
export enum Tenant_Update_Column {
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  ThemeId = 'theme_id'
}

export type Tenant_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tenant_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tenant_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
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
  created_at: Scalars['timestamptz'];
  daily_email_enabled: Scalars['Boolean'];
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
  /** An object relationship */
  next_question?: Maybe<User_Question>;
  next_user_question_id?: Maybe<Scalars['uuid']>;
  phone_number?: Maybe<Scalars['String']>;
  sms_enabled: Scalars['Boolean'];
  /** An object relationship */
  tenant?: Maybe<Tenant>;
  tenant_id: Scalars['String'];
  timezone: Scalars['String'];
  /** An array relationship */
  user_answers: Array<User_Answer>;
  /** An aggregate relationship */
  user_answers_aggregate: User_Answer_Aggregate;
  /** An array relationship */
  user_enrollments: Array<User_Enrollment>;
  /** An aggregate relationship */
  user_enrollments_aggregate: User_Enrollment_Aggregate;
  user_id: Scalars['uuid'];
  /** An array relationship */
  user_questions: Array<User_Question>;
  /** An aggregate relationship */
  user_questions_aggregate: User_Question_Aggregate;
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


/** columns and relationships of "user" */
export type UserUser_AnswersArgs = {
  distinct_on?: InputMaybe<Array<User_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Answer_Order_By>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Answers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Answer_Order_By>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_EnrollmentsArgs = {
  distinct_on?: InputMaybe<Array<User_Enrollment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Enrollment_Order_By>>;
  where?: InputMaybe<User_Enrollment_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Enrollments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Enrollment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Enrollment_Order_By>>;
  where?: InputMaybe<User_Enrollment_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<User_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Question_Order_By>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Question_Order_By>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Aggregate_Bool_Exp_Count>;
};

export type User_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Select_Column_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Select_Column_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
};

/** columns and relationships of "user_answer" */
export type User_Answer = {
  __typename?: 'user_answer';
  correct: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  question_id: Scalars['uuid'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
  /** An object relationship */
  user_question: User_Question;
};

/** aggregated selection of "user_answer" */
export type User_Answer_Aggregate = {
  __typename?: 'user_answer_aggregate';
  aggregate?: Maybe<User_Answer_Aggregate_Fields>;
  nodes: Array<User_Answer>;
};

export type User_Answer_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Answer_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Answer_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Answer_Aggregate_Bool_Exp_Count>;
};

export type User_Answer_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Answer_Select_Column_User_Answer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Answer_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Answer_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Answer_Select_Column_User_Answer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Answer_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Answer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Answer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Answer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_answer" */
export type User_Answer_Aggregate_Fields = {
  __typename?: 'user_answer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Answer_Max_Fields>;
  min?: Maybe<User_Answer_Min_Fields>;
};


/** aggregate fields of "user_answer" */
export type User_Answer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Answer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_answer" */
export type User_Answer_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Answer_Max_Order_By>;
  min?: InputMaybe<User_Answer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_answer" */
export type User_Answer_Arr_Rel_Insert_Input = {
  data: Array<User_Answer_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Answer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_answer". All fields are combined with a logical 'AND'. */
export type User_Answer_Bool_Exp = {
  _and?: InputMaybe<Array<User_Answer_Bool_Exp>>;
  _not?: InputMaybe<User_Answer_Bool_Exp>;
  _or?: InputMaybe<Array<User_Answer_Bool_Exp>>;
  correct?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  question_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_question?: InputMaybe<User_Question_Bool_Exp>;
};

/** unique or primary key constraints on table "user_answer" */
export enum User_Answer_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserAnswerPkey = 'user_answer_pkey'
}

/** input type for inserting data into table "user_answer" */
export type User_Answer_Insert_Input = {
  correct?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  question_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  user_question?: InputMaybe<User_Question_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Answer_Max_Fields = {
  __typename?: 'user_answer_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  question_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_answer" */
export type User_Answer_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Answer_Min_Fields = {
  __typename?: 'user_answer_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  question_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_answer" */
export type User_Answer_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_answer" */
export type User_Answer_Mutation_Response = {
  __typename?: 'user_answer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Answer>;
};

/** on_conflict condition type for table "user_answer" */
export type User_Answer_On_Conflict = {
  constraint: User_Answer_Constraint;
  update_columns?: Array<User_Answer_Update_Column>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};

/** Ordering options when selecting data from "user_answer". */
export type User_Answer_Order_By = {
  correct?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_question?: InputMaybe<User_Question_Order_By>;
};

/** primary key columns input for table: user_answer */
export type User_Answer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_answer" */
export enum User_Answer_Select_Column {
  /** column name */
  Correct = 'correct',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  UserId = 'user_id'
}

/** select "user_answer_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_answer" */
export enum User_Answer_Select_Column_User_Answer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Correct = 'correct'
}

/** select "user_answer_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_answer" */
export enum User_Answer_Select_Column_User_Answer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Correct = 'correct'
}

/** input type for updating data in table "user_answer" */
export type User_Answer_Set_Input = {
  correct?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  question_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "user_answer" */
export type User_Answer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Answer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Answer_Stream_Cursor_Value_Input = {
  correct?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  question_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_answer" */
export enum User_Answer_Update_Column {
  /** column name */
  Correct = 'correct',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  UserId = 'user_id'
}

export type User_Answer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Answer_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Answer_Bool_Exp;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  daily_email_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  language_preference?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  learning_records?: InputMaybe<Learning_Record_Bool_Exp>;
  learning_records_aggregate?: InputMaybe<Learning_Record_Aggregate_Bool_Exp>;
  link_tokens?: InputMaybe<Link_Token_Bool_Exp>;
  link_tokens_aggregate?: InputMaybe<Link_Token_Aggregate_Bool_Exp>;
  next_question?: InputMaybe<User_Question_Bool_Exp>;
  next_user_question_id?: InputMaybe<Uuid_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  sms_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  tenant?: InputMaybe<Tenant_Bool_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  user_answers?: InputMaybe<User_Answer_Bool_Exp>;
  user_answers_aggregate?: InputMaybe<User_Answer_Aggregate_Bool_Exp>;
  user_enrollments?: InputMaybe<User_Enrollment_Bool_Exp>;
  user_enrollments_aggregate?: InputMaybe<User_Enrollment_Aggregate_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_questions?: InputMaybe<User_Question_Bool_Exp>;
  user_questions_aggregate?: InputMaybe<User_Question_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UserPkey = 'user_pkey'
}

/** columns and relationships of "user_enrollment" */
export type User_Enrollment = {
  __typename?: 'user_enrollment';
  created_at: Scalars['timestamptz'];
  expiration_date: Scalars['date'];
  id: Scalars['uuid'];
  rank?: Maybe<Scalars['Int']>;
  score: Scalars['Int'];
  start_date: Scalars['date'];
  taxonomy_id: Scalars['String'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
  /** An array relationship */
  user_questions: Array<User_Question>;
  /** An aggregate relationship */
  user_questions_aggregate: User_Question_Aggregate;
};


/** columns and relationships of "user_enrollment" */
export type User_EnrollmentUser_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<User_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Question_Order_By>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};


/** columns and relationships of "user_enrollment" */
export type User_EnrollmentUser_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Question_Order_By>>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};

/** aggregated selection of "user_enrollment" */
export type User_Enrollment_Aggregate = {
  __typename?: 'user_enrollment_aggregate';
  aggregate?: Maybe<User_Enrollment_Aggregate_Fields>;
  nodes: Array<User_Enrollment>;
};

export type User_Enrollment_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Enrollment_Aggregate_Bool_Exp_Count>;
};

export type User_Enrollment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Enrollment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Enrollment_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_enrollment" */
export type User_Enrollment_Aggregate_Fields = {
  __typename?: 'user_enrollment_aggregate_fields';
  avg?: Maybe<User_Enrollment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Enrollment_Max_Fields>;
  min?: Maybe<User_Enrollment_Min_Fields>;
  stddev?: Maybe<User_Enrollment_Stddev_Fields>;
  stddev_pop?: Maybe<User_Enrollment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Enrollment_Stddev_Samp_Fields>;
  sum?: Maybe<User_Enrollment_Sum_Fields>;
  var_pop?: Maybe<User_Enrollment_Var_Pop_Fields>;
  var_samp?: Maybe<User_Enrollment_Var_Samp_Fields>;
  variance?: Maybe<User_Enrollment_Variance_Fields>;
};


/** aggregate fields of "user_enrollment" */
export type User_Enrollment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Enrollment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_enrollment" */
export type User_Enrollment_Aggregate_Order_By = {
  avg?: InputMaybe<User_Enrollment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Enrollment_Max_Order_By>;
  min?: InputMaybe<User_Enrollment_Min_Order_By>;
  stddev?: InputMaybe<User_Enrollment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Enrollment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Enrollment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Enrollment_Sum_Order_By>;
  var_pop?: InputMaybe<User_Enrollment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Enrollment_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Enrollment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_enrollment" */
export type User_Enrollment_Arr_Rel_Insert_Input = {
  data: Array<User_Enrollment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Enrollment_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Enrollment_Avg_Fields = {
  __typename?: 'user_enrollment_avg_fields';
  rank?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_enrollment" */
export type User_Enrollment_Avg_Order_By = {
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_enrollment". All fields are combined with a logical 'AND'. */
export type User_Enrollment_Bool_Exp = {
  _and?: InputMaybe<Array<User_Enrollment_Bool_Exp>>;
  _not?: InputMaybe<User_Enrollment_Bool_Exp>;
  _or?: InputMaybe<Array<User_Enrollment_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rank?: InputMaybe<Int_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  taxonomy_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_questions?: InputMaybe<User_Question_Bool_Exp>;
  user_questions_aggregate?: InputMaybe<User_Question_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user_enrollment" */
export enum User_Enrollment_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserEnrollmentPkey = 'user_enrollment_pkey'
}

/** input type for incrementing numeric columns in table "user_enrollment" */
export type User_Enrollment_Inc_Input = {
  rank?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_enrollment" */
export type User_Enrollment_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expiration_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  rank?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['date']>;
  taxonomy_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  user_questions?: InputMaybe<User_Question_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Enrollment_Max_Fields = {
  __typename?: 'user_enrollment_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expiration_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  rank?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  taxonomy_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_enrollment" */
export type User_Enrollment_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expiration_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Enrollment_Min_Fields = {
  __typename?: 'user_enrollment_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expiration_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  rank?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  taxonomy_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_enrollment" */
export type User_Enrollment_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expiration_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_enrollment" */
export type User_Enrollment_Mutation_Response = {
  __typename?: 'user_enrollment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Enrollment>;
};

/** input type for inserting object relation for remote table "user_enrollment" */
export type User_Enrollment_Obj_Rel_Insert_Input = {
  data: User_Enrollment_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Enrollment_On_Conflict>;
};

/** on_conflict condition type for table "user_enrollment" */
export type User_Enrollment_On_Conflict = {
  constraint: User_Enrollment_Constraint;
  update_columns?: Array<User_Enrollment_Update_Column>;
  where?: InputMaybe<User_Enrollment_Bool_Exp>;
};

/** Ordering options when selecting data from "user_enrollment". */
export type User_Enrollment_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expiration_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_questions_aggregate?: InputMaybe<User_Question_Aggregate_Order_By>;
};

/** primary key columns input for table: user_enrollment */
export type User_Enrollment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_enrollment" */
export enum User_Enrollment_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  Id = 'id',
  /** column name */
  Rank = 'rank',
  /** column name */
  Score = 'score',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  TaxonomyId = 'taxonomy_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_enrollment" */
export type User_Enrollment_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expiration_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  rank?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['date']>;
  taxonomy_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Enrollment_Stddev_Fields = {
  __typename?: 'user_enrollment_stddev_fields';
  rank?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_enrollment" */
export type User_Enrollment_Stddev_Order_By = {
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Enrollment_Stddev_Pop_Fields = {
  __typename?: 'user_enrollment_stddev_pop_fields';
  rank?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_enrollment" */
export type User_Enrollment_Stddev_Pop_Order_By = {
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Enrollment_Stddev_Samp_Fields = {
  __typename?: 'user_enrollment_stddev_samp_fields';
  rank?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_enrollment" */
export type User_Enrollment_Stddev_Samp_Order_By = {
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_enrollment" */
export type User_Enrollment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Enrollment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Enrollment_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expiration_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  rank?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['date']>;
  taxonomy_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Enrollment_Sum_Fields = {
  __typename?: 'user_enrollment_sum_fields';
  rank?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_enrollment" */
export type User_Enrollment_Sum_Order_By = {
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** update columns of table "user_enrollment" */
export enum User_Enrollment_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  Id = 'id',
  /** column name */
  Rank = 'rank',
  /** column name */
  Score = 'score',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  TaxonomyId = 'taxonomy_id',
  /** column name */
  UserId = 'user_id'
}

export type User_Enrollment_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Enrollment_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Enrollment_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Enrollment_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Enrollment_Var_Pop_Fields = {
  __typename?: 'user_enrollment_var_pop_fields';
  rank?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_enrollment" */
export type User_Enrollment_Var_Pop_Order_By = {
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Enrollment_Var_Samp_Fields = {
  __typename?: 'user_enrollment_var_samp_fields';
  rank?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_enrollment" */
export type User_Enrollment_Var_Samp_Order_By = {
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Enrollment_Variance_Fields = {
  __typename?: 'user_enrollment_variance_fields';
  rank?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_enrollment" */
export type User_Enrollment_Variance_Order_By = {
  rank?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  daily_email_enabled?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  learning_records?: InputMaybe<Learning_Record_Arr_Rel_Insert_Input>;
  link_tokens?: InputMaybe<Link_Token_Arr_Rel_Insert_Input>;
  next_question?: InputMaybe<User_Question_Obj_Rel_Insert_Input>;
  next_user_question_id?: InputMaybe<Scalars['uuid']>;
  phone_number?: InputMaybe<Scalars['String']>;
  sms_enabled?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Tenant_Obj_Rel_Insert_Input>;
  tenant_id?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  user_answers?: InputMaybe<User_Answer_Arr_Rel_Insert_Input>;
  user_enrollments?: InputMaybe<User_Enrollment_Arr_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  user_questions?: InputMaybe<User_Question_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  language_preference?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  next_user_question_id?: Maybe<Scalars['uuid']>;
  phone_number?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  language_preference?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  next_user_question_id?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  language_preference?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  next_user_question_id?: Maybe<Scalars['uuid']>;
  phone_number?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  language_preference?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  next_user_question_id?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  daily_email_enabled?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  language_preference?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  learning_records_aggregate?: InputMaybe<Learning_Record_Aggregate_Order_By>;
  link_tokens_aggregate?: InputMaybe<Link_Token_Aggregate_Order_By>;
  next_question?: InputMaybe<User_Question_Order_By>;
  next_user_question_id?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  sms_enabled?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Tenant_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  user_answers_aggregate?: InputMaybe<User_Answer_Aggregate_Order_By>;
  user_enrollments_aggregate?: InputMaybe<User_Enrollment_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_questions_aggregate?: InputMaybe<User_Question_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  user_id: Scalars['uuid'];
};

/** columns and relationships of "user_question" */
export type User_Question = {
  __typename?: 'user_question';
  active_on?: Maybe<Scalars['date']>;
  created_at: Scalars['timestamptz'];
  difficulty: Scalars['numeric'];
  id: Scalars['uuid'];
  last_answered_on?: Maybe<Scalars['date']>;
  latest_review_gap: Scalars['Int'];
  question_id: Scalars['String'];
  retired_on?: Maybe<Scalars['date']>;
  streak: Scalars['Int'];
  taxonomy_id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: User;
  /** An array relationship */
  user_answers: Array<User_Answer>;
  /** An aggregate relationship */
  user_answers_aggregate: User_Answer_Aggregate;
  /** An object relationship */
  user_enrollment: User_Enrollment;
  user_enrollment_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** columns and relationships of "user_question" */
export type User_QuestionUser_AnswersArgs = {
  distinct_on?: InputMaybe<Array<User_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Answer_Order_By>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};


/** columns and relationships of "user_question" */
export type User_QuestionUser_Answers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Answer_Order_By>>;
  where?: InputMaybe<User_Answer_Bool_Exp>;
};

/** aggregated selection of "user_question" */
export type User_Question_Aggregate = {
  __typename?: 'user_question_aggregate';
  aggregate?: Maybe<User_Question_Aggregate_Fields>;
  nodes: Array<User_Question>;
};

export type User_Question_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Question_Aggregate_Bool_Exp_Count>;
};

export type User_Question_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Question_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Question_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_question" */
export type User_Question_Aggregate_Fields = {
  __typename?: 'user_question_aggregate_fields';
  avg?: Maybe<User_Question_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Question_Max_Fields>;
  min?: Maybe<User_Question_Min_Fields>;
  stddev?: Maybe<User_Question_Stddev_Fields>;
  stddev_pop?: Maybe<User_Question_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Question_Stddev_Samp_Fields>;
  sum?: Maybe<User_Question_Sum_Fields>;
  var_pop?: Maybe<User_Question_Var_Pop_Fields>;
  var_samp?: Maybe<User_Question_Var_Samp_Fields>;
  variance?: Maybe<User_Question_Variance_Fields>;
};


/** aggregate fields of "user_question" */
export type User_Question_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Question_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_question" */
export type User_Question_Aggregate_Order_By = {
  avg?: InputMaybe<User_Question_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Question_Max_Order_By>;
  min?: InputMaybe<User_Question_Min_Order_By>;
  stddev?: InputMaybe<User_Question_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Question_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Question_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Question_Sum_Order_By>;
  var_pop?: InputMaybe<User_Question_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Question_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Question_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_question" */
export type User_Question_Arr_Rel_Insert_Input = {
  data: Array<User_Question_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Question_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Question_Avg_Fields = {
  __typename?: 'user_question_avg_fields';
  difficulty?: Maybe<Scalars['Float']>;
  latest_review_gap?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_question" */
export type User_Question_Avg_Order_By = {
  difficulty?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_question". All fields are combined with a logical 'AND'. */
export type User_Question_Bool_Exp = {
  _and?: InputMaybe<Array<User_Question_Bool_Exp>>;
  _not?: InputMaybe<User_Question_Bool_Exp>;
  _or?: InputMaybe<Array<User_Question_Bool_Exp>>;
  active_on?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  difficulty?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_answered_on?: InputMaybe<Date_Comparison_Exp>;
  latest_review_gap?: InputMaybe<Int_Comparison_Exp>;
  question_id?: InputMaybe<String_Comparison_Exp>;
  retired_on?: InputMaybe<Date_Comparison_Exp>;
  streak?: InputMaybe<Int_Comparison_Exp>;
  taxonomy_id?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_answers?: InputMaybe<User_Answer_Bool_Exp>;
  user_answers_aggregate?: InputMaybe<User_Answer_Aggregate_Bool_Exp>;
  user_enrollment?: InputMaybe<User_Enrollment_Bool_Exp>;
  user_enrollment_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_question" */
export enum User_Question_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserQuestionPkey = 'user_question_pkey'
}

/** input type for incrementing numeric columns in table "user_question" */
export type User_Question_Inc_Input = {
  difficulty?: InputMaybe<Scalars['numeric']>;
  latest_review_gap?: InputMaybe<Scalars['Int']>;
  streak?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_question" */
export type User_Question_Insert_Input = {
  active_on?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  difficulty?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_answered_on?: InputMaybe<Scalars['date']>;
  latest_review_gap?: InputMaybe<Scalars['Int']>;
  question_id?: InputMaybe<Scalars['String']>;
  retired_on?: InputMaybe<Scalars['date']>;
  streak?: InputMaybe<Scalars['Int']>;
  taxonomy_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_answers?: InputMaybe<User_Answer_Arr_Rel_Insert_Input>;
  user_enrollment?: InputMaybe<User_Enrollment_Obj_Rel_Insert_Input>;
  user_enrollment_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Question_Max_Fields = {
  __typename?: 'user_question_max_fields';
  active_on?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  difficulty?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  last_answered_on?: Maybe<Scalars['date']>;
  latest_review_gap?: Maybe<Scalars['Int']>;
  question_id?: Maybe<Scalars['String']>;
  retired_on?: Maybe<Scalars['date']>;
  streak?: Maybe<Scalars['Int']>;
  taxonomy_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_enrollment_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_question" */
export type User_Question_Max_Order_By = {
  active_on?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_answered_on?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  retired_on?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_enrollment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Question_Min_Fields = {
  __typename?: 'user_question_min_fields';
  active_on?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  difficulty?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  last_answered_on?: Maybe<Scalars['date']>;
  latest_review_gap?: Maybe<Scalars['Int']>;
  question_id?: Maybe<Scalars['String']>;
  retired_on?: Maybe<Scalars['date']>;
  streak?: Maybe<Scalars['Int']>;
  taxonomy_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_enrollment_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_question" */
export type User_Question_Min_Order_By = {
  active_on?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_answered_on?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  retired_on?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_enrollment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_question" */
export type User_Question_Mutation_Response = {
  __typename?: 'user_question_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Question>;
};

/** input type for inserting object relation for remote table "user_question" */
export type User_Question_Obj_Rel_Insert_Input = {
  data: User_Question_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Question_On_Conflict>;
};

/** on_conflict condition type for table "user_question" */
export type User_Question_On_Conflict = {
  constraint: User_Question_Constraint;
  update_columns?: Array<User_Question_Update_Column>;
  where?: InputMaybe<User_Question_Bool_Exp>;
};

/** Ordering options when selecting data from "user_question". */
export type User_Question_Order_By = {
  active_on?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_answered_on?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  retired_on?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_answers_aggregate?: InputMaybe<User_Answer_Aggregate_Order_By>;
  user_enrollment?: InputMaybe<User_Enrollment_Order_By>;
  user_enrollment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_question */
export type User_Question_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_question" */
export enum User_Question_Select_Column {
  /** column name */
  ActiveOn = 'active_on',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Id = 'id',
  /** column name */
  LastAnsweredOn = 'last_answered_on',
  /** column name */
  LatestReviewGap = 'latest_review_gap',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  RetiredOn = 'retired_on',
  /** column name */
  Streak = 'streak',
  /** column name */
  TaxonomyId = 'taxonomy_id',
  /** column name */
  Title = 'title',
  /** column name */
  UserEnrollmentId = 'user_enrollment_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_question" */
export type User_Question_Set_Input = {
  active_on?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  difficulty?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_answered_on?: InputMaybe<Scalars['date']>;
  latest_review_gap?: InputMaybe<Scalars['Int']>;
  question_id?: InputMaybe<Scalars['String']>;
  retired_on?: InputMaybe<Scalars['date']>;
  streak?: InputMaybe<Scalars['Int']>;
  taxonomy_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_enrollment_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Question_Stddev_Fields = {
  __typename?: 'user_question_stddev_fields';
  difficulty?: Maybe<Scalars['Float']>;
  latest_review_gap?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_question" */
export type User_Question_Stddev_Order_By = {
  difficulty?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Question_Stddev_Pop_Fields = {
  __typename?: 'user_question_stddev_pop_fields';
  difficulty?: Maybe<Scalars['Float']>;
  latest_review_gap?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_question" */
export type User_Question_Stddev_Pop_Order_By = {
  difficulty?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Question_Stddev_Samp_Fields = {
  __typename?: 'user_question_stddev_samp_fields';
  difficulty?: Maybe<Scalars['Float']>;
  latest_review_gap?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_question" */
export type User_Question_Stddev_Samp_Order_By = {
  difficulty?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_question" */
export type User_Question_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Question_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Question_Stream_Cursor_Value_Input = {
  active_on?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  difficulty?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_answered_on?: InputMaybe<Scalars['date']>;
  latest_review_gap?: InputMaybe<Scalars['Int']>;
  question_id?: InputMaybe<Scalars['String']>;
  retired_on?: InputMaybe<Scalars['date']>;
  streak?: InputMaybe<Scalars['Int']>;
  taxonomy_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_enrollment_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Question_Sum_Fields = {
  __typename?: 'user_question_sum_fields';
  difficulty?: Maybe<Scalars['numeric']>;
  latest_review_gap?: Maybe<Scalars['Int']>;
  streak?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_question" */
export type User_Question_Sum_Order_By = {
  difficulty?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
};

/** update columns of table "user_question" */
export enum User_Question_Update_Column {
  /** column name */
  ActiveOn = 'active_on',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Id = 'id',
  /** column name */
  LastAnsweredOn = 'last_answered_on',
  /** column name */
  LatestReviewGap = 'latest_review_gap',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  RetiredOn = 'retired_on',
  /** column name */
  Streak = 'streak',
  /** column name */
  TaxonomyId = 'taxonomy_id',
  /** column name */
  Title = 'title',
  /** column name */
  UserEnrollmentId = 'user_enrollment_id',
  /** column name */
  UserId = 'user_id'
}

export type User_Question_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Question_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Question_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Question_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Question_Var_Pop_Fields = {
  __typename?: 'user_question_var_pop_fields';
  difficulty?: Maybe<Scalars['Float']>;
  latest_review_gap?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_question" */
export type User_Question_Var_Pop_Order_By = {
  difficulty?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Question_Var_Samp_Fields = {
  __typename?: 'user_question_var_samp_fields';
  difficulty?: Maybe<Scalars['Float']>;
  latest_review_gap?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_question" */
export type User_Question_Var_Samp_Order_By = {
  difficulty?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Question_Variance_Fields = {
  __typename?: 'user_question_variance_fields';
  difficulty?: Maybe<Scalars['Float']>;
  latest_review_gap?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_question" */
export type User_Question_Variance_Order_By = {
  difficulty?: InputMaybe<Order_By>;
  latest_review_gap?: InputMaybe<Order_By>;
  streak?: InputMaybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DailyEmailEnabled = 'daily_email_enabled',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LanguagePreference = 'language_preference',
  /** column name */
  LastName = 'last_name',
  /** column name */
  NextUserQuestionId = 'next_user_question_id',
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

/** select "user_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user" */
export enum User_Select_Column_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  DailyEmailEnabled = 'daily_email_enabled',
  /** column name */
  SmsEnabled = 'sms_enabled'
}

/** select "user_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user" */
export enum User_Select_Column_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  DailyEmailEnabled = 'daily_email_enabled',
  /** column name */
  SmsEnabled = 'sms_enabled'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  daily_email_enabled?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  next_user_question_id?: InputMaybe<Scalars['uuid']>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  daily_email_enabled?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  language_preference?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  next_user_question_id?: InputMaybe<Scalars['uuid']>;
  phone_number?: InputMaybe<Scalars['String']>;
  sms_enabled?: InputMaybe<Scalars['Boolean']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DailyEmailEnabled = 'daily_email_enabled',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LanguagePreference = 'language_preference',
  /** column name */
  LastName = 'last_name',
  /** column name */
  NextUserQuestionId = 'next_user_question_id',
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

export type BaseLearningRecordFragment = { __typename: 'learning_record', created_at: TimestampTZ, data: Jsonb, event_type: string, id: Uuid, user_id: Uuid };

export type BaseLinkTokenFragment = { __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid };

export type UserWithActiveTokenFragment = { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }>, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null };

export type BaseUserFragment = { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null };

export type UserUnansweredQuestionsFragment = { __typename?: 'user', unanswered_questions: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } };

export type UserActiveQuestionsDataFragment = { __typename?: 'user', active_enrollments: { __typename?: 'user_enrollment_aggregate', aggregate?: { __typename?: 'user_enrollment_aggregate_fields', count: number } | null }, unanswered_questions: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } };

export type BaseUserAnswerFragment = { __typename: 'user_answer', id: Uuid, correct: boolean, created_at: TimestampTZ };

export type BaseUserEnrollmentFragment = { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate };

export type NotificationUserEnrollmentFragment = { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, user: { __typename?: 'user', user_id: Uuid, tenant_id: string, language_preference: string, email: string, first_name: string, last_name: string }, first_question: Array<{ __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } }> };

export type UserEnrollmentWithCountsFragment = { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, attempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, unattempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, retired: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, total: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } };

export type BaseUserQuestionFragment = { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } };

export type CreateLearningRecordMutationVariables = Exact<{
  learning_record: Learning_Record_Insert_Input;
}>;


export type CreateLearningRecordMutation = { __typename?: 'mutation_root', insert_learning_record_one?: { __typename: 'learning_record', created_at: TimestampTZ, data: Jsonb, event_type: string, id: Uuid, user_id: Uuid } | null };

export type CreateUserAnswerMutationVariables = Exact<{
  user_answer: User_Answer_Insert_Input;
}>;


export type CreateUserAnswerMutation = { __typename?: 'mutation_root', insert_user_answer_one?: { __typename: 'user_answer', id: Uuid, correct: boolean, created_at: TimestampTZ } | null };

export type EnrollUserMutationVariables = Exact<{
  userEnrollment: User_Enrollment_Insert_Input;
  tenantId: Scalars['String'];
}>;


export type EnrollUserMutation = { __typename?: 'mutation_root', insert_user_enrollment_one?: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, user: { __typename?: 'user', user_id: Uuid, tenant_id: string, language_preference: string, email: string, first_name: string, last_name: string }, first_question: Array<{ __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } }> } | null, insert_tenant_one?: { __typename?: 'tenant', tenant_id: string, theme_id: string } | null };

export type GenerateNewTokenMutationVariables = Exact<{
  userId: Scalars['uuid'];
  tenantId: Scalars['String'];
}>;


export type GenerateNewTokenMutation = { __typename?: 'mutation_root', update_link_token?: { __typename?: 'link_token_mutation_response', returning: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }> } | null, insert_link_token_one?: { __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid, user: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }>, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } } | null };

export type ResetUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type ResetUserMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null, delete_learning_record?: { __typename?: 'learning_record_mutation_response', affected_rows: number } | null, delete_user_enrollment?: { __typename?: 'user_enrollment_mutation_response', affected_rows: number } | null };

export type ToggleUserDailyEmailEnabledMutationVariables = Exact<{
  userId: Scalars['uuid'];
  daily_email_enabled?: InputMaybe<Scalars['Boolean']>;
}>;


export type ToggleUserDailyEmailEnabledMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null };

export type UnenrollUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
  enrollmentId: Scalars['uuid'];
}>;


export type UnenrollUserMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null, delete_user_enrollment?: { __typename?: 'user_enrollment_mutation_response', affected_rows: number } | null };

export type UpdateNextQuestionIdMutationVariables = Exact<{
  userId: Scalars['uuid'];
  nextUserQuestionId?: InputMaybe<Scalars['uuid']>;
}>;


export type UpdateNextQuestionIdMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
  set?: InputMaybe<User_Set_Input>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null };

export type UpdateUserEnrollmentMutationVariables = Exact<{
  id: Scalars['uuid'];
  set?: InputMaybe<User_Enrollment_Set_Input>;
  inc?: InputMaybe<User_Enrollment_Inc_Input>;
}>;


export type UpdateUserEnrollmentMutation = { __typename?: 'mutation_root', update_user_enrollment_by_pk?: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } | null };

export type UpdateUserEnrollmentsRanksMutationVariables = Exact<{
  enrollmentsUpdates: Array<User_Enrollment_Updates> | User_Enrollment_Updates;
}>;


export type UpdateUserEnrollmentsRanksMutation = { __typename?: 'mutation_root', update_user_enrollment_many?: Array<{ __typename?: 'user_enrollment_mutation_response', returning: Array<{ __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate }> } | null> | null };

export type UpdateUserQuestionMutationVariables = Exact<{
  id: Scalars['uuid'];
  set?: InputMaybe<User_Question_Set_Input>;
}>;


export type UpdateUserQuestionMutation = { __typename?: 'mutation_root', update_user_question_by_pk?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null };

export type UpsertUserMutationVariables = Exact<{
  user: User_Insert_Input;
  tenantId: Scalars['String'];
}>;


export type UpsertUserMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }>, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null, insert_tenant_one?: { __typename?: 'tenant', tenant_id: string, theme_id: string } | null };

export type GetActiveUserQuestionQueryVariables = Exact<{
  id: Scalars['uuid'];
  today: Scalars['date'];
}>;


export type GetActiveUserQuestionQuery = { __typename?: 'query_root', user_question: Array<{ __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } }> };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'query_root', user: Array<{ __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }>, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null }> };

export type GetLinkTokenQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetLinkTokenQuery = { __typename?: 'query_root', link_token_by_pk?: { __typename?: 'link_token', id: string, user_id: Uuid, tenant_id: string, created_at: TimestampTZ, active: boolean } | null };

export type GetNotificationEnrollmentsQueryVariables = Exact<{
  today: Scalars['date'];
}>;


export type GetNotificationEnrollmentsQuery = { __typename?: 'query_root', user_enrollment: Array<{ __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, user: { __typename?: 'user', user_id: Uuid, tenant_id: string, language_preference: string, email: string, first_name: string, last_name: string }, first_question: Array<{ __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } }> }> };

export type GetRankeableEnrollmentsQueryVariables = Exact<{
  taxonomyIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  tenantId: Scalars['String'];
}>;


export type GetRankeableEnrollmentsQuery = { __typename?: 'query_root', user_enrollment: Array<{ __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, user: { __typename?: 'user', first_name: string, last_name: string, tenant_id: string } }> };

export type GetTeamEnrollmentsQueryVariables = Exact<{
  enrollmentIds: Array<Scalars['uuid']> | Scalars['uuid'];
  accountSubdomain: Scalars['String'];
}>;


export type GetTeamEnrollmentsQuery = { __typename?: 'query_root', user_enrollment: Array<{ __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, user_questions_aggregate: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', max?: { __typename?: 'user_question_max_fields', last_answered_on?: ISODate | null } | null } | null }, attempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, unattempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, retired: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, total: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } }> };

export type GetTenantUserQueryVariables = Exact<{
  tenantId: Scalars['String'];
}>;


export type GetTenantUserQuery = { __typename?: 'query_root', user: Array<{ __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }>, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null }> };

export type GetTenantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTenantsQuery = { __typename?: 'query_root', tenant: Array<{ __typename?: 'tenant', tenant_id: string, users_aggregate: { __typename?: 'user_aggregate', aggregate?: { __typename?: 'user_aggregate_fields', count: number } | null } }> };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetUserQuery = { __typename?: 'query_root', user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }>, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null };

export type GetUserActiveQuestionsDataQueryVariables = Exact<{
  userId: Scalars['uuid'];
  today: Scalars['date'];
}>;


export type GetUserActiveQuestionsDataQuery = { __typename?: 'query_root', user_by_pk?: { __typename?: 'user', first_name: string, last_name: string, active_enrollments: { __typename?: 'user_enrollment_aggregate', aggregate?: { __typename?: 'user_enrollment_aggregate_fields', count: number } | null }, unanswered_questions: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } } | null };

export type GetUserDashboardQueryVariables = Exact<{
  userId: Scalars['uuid'];
  today: Scalars['date'];
  monthAgo: Scalars['timestamptz'];
}>;


export type GetUserDashboardQuery = { __typename?: 'query_root', user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, user_answers: Array<{ __typename: 'user_answer', id: Uuid, correct: boolean, created_at: TimestampTZ }>, active_user_enrollments: Array<{ __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, attempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, unattempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, retired: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, total: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } }>, completed_user_enrollments: Array<{ __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, attempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, unattempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, retired: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, total: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } }>, skills_attempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, total_skills: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, completed_enrollments: { __typename?: 'user_enrollment_aggregate', aggregate?: { __typename?: 'user_enrollment_aggregate_fields', count: number } | null }, total_enrollments: { __typename?: 'user_enrollment_aggregate', aggregate?: { __typename?: 'user_enrollment_aggregate_fields', count: number } | null }, retired_questions: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, total_questions: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null, active_enrollments: { __typename?: 'user_enrollment_aggregate', aggregate?: { __typename?: 'user_enrollment_aggregate_fields', count: number } | null }, unanswered_questions: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } } | null };

export type GetUserDataQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetUserDataQuery = { __typename?: 'query_root', user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, user_enrollments: Array<{ __typename?: 'user_enrollment', id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, expiration_date: ISODate, start_date: ISODate, user_questions_aggregate: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } }>, user_questions: Array<{ __typename?: 'user_question', id: Uuid, taxonomy_id: string, question_id: string, active_on?: ISODate | null, retired_on?: ISODate | null, last_answered_on?: ISODate | null, title?: string | null, user_enrollment: { __typename?: 'user_enrollment', id: Uuid, taxonomy_id: string }, user_answers: Array<{ __typename?: 'user_answer', id: Uuid, correct: boolean, created_at: TimestampTZ }>, user_answers_aggregate: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null } }>, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }>, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null };

export type GetUserEmailDataQueryVariables = Exact<{
  userId: Scalars['uuid'];
  today: Scalars['date'];
}>;


export type GetUserEmailDataQuery = { __typename?: 'query_root', user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, user_answers: Array<{ __typename?: 'user_answer', correct: boolean, created_at: TimestampTZ, id: Uuid, question_id: Uuid }>, user_question_activated_today: Array<{ __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } }>, user_enrollments: Array<{ __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate }>, active_tokens: Array<{ __typename: 'link_token', id: string, created_at: TimestampTZ, active: boolean, user_id: Uuid }>, active_enrollments: { __typename?: 'user_enrollment_aggregate', aggregate?: { __typename?: 'user_enrollment_aggregate_fields', count: number } | null }, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null, unanswered_questions: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } } | null };

export type GetUserEnrollmentQueryVariables = Exact<{
  id: Scalars['uuid'];
  today: Scalars['date'];
}>;


export type GetUserEnrollmentQuery = { __typename?: 'query_root', user_enrollment_by_pk?: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate, user_questions: Array<{ __typename?: 'user_question', id: Uuid, taxonomy_id: string, first_answer: Array<{ __typename?: 'user_answer', correct: boolean, id: Uuid, created_at: TimestampTZ }>, current_answer: Array<{ __typename?: 'user_answer', correct: boolean, id: Uuid, created_at: TimestampTZ }>, user_answers_aggregate: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null } }>, user: { __typename?: 'user', first_name: string, last_name: string, tenant_id: string, unanswered_questions: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } }, attempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, unattempted: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, retired: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null }, total: { __typename?: 'user_question_aggregate', aggregate?: { __typename?: 'user_question_aggregate_fields', count: number } | null } } | null };

export type GetUserLastActiveTokenQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetUserLastActiveTokenQuery = { __typename?: 'query_root', link_token: Array<{ __typename?: 'link_token', id: string, user_id: Uuid, tenant_id: string, created_at: TimestampTZ, active: boolean }> };

export type GetUserNextQuestionQueryVariables = Exact<{
  userId: Scalars['uuid'];
  today: Scalars['date'];
  where?: InputMaybe<User_Question_Bool_Exp>;
}>;


export type GetUserNextQuestionQuery = { __typename?: 'query_root', user_by_pk?: { __typename?: 'user', user_questions: Array<{ __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } }> } | null };

export type GetUserQuestionQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserQuestionQuery = { __typename?: 'query_root', user_question_by_pk?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null };

export type GetUserQuestionAnswersQueryVariables = Exact<{
  userId: Scalars['uuid'];
  questionId: Scalars['uuid'];
}>;


export type GetUserQuestionAnswersQuery = { __typename?: 'query_root', user_answer: Array<{ __typename: 'user_answer', id: Uuid, correct: boolean, created_at: TimestampTZ }> };

export type GetUserThemeQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetUserThemeQuery = { __typename?: 'query_root', user_by_pk?: { __typename?: 'user', tenant?: { __typename?: 'tenant', theme_id: string } | null } | null };

export type GetUserAnswersByWeekQueryVariables = Exact<{
  userId: Scalars['uuid'];
  start: Scalars['timestamptz'];
  end: Scalars['timestamptz'];
}>;


export type GetUserAnswersByWeekQuery = { __typename?: 'query_root', user_answer: Array<{ __typename: 'user_answer', id: Uuid, correct: boolean, created_at: TimestampTZ }> };

export type GetUsersForDailyEmailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersForDailyEmailQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', user_id: Uuid }> };

export type GetWeeklyStreakCalendarQueryVariables = Exact<{
  userId: Scalars['uuid'];
  monthAgo: Scalars['timestamptz'];
}>;


export type GetWeeklyStreakCalendarQuery = { __typename?: 'query_root', user_by_pk?: { __typename: 'user', tenant_id: string, email: string, first_name: string, last_name: string, language_preference: string, timezone: string, user_id: Uuid, sms_enabled: boolean, daily_email_enabled: boolean, user_answers: Array<{ __typename: 'user_answer', id: Uuid, correct: boolean, created_at: TimestampTZ }>, next_question?: { __typename: 'user_question', id: Uuid, user_id: Uuid, taxonomy_id: string, question_id: string, retired_on?: ISODate | null, active_on?: ISODate | null, created_at: TimestampTZ, streak: number, difficulty: Numeric, latest_review_gap: number, last_answered_on?: ISODate | null, attempts: { __typename?: 'user_answer_aggregate', aggregate?: { __typename?: 'user_answer_aggregate_fields', count: number } | null }, user_enrollment: { __typename: 'user_enrollment', id: Uuid, user_id: Uuid, taxonomy_id: string, created_at: TimestampTZ, score: number, rank?: number | null, start_date: ISODate, expiration_date: ISODate } } | null } | null };

export const BaseLearningRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<BaseLearningRecordFragment, unknown>;
export const BaseUserEnrollmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]} as unknown as DocumentNode<BaseUserEnrollmentFragment, unknown>;
export const BaseUserQuestionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]} as unknown as DocumentNode<BaseUserQuestionFragment, unknown>;
export const BaseUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}}]} as unknown as DocumentNode<BaseUserFragment, unknown>;
export const BaseLinkTokenFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<BaseLinkTokenFragment, unknown>;
export const UserWithActiveTokenFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<UserWithActiveTokenFragment, unknown>;
export const UserUnansweredQuestionsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserUnansweredQuestions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unanswered_questions"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}}]} as unknown as DocumentNode<UserUnansweredQuestionsFragment, unknown>;
export const UserActiveQuestionsDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActiveQuestionsData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserUnansweredQuestions"}},{"kind":"Field","alias":{"kind":"Name","value":"active_enrollments"},"name":{"kind":"Name","value":"user_enrollments_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserUnansweredQuestions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unanswered_questions"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}}]} as unknown as DocumentNode<UserActiveQuestionsDataFragment, unknown>;
export const BaseUserAnswerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserAnswer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_answer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]} as unknown as DocumentNode<BaseUserAnswerFragment, unknown>;
export const NotificationUserEnrollmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"first_question"},"name":{"kind":"Name","value":"user_questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}}]} as unknown as DocumentNode<NotificationUserEnrollmentFragment, unknown>;
export const UserEnrollmentWithCountsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEnrollmentWithCounts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}},{"kind":"Field","alias":{"kind":"Name","value":"attempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unattempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"retired"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"total"},"name":{"kind":"Name","value":"user_questions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]} as unknown as DocumentNode<UserEnrollmentWithCountsFragment, unknown>;
export const CreateLearningRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLearningRecord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"learning_record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_learning_record_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"learning_record"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLearningRecord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLearningRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"learning_record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"event_type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<CreateLearningRecordMutation, CreateLearningRecordMutationVariables>;
export const CreateUserAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_answer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_answer_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_answer_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_answer"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserAnswer"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserAnswer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_answer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]} as unknown as DocumentNode<CreateUserAnswerMutation, CreateUserAnswerMutationVariables>;
export const EnrollUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EnrollUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEnrollment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_enrollment_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEnrollment"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationUserEnrollment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_tenant_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tenant_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"tenant_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"theme_id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"first_question"},"name":{"kind":"Name","value":"user_questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}}]}}]} as unknown as DocumentNode<EnrollUserMutation, EnrollUserMutationVariables>;
export const GenerateNewTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateNewToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_link_token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_link_token_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tenant_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<GenerateNewTokenMutation, GenerateNewTokenMutationVariables>;
export const ResetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"next_user_question_id"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_learning_record"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_user_enrollment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}}]} as unknown as DocumentNode<ResetUserMutation, ResetUserMutationVariables>;
export const ToggleUserDailyEmailEnabledDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleUserDailyEmailEnabled"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daily_email_enabled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"daily_email_enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daily_email_enabled"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}}]} as unknown as DocumentNode<ToggleUserDailyEmailEnabledMutation, ToggleUserDailyEmailEnabledMutationVariables>;
export const UnenrollUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnenrollUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"next_user_question_id"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_user_enrollment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}}]} as unknown as DocumentNode<UnenrollUserMutation, UnenrollUserMutationVariables>;
export const UpdateNextQuestionIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNextQuestionId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextUserQuestionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"next_user_question_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextUserQuestionId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}}]} as unknown as DocumentNode<UpdateNextQuestionIdMutation, UpdateNextQuestionIdMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserEnrollmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserEnrollment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment_inc_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_enrollment_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inc"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]} as unknown as DocumentNode<UpdateUserEnrollmentMutation, UpdateUserEnrollmentMutationVariables>;
export const UpdateUserEnrollmentsRanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserEnrollmentsRanks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentsUpdates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment_updates"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_enrollment_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentsUpdates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]} as unknown as DocumentNode<UpdateUserEnrollmentsRanksMutation, UpdateUserEnrollmentsRanksMutationVariables>;
export const UpdateUserQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_question_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_question_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}}]} as unknown as DocumentNode<UpdateUserQuestionMutation, UpdateUserQuestionMutationVariables>;
export const UpsertUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"user_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"email"},{"kind":"EnumValue","value":"first_name"},{"kind":"EnumValue","value":"last_name"},{"kind":"EnumValue","value":"language_preference"},{"kind":"EnumValue","value":"phone_number"},{"kind":"EnumValue","value":"timezone"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_tenant_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tenant_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"tenant_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"theme_id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<UpsertUserMutation, UpsertUserMutationVariables>;
export const GetActiveUserQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveUserQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_question"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}}]} as unknown as DocumentNode<GetActiveUserQuestionQuery, GetActiveUserQuestionQueryVariables>;
export const GetAllUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<GetAllUserQuery, GetAllUserQueryVariables>;
export const GetLinkTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLinkToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_token_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetLinkTokenQuery, GetLinkTokenQueryVariables>;
export const GetNotificationEnrollmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotificationEnrollments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"first_question"},"name":{"kind":"Name","value":"user_questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}}]}}]} as unknown as DocumentNode<GetNotificationEnrollmentsQuery, GetNotificationEnrollmentsQueryVariables>;
export const GetRankeableEnrollmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRankeableEnrollments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taxonomyIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"taxonomy_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taxonomyIds"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tenant_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"score"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]} as unknown as DocumentNode<GetRankeableEnrollmentsQuery, GetRankeableEnrollmentsQueryVariables>;
export const GetTeamEnrollmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamEnrollments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountSubdomain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentIds"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tenant_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountSubdomain"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserEnrollmentWithCounts"}},{"kind":"Field","name":{"kind":"Name","value":"user_questions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEnrollmentWithCounts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}},{"kind":"Field","alias":{"kind":"Name","value":"attempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unattempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"retired"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"total"},"name":{"kind":"Name","value":"user_questions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamEnrollmentsQuery, GetTeamEnrollmentsQueryVariables>;
export const GetTenantUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTenantUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tenant_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<GetTenantUserQuery, GetTenantUserQueryVariables>;
export const GetTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTenants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tenant_id"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"users_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTenantsQuery, GetTenantsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserActiveQuestionsDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserActiveQuestionsData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActiveQuestionsData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserUnansweredQuestions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unanswered_questions"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActiveQuestionsData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserUnansweredQuestions"}},{"kind":"Field","alias":{"kind":"Name","value":"active_enrollments"},"name":{"kind":"Name","value":"user_enrollments_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}}]} as unknown as DocumentNode<GetUserActiveQuestionsDataQuery, GetUserActiveQuestionsDataQueryVariables>;
export const GetUserDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserDashboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"monthAgo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActiveQuestionsData"}},{"kind":"Field","name":{"kind":"Name","value":"user_answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"monthAgo"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserAnswer"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"active_user_enrollments"},"name":{"kind":"Name","value":"user_enrollments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}]}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserEnrollmentWithCounts"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"completed_user_enrollments"},"name":{"kind":"Name","value":"user_enrollments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}]}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserEnrollmentWithCounts"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"skills_attempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"taxonomy_id"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"last_answered_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"total_skills"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"taxonomy_id"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"completed_enrollments"},"name":{"kind":"Name","value":"user_enrollments_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}]}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"total_enrollments"},"name":{"kind":"Name","value":"user_enrollments_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"retired_questions"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"total_questions"},"name":{"kind":"Name","value":"user_questions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserUnansweredQuestions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unanswered_questions"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActiveQuestionsData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserUnansweredQuestions"}},{"kind":"Field","alias":{"kind":"Name","value":"active_enrollments"},"name":{"kind":"Name","value":"user_enrollments_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserAnswer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_answer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEnrollmentWithCounts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}},{"kind":"Field","alias":{"kind":"Name","value":"attempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unattempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"retired"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"total"},"name":{"kind":"Name","value":"user_questions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserDashboardQuery, GetUserDashboardQueryVariables>;
export const GetUserDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"user_questions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"EnumValue","value":"asc_nulls_first"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}}]} as unknown as DocumentNode<GetUserDataQuery, GetUserDataQueryVariables>;
export const GetUserEmailDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserEmailData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserWithActiveToken"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActiveQuestionsData"}},{"kind":"Field","name":{"kind":"Name","value":"user_answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"user_question_activated_today"},"name":{"kind":"Name","value":"user_questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseLinkToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"link_token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserUnansweredQuestions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unanswered_questions"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserWithActiveToken"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","alias":{"kind":"Name","value":"active_tokens"},"name":{"kind":"Name","value":"link_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseLinkToken"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActiveQuestionsData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserUnansweredQuestions"}},{"kind":"Field","alias":{"kind":"Name","value":"active_enrollments"},"name":{"kind":"Name","value":"user_enrollments_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_questions_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}}]} as unknown as DocumentNode<GetUserEmailDataQuery, GetUserEmailDataQueryVariables>;
export const GetUserEnrollmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserEnrollment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_enrollment_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserEnrollmentWithCounts"}},{"kind":"Field","name":{"kind":"Name","value":"user_questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","alias":{"kind":"Name","value":"first_answer"},"name":{"kind":"Name","value":"user_answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"current_answer"},"name":{"kind":"Name","value":"user_answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserUnansweredQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEnrollmentWithCounts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}},{"kind":"Field","alias":{"kind":"Name","value":"attempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unattempted"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_answers_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"0"}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"retired"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"total"},"name":{"kind":"Name","value":"user_questions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserUnansweredQuestions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unanswered_questions"},"name":{"kind":"Name","value":"user_questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}}]}}]} as unknown as DocumentNode<GetUserEnrollmentQuery, GetUserEnrollmentQueryVariables>;
export const GetUserLastActiveTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserLastActiveToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetUserLastActiveTokenQuery, GetUserLastActiveTokenQueryVariables>;
export const GetUserNextQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserNextQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_question_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"retired_on"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"where"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_on"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}}]} as unknown as DocumentNode<GetUserNextQuestionQuery, GetUserNextQuestionQueryVariables>;
export const GetUserQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_question_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}}]} as unknown as DocumentNode<GetUserQuestionQuery, GetUserQuestionQueryVariables>;
export const GetUserQuestionAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserQuestionAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_answer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"question_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserAnswer"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserAnswer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_answer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]} as unknown as DocumentNode<GetUserQuestionAnswersQuery, GetUserQuestionAnswersQueryVariables>;
export const GetUserThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserTheme"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme_id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserThemeQuery, GetUserThemeQueryVariables>;
export const GetUserAnswersByWeekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserAnswersByWeek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_answer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserAnswer"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserAnswer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_answer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]} as unknown as DocumentNode<GetUserAnswersByWeekQuery, GetUserAnswersByWeekQueryVariables>;
export const GetUsersForDailyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersForDailyEmail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"daily_email_enabled"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<GetUsersForDailyEmailQuery, GetUsersForDailyEmailQueryVariables>;
export const GetWeeklyStreakCalendarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWeeklyStreakCalendar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"monthAgo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUser"}},{"kind":"Field","name":{"kind":"Name","value":"user_answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"monthAgo"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserAnswer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserEnrollment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_enrollment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserQuestion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"retired_on"}},{"kind":"Field","name":{"kind":"Name","value":"active_on"}},{"kind":"Field","alias":{"kind":"Name","value":"attempts"},"name":{"kind":"Name","value":"user_answers_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"latest_review_gap"}},{"kind":"Field","name":{"kind":"Name","value":"last_answered_on"}},{"kind":"Field","name":{"kind":"Name","value":"user_enrollment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserEnrollment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tenant_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language_preference"}},{"kind":"Field","name":{"kind":"Name","value":"next_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserQuestion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"sms_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"daily_email_enabled"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserAnswer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user_answer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]} as unknown as DocumentNode<GetWeeklyStreakCalendarQuery, GetWeeklyStreakCalendarQueryVariables>;