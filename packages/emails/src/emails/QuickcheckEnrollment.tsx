import type { Taxon, UserData } from "quickcheck-shared";

import { QuickcheckEnrollmentEmail } from "../templates/QuickcheckEnrollmentEmail";
import { i18n } from "../utils/i18n";

const QuickcheckQuestionEmailPreview = () => {
  const t = i18n.getFixedT("en-us");

  return (
    <QuickcheckEnrollmentEmail
      enrollmentTaxonomy={enrollmentTaxonomyMock}
      t={t}
      loginUrl="https://example.com/token/TOKEN"
      questionId="questionId"
      userData={userData}
    />
  );
};

export default QuickcheckQuestionEmailPreview;

const userData: UserData = {
  unanswered_questions: 24,
  active_enrollments: 3,
  first_name: "Tim",
  last_name: "Johnson",
};

const enrollmentTaxonomyMock = {
  _version: 1,
  locale: "en-us",
  uid: "blt592c5251c4d441a1",
  ACL: {},
  _in_progress: false,
  created_at: "2023-07-26T19:08:22.448Z",
  created_by: "blt97eeb68c0ab9afcf",
  display_name: "Sprint Selling",
  parent_taxonomy: [],
  tags: ["ss"],
  title: "Sprint Selling",
  updated_at: "2023-07-26T19:08:22.448Z",
  updated_by: "blt97eeb68c0ab9afcf",
  publish_details: {
    environment: "blt1e7485ffdf16a13e",
    locale: "en-us",
    time: "2023-07-26T19:51:44.477Z",
    user: "blt97eeb68c0ab9afcf",
  },
  content_type: {
    title: "Taxonomy",
    description: "",
    options: {
      is_page: false,
      singleton: false,
      sub_title: [],
      title: "title",
    },
    schema: [
      {
        data_type: "text",
        display_name: "Title",
        field_metadata: { _default: true, version: 3 },
        mandatory: true,
        uid: "title",
        unique: true,
        multiple: false,
        non_localizable: false,
      },
      {
        data_type: "text",
        display_name: "Display Name",
        uid: "display_name",
        field_metadata: { description: "", default_value: "", version: 3 },
        format: "",
        error_messages: { format: "" },
        mandatory: true,
        multiple: false,
        non_localizable: false,
        unique: false,
      },
      {
        data_type: "reference",
        display_name: "Parent Taxonomy",
        reference_to: ["taxon_bottom_up"],
        field_metadata: {
          ref_multiple: false,
          ref_multiple_content_types: true,
        },
        uid: "parent_taxonomy",
        mandatory: false,
        multiple: false,
        non_localizable: false,
        unique: false,
      },
    ],
    uid: "taxon_bottom_up",
    DEFAULT_ACL: { others: { read: false, create: false }, users: [] },
    SYS_ACL: {
      others: {
        read: false,
        create: false,
        update: false,
        delete: false,
        sub_acl: {
          read: false,
          create: false,
          update: false,
          delete: false,
          publish: false,
        },
      },
      roles: [],
    },
    created_at: "2023-06-21T20:04:24.985Z",
    updated_at: "2023-07-19T19:28:33.298Z",
    inbuilt_class: false,
    abilities: {
      get_one_object: true,
      get_all_objects: true,
      create_object: true,
      update_object: true,
      delete_object: true,
      delete_all_objects: true,
    },
    last_activity: {},
    maintain_revisions: true,
    _version: 8,
  },
} as Taxon;
