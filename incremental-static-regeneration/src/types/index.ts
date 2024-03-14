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
  category?: string;
};

export type Comment = {
  id: string;
  name: string;
  description: string;
};

export type Blog = {
  userId: number;
  id: string;
  title: string;
  body: string;
};
