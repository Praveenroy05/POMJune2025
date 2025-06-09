import xlsx from 'xlsx'
export class Excel{


    static getExcelData(filePath : string, sheetName : string){

        try{
            const workbook = xlsx.readFile(filePath)
            const sheet = workbook.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data

        }
        catch(e){
            console.log(e)
        }

    }
    
}