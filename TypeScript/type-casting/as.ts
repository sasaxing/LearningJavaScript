async function waitGreeting(name: string): Promise<string> {
    return 'Guten Tag, ' + name
}
let peopleToGreet = ['amy', 'bill', 'carl']
async function printGreetings() {
    let greetings = await Promise.all(peopleToGreet.map(person => waitGreeting(person)))
    // return promise<string>  
    // ()=>{return res}  ===  ()=>res
    console.log(`\n==> greetings:`)
    console.log(greetings)
    console.log(typeof (greetings))//object
    console.log(typeof (greetings[0])) //string

    console.log(`\n==> grtString:`)
    let grtString = greetings.map(g => g as string)
    console.log(grtString)
    console.log(typeof (grtString))
    console.log(typeof (grtString[0]))//
}
printGreetings()