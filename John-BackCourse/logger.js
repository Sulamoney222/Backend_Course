
const logger = (req,res, next)=>{
   res.send('Hello what is your name, this is he middleware ii')
   const url = req.url
   const method = req.method
   const date = new Date().getFullYear()
   console.log(url, method,date);
   
   const {user} = req.query
   if(user === 'Jack'){
    req.user = {name:'Jack', id:22}
    next()
   }else{
    res.status(404).send('Authorisez')
   }
   
   
}

module.exports = logger