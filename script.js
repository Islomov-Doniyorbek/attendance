
function userConnectMeTgBot() {
    let form = document.querySelector("form")
    let select = document.querySelector("#para")
    let selectLess = document.querySelector("#lesson")
    // let date = document.querySelector("#date").value
    let bot = {
        TOKEN: "7161673530:AAG23oBDC6xKDJ_jqjPrrlYx3ANu7iidWO4",
        // chatID: id.value
        chatID: "5126880787"
    }
    let bot2 = {
        TOKEN: "7161673530:AAG23oBDC6xKDJ_jqjPrrlYx3ANu7iidWO4",
        // chatID: id.value
        chatID: "6348426832"
    }
    let group = {
        TOKEN: "7161673530:AAG23oBDC6xKDJ_jqjPrrlYx3ANu7iidWO4",
        // chatID: id.value
        chatID: "-1001950914567"
    }
    form.addEventListener("submit", e => {
        e.preventDefault();
        let date = new Date();

        let studentsChecking = new String();
        let students = document.querySelectorAll("#checkbox");
        let n = 0;
        for (let i = 0; i < students.length; i++) {
            if (students[i].checked) {
                studentsChecking += `%0A - ${students[i].parentElement.querySelector("span").innerText}`;                
                n++;
            }
        }
        let information = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${select.value} %0A ${selectLess.value} faniga ${n} nafar talaba qatnashmadi:` + studentsChecking + `%0A Davomat ${100 - (n * 100 / students.length)}% `;

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${information}`, {
            method: "GET"
        })
        .then(success => {
            alert("Amaliyot yakunlandi")
        }, error => {
            alert("Xabar yuborilmadi!")
            console.log(error);
        })

         fetch(`https://api.telegram.org/bot${bot2.TOKEN}/sendMessage?chat_id=${bot2.chatID}&text=${information}`, {
             method: "GET"
         })
         .then(success => {
             alert("Amaliyot yakunlandi")
         }, error => {
             alert("Xabar yuborilmadi!")
             console.log(error);
         })

         fetch(`https://api.telegram.org/bot${group.TOKEN}/sendMessage?chat_id=${group.chatID}&text=${information}`, {
             method: "GET"
         })
         .then(success => {
             alert("Amaliyot yakunlandi")
         }, error => {
             alert("Xabar yuborilmadi!")
             console.log(error);
         })
        
        
         fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${studentsChecking}`, {
     method: "GET"
 })


        // fetch(`https://api.telegram.org/bot${bot2.TOKEN}/sendMessage?chat_id=${bot2.chatID}&text=${information}`, {
        //     method: "GET"
        // })
        // .then(success => {
        //     alert("Amaliyot yakunlandi")
        // }, error => {
        //     alert("Xabar yuborilmadi!")
        //     console.log(error);
        // })
        
        // for (let i = 0; i < students.length; i++) {
        //     if (students[i].checked) {
        //         fetch(`https://api.telegram.org/bot${bot2.TOKEN}/sendMessage?chat_id=${bot2.chatID}&text=${students[i].parentElement.querySelector("span").innerText}`, {
        //     method: "GET"
        // })
            
        //     }
        // }
        
    
    
        

    })
}
let code = prompt("Parol");

if (code == "23082005") {
    userConnectMeTgBot()
}
