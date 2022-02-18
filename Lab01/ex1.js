'use strict'

function Task(id, description, urgent, privat, deadline){
    this.id = id
    this.description = description
    this.urgent = urgent 
    this.privat = privat
    this.deadline = deadline
}

function TaskList(){
    this.List = []

    this.add = (list) => {
        this.List.push(list)
    }

    this.sortAndPrint = () => {
        this.List.sort(function(a, b) {
            var c = new Date(a.deadline);
            var d = new Date(b.deadline);
            return c-d;
        });
        console.log("****** Tasks sorted by deadline (most recent first): ******")
        for (let i = 0; i < this.List.length; i++){
            console.log(`id: ${this.List[i].id} description: ${this.List[i].description} urgent: ${this.List[i].urgent} private: ${this.List[i].privat} deadLine: ${this.List[i].deadline}`)
        }
        
    }

    this.filterAndPrint = () => {
        const newList = this.List.filter((x) => {
            if(x.urgent === true){
                return x
            }
        })
        console.log("****** Tasks filtered, only (urgent == true): ******")
        for(let i = 0; i < newList.length; i++){
            console.log(`id: ${newList[i].id} description: ${newList[i].description} urgent: ${newList[i].urgent} private: ${newList[i].privat} deadLine: ${newList[i].deadline}`)
        }
    }

}

/*
Id: 3, Description: phone call, Urgent: true, Private: false, Deadline: March 8, 
2021 4:20 PM 
Id: 2, Description: monday lab, Urgent: false, Private: false, Deadline: March 16, 
2021 10:00 AM 
Id: 1, Description: laundry, Urgent: false, Private: true, Deadline: <not defined> 
*/


const t1 = new Task(3, "Phone Call", true, false, new Date("March 8, 2021 4:20 PM") )
const t2 = new Task(2, "Monday Lab", false, false, new Date("March 16, 2021 10:00 AM") )
const t3 = new Task(1, "Laundry", false, true, undefined )
const taskList = new TaskList()
taskList.add(t1)
taskList.add(t2)
taskList.add(t3)
console.log()
taskList.sortAndPrint()
console.log()
taskList.filterAndPrint()




// function Exam(code, name, cfu, score, honors, datePassed){
//     this.code = code
//     this.name = name
//     this.cfu = cfu
//     this.score = score
//     this.honors = honors
//     this.datePassed = datePassed
// }

// function ExamList(){
//      this.exams = []

//     this.add = (exam) =>{
//         this.exams.push(exam)
//     }

//     this.find = (courseCode) => {
//         const result = exams.filter((x) => {
//             return x.code === courseCode
//         })
//         if (result.length > 1){
//             return result[0]
//         }else{
//             return undefined
//         }


//     }

//     console.log(exams)
// }

// const wa1 = new Exam("0x1f", "web application",6,28,false, "2021-02-10")
// const db = new Exam("0x1f", "Data Base",8,28,false, "2021-03-10")

// // const exam = new ExamList()
// // console.log(wa1)

// // console.log(exam.add(wa1))

// const myList = [23,19,43,1,2,4,6]

// const newList = myList.map((x) => {
//     return x ** 2
// })

// console.log(newList)





