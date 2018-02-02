function sayHiToGrandma(string) {
  if(string.toLowerCase() === string){
    return "I can't hear you!"
  } else if(string.toUpperCase() === string){
    return "YES INDEED!"
  } else if(string === "I love you, Grandma."){
    return "I love you, too."
  }
}

/*describe('sayHiToGrandma()', () => {
  it('I love you, Grandma.', () => {
    expect(shout('hello')).toEqual('HELLO')
  })
})*/
