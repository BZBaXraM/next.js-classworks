export type DashboardData = {
  likes: number;
  followers: number;
  followings: number;
  posts: number;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type Article = {
  title: string;
  id: number;
  category: string;
};

export type Comments = {
  id: number;
  name: string;
  comment: string;
};

export type Posts = {
  userId: number;
  id: string;
  title: string;
  body: string;
};
