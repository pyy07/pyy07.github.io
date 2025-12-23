import { getArticles } from '@/lib/articles';

export async function GET() {
  const articles = await getArticles();

  return new Response(JSON.stringify(articles), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
