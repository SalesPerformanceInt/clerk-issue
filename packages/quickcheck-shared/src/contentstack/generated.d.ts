export interface File {
  uid: string
  created_at: string
  updated_at: string
  created_by: string
  updated_by: string
  content_type: string
  file_size: string
  tags: string[]
  filename: string
  url: string
  ACL: any[]
  is_dir: boolean
  parent_uid: string
  _version: number
  title: string
  publish_details: {
    environment: string
    locale: string
    time: string
    user: string
  }
}

export interface Link {
  title: string
  href: string
}

export interface TaxonBottomUp {
  /** Title */
  title: string
  /** Parent Taxonomies */
  parent_taxonomy?: TaxonBottomUp[]
}

export interface Questionitem {
  /** Title */
  title: string
  /** Variants */
  variants?: (
    | {
        mcquestion: {
          /** Prompt */ prompt: string
          /** Video File */
          video_file?: File
          /** Video Caption File */
          video_caption_file?: File
          /** Stem */
          stem: string
          /** Instruction */
          instruction?: string
          /** Choices */
          choices?: {
            choice: {
              /** Correct */ correct?: boolean
              /** Points */
              points?: number
              /** Body */
              body?: string
              /** Feedback */
              feedback?: string
            }
          }[]
        }
        tfquestion: undefined
        fillblanksquestion: undefined
        reorderlistquestion: undefined
      }
    | {
        tfquestion: {
          /** Prompt */ prompt?: string
          /** Video File */
          video_file?: File
          /** Video Caption File */
          video_caption_file?: File
          /** Stem */
          stem?: string
          /** Instruction */
          instruction?: string
          /** Truthy Label */
          truthy_label?: string
          /** Falsey Label */
          falsey_label?: string
          /** Correct */
          correct?: boolean
          /** Points */
          points?: number
          /** Correct Feedback */
          feedback?: string
          /** Incorrect Feedback */
          incorrect_feedback?: string
        }
        mcquestion: undefined
        fillblanksquestion: undefined
        reorderlistquestion: undefined
      }
    | {
        fillblanksquestion: {
          /** Prompt */ prompt?: string
          /** Instruction */
          instruction?: string
          /** Correct Feedback */
          feedback?: string
          /** Incorrect Feedback */
          incorrect_feedback?: string
          /** Stem */
          stem?: string
          /** Draggable Words */
          draggable_words?: {
            draggable_word: {
              /** Word */ word?: string
              /** Order */
              order?: number
            }
          }[]
        }
        mcquestion: undefined
        tfquestion: undefined
        reorderlistquestion: undefined
      }
    | {
        reorderlistquestion: {
          /** Prompt */ prompt?: string
          /** Stem */
          stem?: string
          /** Instruction */
          instruction?: string
          /** Correct Feedback */
          feedback?: string
          /** Incorrect Feedback */
          incorrect_feedback?: string
          /** List */
          list?: {
            item: {
              /** Text */ text?: string
              /** Order */
              order?: number
            }
          }[]
        }
        mcquestion: undefined
        tfquestion: undefined
        fillblanksquestion: undefined
      }
  )[]
  /** Taxonomy */
  taxonomy?: TaxonBottomUp[]
  /** Client List */
  client_list?: ("schneider" | "ing" | "comcast")[]
}

export interface Item {
  /** Title */
  title: string
  /** Taxonomy */
  taxonomy?: Taxon[]
  /** Passive Learning */
  passive_learning?: {
    /** Passive Content Block */
    passive_content_block?: string
    /** Video Explainer Prompt */
    video_explainer_prompt?: string
    /** Video Explainer File */
    video_explainer_file?: File
    /** Video Explainer Closed Caption File */
    video_explainer_closed_caption_file?: File
    /** Video Explainer Text Caption */
    video_explainer_text_caption?: string
  }
  /** Multiple Choice */
  multiple_choice?: {
    /** MC Prompt */
    mc_prompt?: string
    /** MC Stem */
    mc_stem?: string
    /** MC Instruction */
    mc_instruction?: string
  }
  /** Multiple Choice Choices */
  multiple_choice_choices?: (
    | {
        mc_choice_answer: {
          /** MC Choice Answer Text */ mc_choice_answer_text?: string
          /** MC Choice Answer Points */
          mc_choice_answer_points?: number
        }
        mc_choice_detractor: undefined
      }
    | {
        mc_choice_detractor: {
          /** MC Choice Detractor Text */ mc_choice_detractor_text?: string
          /** MC Choice Detractor Points */
          mc_choice_detractor_points?: number
        }
        mc_choice_answer: undefined
      }
  )[]
  /** Categorization */
  categorization?: {
    /** Cat Prompt */
    cat_prompt?: string
    /** Cat Stem */
    cat_stem?: string
    /** Cat Instruction */
    cat_instruction?: string
    /** Cat Answer */
    cat_answer?: string
    /** Cat Answer Points */
    cat_answer_points?: number
    /** Cat Detractor */
    cat_detractor?: string
    /** Cat Detractor Points */
    cat_detractor_points?: number
  }
  /** True/False Statement */
  true_false_statement?: {
    /** TF Prompt */
    tf_prompt?: string
    /** TF Stem */
    tf_stem?: string
    /** TF Instruction */
    tf_instruction?: string
    /** TF is true */
    tf_is_true?: boolean
    /** TF Points */
    tf_points?: number
  }
  /** Concept */
  concept?: {
    /** Concept Prompt */
    concept_prompt?: string
    /** Concept Stem */
    concept_stem?: string
    /** Concept Instruction */
    concept_instruction?: string
    /** Concept Points */
    concept_points?: number
  }
  /** Concept Words */
  concept_words?: {
    concept_word_choice: {
      /** Concept Word Choice Answer */ concept_word_choice_answer?: string
      /** Concept Word Choice Detractor */
      concept_word_choice_detractor?: string
    }
  }[]
  /** Matching */
  matching?: {
    /** Matching Prompt */
    matching_prompt?: string
    /** Matching Instruction */
    matching_instruction?: string
    /** Matching Points */
    matching_points?: number
  }
  /** Matching Pairs */
  matching_pairs?: (
    | {
        matching_pair_choice: {
          /** Matching Pair Choice A */ matching_pair_choice_a?: string
          /** Matching Pair Choice B */
          matching_pair_choice_b?: string
        }
        matching_detractors: undefined
      }
    | {
        matching_detractors: {
          /** Matching Detractor Text */ matching_detractor_text?: string
        }
        matching_pair_choice: undefined
      }
  )[]
  /** Ordering */
  ordering?: {
    /** Ordering Prompt */
    ordering_prompt?: string
    /** Ordering Stem */
    ordering_stem?: string
    /** Ordering Instruction */
    ordering_instruction?: string
  }
  /** Ordering Entries */
  ordering_entries?: {
    ordering_entry: {
      /** Ordering Entry Text */ ordering_entry_text?: string
      /** Ordering Entry Order */
      ordering_entry_order?: number
    }
  }[]
}

