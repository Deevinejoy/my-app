import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const slug: string = params.slug;
  const site = "discreetnarcotics.wordpress.com"; // your actual site here

  try {
    const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/slug:${slug}`);

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}
