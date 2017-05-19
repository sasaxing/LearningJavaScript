import * as fsPromised from 'fs.promised'

async function copyFile(source: string, target: string) {
    let content = await fsPromised.readFile(source)
    await fsPromised.writeFile(target, content)
}

copyFile('hello.txt', 'hello-copy.txt')