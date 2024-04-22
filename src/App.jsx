

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <div style={{backgroundColor: 'grey', width: '100%', padding: '30px', boxSizing: 'border-box'}}>
        <h2>Header</h2>
      </div>
      <div>
        <h2>Body</h2>
      </div>
      <div style={{backgroundColor: 'grey', width: '100%', padding: '30px', boxSizing: 'border-box'}}>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default App;
