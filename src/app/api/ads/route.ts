export async function GET() {
  return new Response(
    "google.com, pub-3092122239410917, DIRECT, f08c47fec0942fa0",
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
