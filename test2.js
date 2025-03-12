// 34-5 Promise, Promise All

// const loadData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

// loadData()

const fetchdata = () =>{
    return new Promise((resolve , reject) =>{
        const status = false;
        if (status){
            resolve({name : "roki"})

        }
        else{
            reject("server error")
        }
    })
}

 

fetchdata().then(res=> console.log(res)).catch(error =>console.log(error))