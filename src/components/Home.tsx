function Home() {
  return (
    <div>
      <button onClick={() => (window.location.href = "/1")}>Menu 1</button>
      <button onClick={() => (window.location.href = "/2")}>Menu 2</button>
    </div>
  );
}

export default Home;
