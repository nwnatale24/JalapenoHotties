import './App.css';

// Main function to run the web app. 
function App() {
  return (
    <div className="App">

      {/* Header for top of page */}
      <br />
      <h1><u>Test Database Hosting & API</u></h1>

      {/* Input boxes and input box labels */}
      <div className="testInput">
        <label>Username: </label>
        <input type="text" name="username"></input>
        <br />
        <label>Password:</label>
        <input type="text" name="username"></input>
        <button>Submit</button>
      </div>

    </div>
  );
}

export default App;
