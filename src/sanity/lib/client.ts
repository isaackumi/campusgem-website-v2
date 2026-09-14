import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: projectId || "missing",
  dataset,
  apiVersion,
  // Gallery and CMS pages need fresh reads after Studio publishes.
  useCdn: false,
});
