export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/09/Polaris-Dawn.jpeg?resize=1280,561"
          alt=""
        />
      </div>
      <div className="text">
        <h2>SpaceX launches Polaris Dawn</h2>
        <p className="info">
          <a href="/" className="author">
            Absra Girma
          </a>
          <time>2024-09-10 20:03</time>
        </p>
        <p className="summary">
          The suits are especially exciting given SpaceX’s longterm ambitions to
          establish a human colony on Mars, as hundreds or thousands of people
          could wear similar suits in the future.
        </p>
      </div>
    </div>
  );
}
