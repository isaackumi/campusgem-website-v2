import type { StructureResolver } from "sanity/structure";
import { pageOptions } from "./lib/lists";

const SINGLETONS = [
  { type: "siteSettings", title: "Site Settings", id: "siteSettings" },
  { type: "confession", title: "Daily Confession", id: "confession" },
  { type: "pastor", title: "Senior Pastor", id: "pastor" },
  { type: "givePage", title: "Give Page", id: "givePage" },
] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Campus GEM")
    .items([
      ...SINGLETONS.map((item) =>
        S.listItem()
          .title(item.title)
          .id(item.id)
          .child(
            S.document()
              .schemaType(item.type)
              .documentId(item.id)
              .title(item.title),
          ),
      ),
      S.divider(),
      S.listItem()
        .title("Pages by route")
        .child(
          S.list()
            .title("Pages")
            .items(
              pageOptions.map((page) =>
                S.listItem()
                  .title(page.title)
                  .child(
                    S.documentList()
                      .title(page.title)
                      .filter('_type == "sitePage" && pageKey == $key')
                      .params({ key: page.value }),
                  ),
              ),
            ),
        ),
      S.documentTypeListItem("sitePage").title("All site pages"),
      S.documentTypeListItem("activityPage").title("Activity pages"),
      S.divider(),
      S.documentTypeListItem("galleryAlbum").title("Gallery albums"),
    ]);
