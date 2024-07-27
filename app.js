const url = "https://anapioficeandfire.com/api/"
const HOUSE_API = "houses/"
const CHARACTER_API = "characters/"



// ask javid

// const bookPromise = new Promise( async (resolve,reject) => {
//     try{
//         const response = await fetch(url+CHARACTER_API)
//         const json = await response.json()
//         resolve(json)
//     }catch{
//         reject("error")
//     }
// }) 

// const characterPromise = new Promise( async (resolve,reject) => {
//     try{
//         const response = await fetch(url+BOOK_API)
//         const json = await response.json()
//         resolve(json)
//     }catch{
//         reject("error")
//     }
// }) 
//     Promise.race([characterPromise,bookPromise]).then((response)=>console.log(response))



const item1 = document.querySelector(".item-1")
const item2 = document.querySelector(".item-2")
const item3 = document.querySelector(".item-3")
const item4 = document.querySelector(".item-4")
const item5 = document.querySelector(".item-5")
const item6 = document.querySelector(".item-6")
const item7 = document.querySelector(".item-7")
const item8 = document.querySelector(".item-8")
const item9 = document.querySelector(".item-9")
const item10 = document.querySelector(".item-10")
const item11 = document.querySelector(".item-11")
const item12 = document.querySelector(".item-12")




const swornArray = [];
const books = async (id) => {
    const response = await fetch(url+HOUSE_API+"18")
   
    if(response.ok){
        const data = await response.json()
        item6.removeAttribute("skeleton")
        item6.style.backgroundImage = "url('https://images3.alphacoders.com/869/thumb-1920-869197.jpg')"
        if(data.heir !== undefined && data.heir !== ""){
            const heirResponse = await fetch(data.heir)
            if(heirResponse.ok){
                const heirData = await heirResponse.json()
                console.log(heirData)
            }
        } else {
            item2.removeAttribute("skeleton")
        }
        if(data.overlord !== undefined && data.overlord !== ""){
            const overLordResponse = await fetch(data.overlord)
            if(overLordResponse.ok){
                const overLordData = await overLordResponse.json()
                console.log(overLordData)
            }
        }
        if(data.currentLord !== undefined && data.currentLord !== ""){
            const lordResponse = await fetch(data.currentLord)
            if(lordResponse.ok){
                const lordData = await lordResponse.json()
                if(lordData){
                item2.style.background =  "white"
                item2.style.border =  "2px solid black"
                item2.style.boxShadow =  "2px 2px 0px black"
                item2.innerHTML = `<div> <h4> Lord Name: </h4>  ${lordData.name} <br><br> <h4> Gender: </h4>  ${lordData.gender}   </div>`
            }
            }
        }
        if(data.swornMembers !== undefined && data.swornMembers !== ""){
            data.swornMembers.forEach( async (i)=>{
                const swornResponse = await fetch(i)
                if(swornResponse.ok){
                    const swornData = await swornResponse.json()
                    swornArray.push(swornData)
                }
                console.log(swornArray)
            })
   
        }
    }

}

books()