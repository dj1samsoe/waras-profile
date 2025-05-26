import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  const apiKey = process.env.MAPS_API_KEY;
  const placeId = process.env.MAPS_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Missing API Key or Place ID" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name&key=${apiKey}`,
      {
        cache: "force-cache",
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; AcmeInc/1.0)",
          "Accept-Language": "id",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Fetch failed" },
        { status: res.status }
      );
    }

    const data = await res.json();
    console.log("🚀🚀DATA RESULT :", data);

    if (data.status !== "OK") {
      return NextResponse.json({ error: data.status }, { status: 500 });
    }

    return NextResponse.json({
      name: data.result.name,
      rating: data.result.rating,
      total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}
