import * as readline from 'readline';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const InputTaking = (query:string):Promise<string>=>{
    return new Promise((resolve)=>rl.question(query,resolve))
}

const Close=()=>{
    rl.close()
}

export  {InputTaking ,Close } 