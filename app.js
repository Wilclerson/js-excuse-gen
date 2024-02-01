const generateExcuse = () => {
    const firstNameArray = ['Travis', 'Robert', 'Alfredo', 'Greg', 'Stan']
    const lastNameArray = ['Macero', 'Howell', 'Gonzalez', 'Lin']
    
    const firstNameIndex = Math.floor(Math.random() * firstNameArray.length)
    const lastNameIndex = Math.floor(Math.random() * lastNameArray.length)
    
    console.log(`Hello ${firstNameArray[firstNameIndex]} ${lastNameArray[lastNameIndex]}`)
  }
  
  generateExcuse()
  