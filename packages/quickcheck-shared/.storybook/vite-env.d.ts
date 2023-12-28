/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly STORYBOOK_QC_CONTENTSTACK_STACK_KEY: string;
  readonly STORYBOOK_QC_CONTENTSTACK_DELIVERY_TOKEN: string;
  readonly STORYBOOK_QC_CONTENTSTACK_ENVIRONMENT: string;
  readonly STORYBOOK_QC_CONTENTSTACK_TRANSLATION_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
