import { Employees } from "./DevelopersList"


export  const  Developers = ()=>{
    // const filterQuery = "react Developer"
    const filterArray = (query)=>{
        return Employees.filter(value => value.designation == query )
    }

    const filterSalary =()=>{
        return Employees.filter(val=>val.salary == 1000 )
    }
    return(
        <>
        {
            // Employees.filter(value=>value.designation == "angular developer").map(val=>
            // <>
            // <h4>Name:  {val.name}</h4>
            // <h4>Designation:  {val.designation}</h4>
            // <h4>Salary: {val.salary}</h4>
            // </>
            // )
            filterArray("react Developer").map(val=>
                <>
                <h4>Name:  {val.name}</h4>
                <h4>Designation:  {val.designation}</h4>
                <h4>Salary: {val.salary}</h4>
                </>
                )    
        }
        {
            filterArray("angular developer").map(val=>
                <>
                <h4>Name:  {val.name}</h4>
                <h4>Designation:  {val.designation}</h4>
                <h4>Salary: {val.salary}</h4>
                </>
                )
        }
        {
            filterSalary().map(val=>
                <>
                    <h1>Name:{val.name}</h1>
                    <h1>Salry:{val.salary}</h1>
                
                </>
                
            )
        }
        </>
    )

  
}