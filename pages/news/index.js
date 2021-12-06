import Link, { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>News page!</h1>
      <ul>
        <li>
          <Link href="news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>
          <Link href="something-else">Somethig else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
