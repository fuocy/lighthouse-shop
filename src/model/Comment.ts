// For fetching data (not for sending because when sending, we don't forward the ID)
interface Comment {
  id: string;
  text: string;
  avatar: string;
  numStar: number;
  name: string;
  date: string;
}

export default Comment;
