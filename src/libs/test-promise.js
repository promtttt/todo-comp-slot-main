async function doSomething(done) {
    console.log('doSomething is execution...waiting')
    return new Promise((resolve, reject)=>{
        setTimeout(()=>(done ? resolve('success'): reject('failure')),5000)
    })    
}

// doSomething(false) 
// .then((status)=>{
//     console.log(`your task is ${status}`)
// })
// .catch((error)=>{
//     console.log(`error:${error}`)
// })

async function waitDoSomething(result) {
    try{
        const status = await doSomething(result)
        console.log(`your task is ${status}`)
    }catch (error){
        console.log(`error:${error}`)
    }
}

// doSomething();
waitDoSomething();