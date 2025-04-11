import { FrontMatterCache, Notice } from "obsidian";

export const hasPublishFlag = (frontMatter?: FrontMatterCache): boolean =>
	!!frontMatter?.["quartz-publish"];

export function isPublishFrontmatterValid(
	frontMatter?: FrontMatterCache,
): boolean {
	if (!hasPublishFlag(frontMatter)) {
		new Notice(
			"Note does not have the quartz-publish: true set. Please add this and try again.",
		);

		return false;
	}

	return true;
}
