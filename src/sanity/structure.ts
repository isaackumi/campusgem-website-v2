import type { StructureResolver } from "sanity/structure";
import { activityOptions, pageOptions, portalYears } from "./lib/lists";

const SINGLETONS = [
  { type: "siteSettings", title: "Site Settings", id: "siteSettings" },
  { type: "confession", title: "Daily Confession", id: "confession" },
  { type: "pastor", title: "Senior Pastor", id: "pastor" },
  { type: "givePage", title: "Give Page", id: "givePage" },
  { type: "hallOfFame", title: "Hall of Fame", id: "hallOfFame" },
  { type: "marriagesPage", title: "CGM Marriages", id: "marriagesPage" },
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
                  .id(`page-${page.value}`)
                  .child(
                    S.document()
                      .schemaType("sitePage")
                      .documentId(`page-${page.value}`)
                      .title(page.title),
                  ),
              ),
            ),
        ),
      S.listItem()
        .title("Activity pages")
        .child(
          S.list()
            .title("Activities")
            .items(
              activityOptions
                .filter((activity) => activity.value !== "other")
                .map((activity) =>
                  S.listItem()
                    .title(activity.title)
                    .id(`activity-${activity.value}`)
                    .child(
                      S.document()
                        .schemaType("activityPage")
                        .documentId(`activity-${activity.value}`)
                        .title(activity.title),
                    ),
                ),
            ),
        ),
      S.divider(),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("sermon").title("Sermons"),
      S.documentTypeListItem("ministry").title("Ministries"),
      S.divider(),
      S.listItem()
        .title("Gallery by year")
        .child(
          S.list()
            .title("Years on the portal")
            .items(
              portalYears.map((year) =>
                S.listItem()
                  .title(String(year))
                  .id(`gallery-year-${year}`)
                  .child(
                    S.documentList()
                      .title(`${year} albums`)
                      .filter('_type == "galleryAlbum" && kind == "year" && year == $year')
                      .params({ year }),
                  ),
              ),
            ),
        ),
      S.documentTypeListItem("galleryAlbum").title("All gallery albums"),
    ]);
