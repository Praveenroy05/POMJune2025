import xlsx from 'xlsx'

export class ExcelUtils{


    static getDataFromExcel(filePath : string, sheetName: string){

        // Exception handling
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