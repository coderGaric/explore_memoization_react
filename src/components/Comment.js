export default function Comment({ comment }) {
  const { id, name, body, email } = comment;

  return (
    <div className="comment-box">
      <div>
        <div className="avatar" />
        <p className="email">{email}</p>
      </div>

      <h3 className="title">
        {id}. {name}
      </h3>
      <p className="body">{body}</p>
    </div>
  );
}
