const iphone = document.querySelectorAll(".as-imagegrid-item")
const resultArray = []
iphone.forEach((item)=>{
    const result = item.innerText.replace("Support", "")

    console.log(result)
})
