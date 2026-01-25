
export async function handler(event, context) {
  const postId = event.queryStringParameters.id;
// const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
// const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;
console.log("test");
  return {
    statusCode: 200,
    body: JSON.stringify(post),
  };
}