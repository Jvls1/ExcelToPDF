let Reader = require('./Reader')
let Processor = require('./Processor')
let Table = require('./Table')
let HtmlParser = require('./HtmlParser')
let Writer = require('./Writer')
let PDFWriter = require('./PDFWriter')

let reader = new Reader()
let writer = new Writer()

async function main(){
    let datas = await reader.Read('./users.csv')
    let datasProcess = Processor.Process(datas)

    let users = new Table(datasProcess)
    
    let html = await HtmlParser.Parse(users)

    writer.Write(Date.now() + '.html', html)
    PDFWriter.WritePDF(Date.now() + '.PDF', html)
}

main()