export interface ItemModularNested {
  /** Title */
  title: string
  /** taxonomy */
  taxonomy?: Taxon[]
  /** Active Learning Variants */
  modular_blocks?: (
    | {
        mc_question: {
          /** MC Prompt */ mc_prompt?: string
          /** MC Stem */
          mc_stem?: string
          /** MC Instruction */
          mc_instruction?: string
          /** MC Answers */
          mc_answers?: {
            mc_answer_choice: {
              /** MC Answer Choice Text */ mc_answer_choice_text?: string
              /** MC Answer Choice Points */
              mc_answer_choice_points?: number
            }
          }[]
          /** MC Detractors */
          mc_detractors?: {
            mc_detractor_choice: {
              /** MC Detractor Choice Text */ mc_detractor_choice_text?: string
              /** MC Detractor Choice Points */
              mc_detractor_choice_points?: number
            }
          }[]
        }
        tf_question: undefined
        concept: undefined
        categorisation: undefined
        matching: undefined
        ordering: undefined
      }
    | {
        tf_question: {
          /** TF Prompt */ tf_prompt?: string
          /** TF Instruction */
          tf_instruction?: string
          /** TF Stems */
          tf_stems?: {
            tf_stem_choice: {
              /** TF Stem Choice Text */ tf_stem_choice_text?: string
              /** TF Stem Choice True */
              tf_stem_choice_true?: boolean
            }
          }[]
        }
        mc_question: undefined
        concept: undefined
        categorisation: undefined
        matching: undefined
        ordering: undefined
      }
    | {
        concept: {
          /** Concept Prompt */ concept_prompt?: string
          /** Concept Stem */
          concept_stem?: string
          /** Concept Instruction */
          concept_instruction?: string
          /** Concept Words */
          concept_words?: {
            concept_word_choice: {
              /** Concept Word Choice Text */ concept_word_choice_text?: string
              /** Concept Word Choice Antonym */
              concept_word_choice_antonym?: string
            }
          }[]
        }
        mc_question: undefined
        tf_question: undefined
        categorisation: undefined
        matching: undefined
        ordering: undefined
      }
    | {
        categorisation: {
          /** Categorisation Prompt */ categorisation_prompt?: string
          /** Categorisation Stem */
          categorisation_stem?: string
          /** Categorisation Instruction */
          categorisation_instruction?: string
          /** Cat - Options */
          cat_options?: {
            cat_option: {
              /** Cat Option Text */ cat_option_text?: string
              /** Cat Option Scoring */
              cat_option_scoring?: number
            }
          }[]
        }
        mc_question: undefined
        tf_question: undefined
        concept: undefined
        matching: undefined
        ordering: undefined
      }
    | {
        matching: {
          /** Matching Prompt */ matching_prompt?: string
          /** Matching Instruction */
          matching_instruction?: string
          /** Matching Pairs */
          matching_pairs?: (
            | {
                matching_pair_choice: {
                  /** Matching Pair Choice A */ matching_pair_choice_a?: string
                  /** Matching Pair Choice B */
                  matching_pair_choice_b?: string
                }
                matching_pair_detractors: undefined
              }
            | {
                matching_pair_detractors: {
                  /** Matching Pair Detractor Text */
                  matching_pair_detractor_text?: string
                }
                matching_pair_choice: undefined
              }
          )[]
        }
        mc_question: undefined
        tf_question: undefined
        concept: undefined
        categorisation: undefined
        ordering: undefined
      }
    | {
        ordering: {
          /** Ordering Prompt */ ordering_prompt?: string
          /** Ordering Stem */
          ordering_stem?: string
          /** Ordering Instruction */
          ordering_instruction?: string
          /** Ordering Options */
          ordering_options?: {
            ordering_option: {
              /** Ordering Option Text */ ordering_option_text?: string
              /** Ordering Option Order */
              ordering_option_order: number
            }
          }[]
        }
        mc_question: undefined
        tf_question: undefined
        concept: undefined
        categorisation: undefined
        matching: undefined
      }
  )[]
}
