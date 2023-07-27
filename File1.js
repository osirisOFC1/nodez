const fs = require ('fs')
 
     //create a file
       fs.writeFile("welcome.txt","Hello World",err=>{
          if(err){console.log(err)}  else{
              console.log("created with success")
    //          // ------
              fs.readFile("exempla.txt",(err,file)=>{
                  if(err){
                      console.log(err)
                  }else{
                      console.log(file)
                  }
              })
             
          } 
             
             
      })

// =========================    

    //  rename file

fs.rename('exemple.txt',"test.txt",err=>{
     err?console.log(err):console.log("renamed succefuly")
 })

// =========================


    //append file
    fs.appendFile("test.txt","new data added",err=>{
         err?console.log(err) : console.log("succesfully added") 
     })

    // =========================


    //delete file 
     fs.unlink("exemple.txt",err=>{
         err? console.log(err): console.log("deleted success") 
     })

      