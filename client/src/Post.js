import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  const TruncateText = ({ text, maxLength }) => {
    let truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    return <div>{truncatedText}</div>;
  };
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <TruncateText className="summary" text={summary} maxLength={300}>
          {summary}
        </TruncateText>
      </div>
    </div>
  );
}
