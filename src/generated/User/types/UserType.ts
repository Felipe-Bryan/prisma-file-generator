export interface UserType {
  id: number;
  email: string;
  profile: profile | undefined;
  posts: post[];
  courses: course[];
}