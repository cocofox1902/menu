function Home() {
  return (
    <div className="flex flex-col justify-evenly my-8 gap-10">
      <button onClick={() => (window.location.href = "/1")}>Menu 1</button>
      <button onClick={() => (window.location.href = "/2")}>Menu 2</button>
      <button onClick={() => (window.location.href = "/3")}>Menu 3</button>
      <button onClick={() => (window.location.href = "/4")}>Menu 4</button>
      <button onClick={() => (window.location.href = "/5")}>Menu 5</button>
      <button onClick={() => (window.location.href = "/6")}>Menu 6</button>
      <button onClick={() => (window.location.href = "/7")}>Menu 7</button>
      <button onClick={() => (window.location.href = "/8")}>Menu 8</button>
      <button onClick={() => (window.location.href = "/9")}>Menu 9</button>
    </div>
  );
}

export default Home;
