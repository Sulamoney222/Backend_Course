
const logger = (req,res, next)=>{
   res.send('Hello what is your name, this is he middleware ii')
   const url = req.url
   const method = req.method
   const date = new Date().getFullYear()
   console.log(url, method,date);

   const{name} = req.query
   if(name === 'Jack'){
    res.send(name)
   }
   
   
}

module.exports = logger