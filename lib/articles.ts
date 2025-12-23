import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ArticleMeta {
  title: string;
  date?: string;
  description?: string;
}

interface Article extends ArticleMeta {
  slug: string;
  content?: string;
}

const articlesDir = path.join(process.cwd(), 'articles');

export async function getArticles(): Promise<Article[]> {
  try {
    const files = await fs.readdir(articlesDir);
    const articles: Article[] = [];

    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      
      const slug = file.replace('.md', '');
      const filePath = path.join(articlesDir, file);
      
      try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data } = matter(fileContent);
        
        articles.push({
          slug,
          title: data.title || slug,
          date: data.date,
          description: data.description,
        });
      } catch (error) {
        console.error(`Error reading article ${file}:`, error);
      }
    }

    // Sort by date, newest first
    return articles.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error reading articles directory:', error);
    return [];
  }
}

export async function getArticleContent(slug: string): Promise<Article | null> {
  try {
    const filePath = path.join(articlesDir, `${slug}.md`);
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date,
        description: data.description,
        content,
      };
    } catch (error) {
      console.error(`File not found: ${filePath}`);
      return null;
    }
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}
