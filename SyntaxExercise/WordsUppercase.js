function upperCase(text) {
    let result = text.toUpperCase()
      .match(/\w+/g)
      .join(', ');
    
    console.log(result);
  }

upperCase('Hi, how are you?')
upperCase('hello')