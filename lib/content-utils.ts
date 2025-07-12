import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkHtml from 'remark-html';
import { remark } from 'remark';

interface ContentItem {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  htmlContent: string;
  [key: string]: any; // Allow for other metadata like github, demo, featured, readTime
}

export async function getMarkdownFiles(directoryPath: string): Promise<ContentItem[]> {
  const filesDirectory = path.join(process.cwd(), directoryPath);
  const fileNames = fs.readdirSync(filesDirectory);

  const allContent = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.(mdx|md)$/, '');
        const fullPath = path.join(filesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the frontmatter and content
        const matterResult = matter(fileContents);
        const metadata = matterResult.data;
        const content = matterResult.content;

        // Use remark to convert markdown to HTML
        const processedContent = await remark().use(remarkHtml).process(content);
        const htmlContent = processedContent.toString();

        // Ensure date is a string, default if missing (though we've added it)
        const date = metadata.date ? new Date(metadata.date).toISOString() : '';

        return {
          slug,
          title: metadata.title || '',
          date,
          tags: metadata.tags || [],
          description: metadata.description || '',
          htmlContent,
          ...metadata, // Spread other metadata like github, demo, featured, readTime
        };
      })
  );

  // Sort content by date in descending order
  allContent.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return allContent;
}
