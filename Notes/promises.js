let variable = true;
function userVar(){
    return new Promise((resolve,reject)=>{
        if (variable){
            resolve({
                key:"resolve",
                val:"its is success"
            })
        }
        else {
            reject({
                key:"reject",
                val:"it is failed"
            })
        }
    });
};

userVar().then(({key,val})=>{
    console.log(key,val);
}).catch(({key,val})=>{
    console.log(key,val);
});

//Promises All
const task1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Task 1 is completed");
    }, 2000);
});

const task2 = new Promise((resolve,reject)=>{
    resolve("Task 2 is completed");
});

const task3 = new Promise((resolve,reject)=>{
    resolve("Task 3 is completed");
});

Promise.all([task1,task2,task3]).then((messages)=>{
    console.log("messages array is ", messages);
}).catch((err)=>{
    console.log("Error occured ",err);
});