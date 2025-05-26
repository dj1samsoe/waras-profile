import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MapsData } from "../types/comments";

export default function useGoogleReviews() {
  return useQuery({
    queryKey: ["googleReviews"],
    queryFn: async () => {
      const { data }: { data: MapsData } = await axios.get("/api/maps-reviews");
      return data;
    },
    staleTime: 1000 * 60 * 60, // 1 jam
    refetchOnWindowFocus: false,
  });
}
