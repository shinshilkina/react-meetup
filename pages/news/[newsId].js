import { useRouter } from "next/router";

function NewsDetails() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <div>
      <h1>The News Details Page</h1>
      <p>{newsId}</p>
    </div>
  );
}

export default NewsDetails;
