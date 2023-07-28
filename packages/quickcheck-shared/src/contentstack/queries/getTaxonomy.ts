import type { Taxon } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

export async function getTaxonomy(this: ContentStackSDKClient, uid: string) {
  try {
    const contentType = this.client.ContentType("taxon_bottom_up");

    const entry = contentType.Entry(uid).includeContentType().toJSON();
    return (await entry.fetch()) as Taxon;
  } catch (error) {
    console.log("ERROR - getTaxonomy", error);
    return null;
  }
}
