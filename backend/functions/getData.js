import { neon } from '@netlify/neon';
export async function handler(event, context) {
  const postId = event.queryStringParameters.id;
const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;
  return {
    statusCode: 200,
    body: JSON.stringify(post),
  };
}