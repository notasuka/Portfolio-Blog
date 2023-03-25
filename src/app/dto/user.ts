import { Chat } from "./chat";
import { Blog } from "./blog";
import { Project } from "./project";

export interface User {
  id: number;
  username: number;
  bio: string;
  role: undefined;
  blogs: Blog[];
  projects: Project[];
  chats: Chat[];
}
