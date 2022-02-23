"use strict"

const sqlite = require("sqlite3")
const dayjs = require("dayjs")

const db = new sqlite.Database("exams.sqlite",(err)=>{
    if(err) throw err
})

function Exam(Code, Name, cfu, Score, Honors, datePass){
    this.Code = Code
    this.Name = Name
    this.cfu = cfu
    this.Score = Score
    this.Honors = Honors
    this.datePass = datePass

    this.toString = () => (`${this.Code} - ${this.Name} = ${this.Score} - ${this.datePass}`)
}


function examList(){
    this.exams = []

    this.add = (exam) =>{
        this.exams.push(exam)
    }

    this.toString = () => (this.exams.map((exam) =>(
        exam.toString()
    )).join('\n'))

}

function getAll(){
    const sql = `select course.code, course.name, course.CFU,
                        score.score, score.laude, score.datepassed
                 FROM course left join score on course.code = score.coursecode`
    
    return new Promise((resolve, rejects) =>{
        db.all(sql, (err, rows) =>{
            if(err) rejects(err)
            else{
                
                let list = new examList()
                for(const row of rows){
                    let exam = new Exam(
                        row.code,
                        row.name,
                        row.CFU,
                        row.score,
                        row.honors,
                        dayjs(row.datepassed)
                    )
                    
                    list.add(exam)
                }
                resolve(list)
            }
        })
    })
}

async function main(){
    let list = await getAll()
    console.log(list.toString())
}

main()