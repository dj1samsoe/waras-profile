export type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

export type MapsData = {
  name: string;
  rating: number;
  total: number;
  reviews: Review[];
};
