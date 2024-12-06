/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly CURSEFORGE_API_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }