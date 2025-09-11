// Create a function component named App that will be rendered in the root element
function App() {
  // Array of post data (instead of hardcoded JSX)
  const posts = [
    {
      name: "Nirus",
      subtitle: "20 followers",
      time: "2m ago",
      image:
        "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      description:
        "Want to know how to win big? Check out how these folks won $6000 in bounties.",
    },
    {
      name: "Harkirat",
      subtitle: "promoted",

      image:
        "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description:
        "How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get hired in 2024.",
    }
  ];

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <div>
          {/* Mapping through posts array and passing props dynamically */}
          {posts.map((post, index) => (
            <PostComponent key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Style Objects
const appStyle = {
  backgroundColor: "#dfe6e9",
  height: "100vh",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};

const postStyle = {
  width: 500,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  margin: 10,
};

// Post Component with props -- eslint-disable-next-line react/prop-types
function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={postStyle}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          alt="User"
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <div style={{ fontSize: 14, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined ? <div style={{ display: "flex", alignItems: "center" }}>
            <div>{time}</div>
            <img
              src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
              alt="Clock"
              style={{ width: 20, height: 15, marginLeft: 5 }}
            />
          </div> : null}
        </div>
      </div>
      <div style={{ fontSize: 14 }}>{description}</div>
    </div>
  );
}

// Export App Component
export default App;
