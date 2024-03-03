
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
    form.addEventListener("submit", e => {
        e.preventDefault();
        let date = new Date();

        let information = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${select.value}  ${selectLess.value} faniga qatnashmadi:`;
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${information}`, {
            method: "GET"
        })
        .then(success => {
            alert("Amaliyot yakunlandi")
        }, error => {
            alert("Xabar yuborilmadi!")
            console.log(error);
        })
        
        
        let students = document.querySelectorAll("#checkbox")
        for (let i = 0; i < students.length; i++) {
            if (students[i].checked) {
                fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${students[i].parentElement.querySelector("span").innerText}`, {
            method: "GET"
        })
            
            }
        }


        fetch(`https://api.telegram.org/bot${bot2.TOKEN}/sendMessage?chat_id=${bot2.chatID}&text=${information}`, {
            method: "GET"
        })
        .then(success => {
            alert("Amaliyot yakunlandi")
        }, error => {
            alert("Xabar yuborilmadi!")
            console.log(error);
        })
        
        for (let i = 0; i < students.length; i++) {
            if (students[i].checked) {
                fetch(`https://api.telegram.org/bot${bot2.TOKEN}/sendMessage?chat_id=${bot2.chatID}&text=${students[i].parentElement.querySelector("span").innerText}`, {
            method: "GET"
        })
            
            }
        }
        
    
    
        

    })
}

userConnectMeTgBot()