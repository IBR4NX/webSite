// netlify/functions/get-post.js
import { neon } from "@netlify/neon";

export const handler = async (event) => {
  const sql = neon(); // يستخدم تلقائيًا NETLIFY_DATABASE_URL من env
  const postId = event.queryStringParameters.id;

  try {
    const [post] = await sql`SELECT * FROM playing_with_neon`;
    return {
      statusCode: 200,
      body: JSON.stringify(post),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
