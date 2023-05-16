
export interface IArticle {
  id: string;
  user: {
    username: string;
    userId: string;
  }
  username: string;
  title: string;
  text: string;
  createdAt: string;
}
