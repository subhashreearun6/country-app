import React from "react";
import Axios from "axios";
// import Country from "./Country";

const Appc=()=>
{
    //const[search,setSearch]=React.useState("");
    const[List,setList]=React.useState([]);
    const fetch=()=>
  {
    Axios.get("https://restcountries.eu/rest/v2/all").then(success=>{
      //console.log(success.data);
      setList(success.data);
    })
  }
    React.useEffect(()=>{fetch()},[])
    // const handleChange=(e)=>
    // {
    //     setSearch(e.target.value);
    // }
    const handleSubmit=(e)=>
    Axios.get("https://restcountries.eu/rest/v2/name/"+e.target.value).then(success=>
    {
      console.log(success);
        setList(success.data);
        // fetch();
       // setSearch(" ");
    })
    
    
    return(
      <div>
        <div>
                <input onChange={handleSubmit } placeholder="search here...." ></input>
                <button onClick={handleSubmit} className="btn btn-primary" >SEARCH</button>       
        </div>
        <div>
        <table class="table table-striped table-light table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>COUNTRY NAME</th>
                    <th>CAPITAL</th>
                    <th>REGION</th><span>{" "}</span>
                    <th>POPULATION</th>
                    <th>FLAG</th>
                </tr>
            </thead>
            <tbody class="table-primary">
                {List.map(e => (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.capital}</td>
                        <td>{e.region}</td><span>{" "}</span>
                        <td>{e.population} </td>
                        <td><img src={e.flag} width="50px" height="50px"></img></td>
                    </tr>
                ))}

            </tbody>
        </table>
    </div>
    </div>
    )
}
export default Appc;