import "./App.css";

   function App() {

  const mature = [
    {
  
      name: "Ahmed",
      Company: "Microsoft",
      salary: 1000
    },
    {
  
      name: "Usama",
      Company: "Google",
      salary: 5000
    },
    {
    
      name: "shayan Chippa",
      Company: "Chippa house ",
      salary: 6000
    },
    {
      
      name: "Hamza",
      Company: "Solution79",
      salary: 2000

    }
  ];

  return (
    <div>

      <h1>Dynamic Mature Cards</h1>

      <div className="card-container">

        {mature.map((mature) => (

          <div className="card">

            <h2>{mature.name}</h2>

            <p>Company:{mature.Company}</p>

            <p style={{backgroundColor : mature.salary >= 3000 ? 'green':'red' , color : mature.salary >= 3000 ? 'black': 'white'}} >Salary: {mature.salary}</p>

          </div>
        
  
        ))}

      </div>

    </div>
  );

}

export default App;

