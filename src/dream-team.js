module.exports = function createDreamTeam(members) {
   if(Array.isArray(members)){
    let mem = members.filter((el)=>{return typeof(el) === 'string'})
    let mema = (mem.map((el)=>{
      return el.trim().charAt(0)
    }).sort().join('').toUpperCase())
    return mema.split('').sort().join('')
   } else {
     return false
   }
};