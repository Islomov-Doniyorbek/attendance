
function userConnectMeTgBot() {
    let form = document.querySelector("form")
    let select = document.querySelector("#para")
    // let date = document.querySelector("#date").value
    let bot = {
        TOKEN: "7161673530:AAG23oBDC6xKDJ_jqjPrrlYx3ANu7iidWO4",
        // chatID: id.value
        chatID: "5126880787"
    }
    form.addEventListener("submit", e => {
        e.preventDefault();
        let date = new Date();

        let information = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${select.value}`;
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${information}`, {
            method: "GET"
        })
        .then(success => {
            alert("Xabar yuborildi! \nElektron pochtangizga izoh qoldiriladi, salomat bo'ling!")
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
        
    
    
        

    })
}

userConnectMeTgBot()