import logo from "./logo.svg";
import "./App.css";
import Users from "./services/users";
function App() {
  // Users.getUsers();
  // Users.addUsers();
  Users.createUser("lo11l@gmail.com", "lol123400").then((msg) =>
    console.log(msg)
  );
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "none",
        justifyItems: "center",
        alignContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          flexWrap: "wrap",

          alignContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <label htmlFor="inputy">Display Name</label>

        <input
          type="text"
          style={{ width: "200px" }}
          onChange={(event) => {
            console.log(event.target.value);
          }}
          id="inputy"
        ></input>

        <button style={{ width: "200px" }} onClick={() => {}}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default App;
