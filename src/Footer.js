import { useStoreState } from "easy-peasy";

const Footer = () => {
  const today = new Date();
  const postCount = useStoreState((state) => state.posts.length);

  return (
    <footer className="Footer">
      <p>{postCount} Blog Posts</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
