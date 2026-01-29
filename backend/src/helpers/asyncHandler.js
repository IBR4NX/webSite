module.exports=(execution)=>{
  return(req,res,next)=>{
    Promise.resolve(execution(req,res,next)).catch(next);
  };
};