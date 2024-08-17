import { User } from "@/common/types/comments";
import cheerio from "cheerio";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET(req: NextRequest, res: NextResponse) {
  "use server";
  try {
    const MAPS_LINK = process.env.NEXT_PUBLIC_MAPS_LINK as string;
    const response = await axios.get(MAPS_LINK);
    let $ = cheerio.load(response.data);

    let user: User[] = [],
      location_info,
      data_id,
      token;

    $(".lcorif").each((i, el) => {
      data_id = $(".loris").attr("data-fid");
      token = $(".gws-localreviews__general-reviews-block").attr(
        "data-next-page-token"
      );
      location_info = {
        title: $(".P5Bobd").text(),
        address: $(".T6pBCe").text(),
        avgRating: $("span.Aq14fc").text(),
        totalReviews: $("span.z5jxId").text(),
      };
    });

    $(".gws-localreviews__google-review").each((i, el) => {
      user.push({
        name: $(el).find(".TSUbDb").text(),
        link: $(el).find(".TSUbDb a").attr("href") || "",
        thumbnail: $(el).find(".lDY1rd").attr("src") || "",
        date: $(el).find(".dehysf").first().text().trim() || "",
        rating: $(el).find(".lTi8oc").attr("aria-label") || "",
        review: $(el).find(".Jtu6Td").first().text().trim() || "",
        images: $(el)
          .find(".EDblX .JrO5Xe")
          .toArray()
          .map(
            (d) =>
              $(d)
                .attr("style")
                ?.substring(21, $(d).attr("style")!.lastIndexOf(")")) || ""
          ),
      });
    });

    return NextResponse.json({ user, location_info, data_id, token });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}
