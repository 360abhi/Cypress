let variable = false;
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