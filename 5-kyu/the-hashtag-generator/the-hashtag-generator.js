function generateHashtag (str) {
   if (!str || str.trim() === "") {
     return false
   }
  
    str = str.trim().split(" ")
  
    let hashTag = "#"
    for (let each of str) {
        if (each !== "") {
            hashTag += each.charAt(0).toUpperCase() + each.slice(1)
        }
    }
​
    return hashTag.length > 140 ? false : hashTag
  }
  