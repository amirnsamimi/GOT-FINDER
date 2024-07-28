const url = "https://anapioficeandfire.com/api/";
const HOUSE_API = "houses/";
const CHARACTER_API = "characters/";

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

const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");
const item5 = document.querySelector(".item-5");
const item6 = document.querySelector(".item-6");
const item7 = document.querySelector(".item-7");
const item8 = document.querySelector(".item-8");
const item9 = document.querySelector(".item-9");
const item10 = document.querySelector(".item-10");
const item11 = document.querySelector(".item-11");
const item12 = document.querySelector(".item-12");

let swornArray = [];
const numberGex = /[0-9]/; // /[0-9]/g ro bepors chera kar nmeikone mage global nist? 

const bookNo = document.getElementsByName("search")[0];
let bValue = 0;
bookNo.addEventListener("change", () => {
  bValue = bookNo.value;
});

const clickHandler = () => {

  item1.innerHTML = "";
  item2.innerHTML = "";
  item3.innerHTML = "";
  item4.innerHTML = "";
  item5.innerHTML = "";
  item6.innerHTML = "";
  item7.innerHTML = "";
  item8.innerHTML = "";
  item9.innerHTML = "";
  item10.innerHTML = "";
  item11.innerHTML = "";
  item12.innerHTML = "";
  item1.style = "";
  item2.style = "";
  item3.style = "";
  item4.style = "";
  item5.style = "";
  item6.style = "";
  item7.style = "";
  item8.style = "";
  item9.style = "";
  item10.style = "";
  item11.style = "";
  item12.style = "";
  swornArray = [];

  const inputErr = document.getElementById("input-error");


    if (bValue !== 0 && numberGex.test(bValue)) {
      console.log("hi");
      inputErr.innerText = "";
      books(bValue);
      bValue = "";
    } else {
      bookNo.style.borderColor = "red";
      inputErr.innerText = "This field is mandatory and must be a number.";
    }
  
};

const books = async (id = 2) => {
  const response = await fetch(url + HOUSE_API + id);

  bookNo.setAttribute("disabled", "true"); // if data dare load mishe chejuri sab konim bad disable to false konim
  if (response.ok) {
    const data = await response.json();
    bookNo.removeAttribute("disabled");
    if (data.region.length > 0) {
      item1.style.background = "white";
      item1.style.border = "2px solid black";
      item1.style.boxShadow = "2px 2px 0px black";
      item1.innerHTML = `<div> <h4> Region: </h4>  ${data.region}   </div>`;
    } else {
      item1.style.background = "gray";
      item1.style.color = "white";
      item1.style.border = "2px solid black";
      item1.style.boxShadow = "2px 2px 0px black";
      item1.innerHTML = `<div> <h4> Region: </h4> There is no region! </div>`;
    }

    if (data.coatOfArms.length > 0) {
      item9.style.background = "white";
      item9.style.border = "2px solid black";
      item9.style.boxShadow = "2px 2px 0px black";
      item9.innerHTML = `<div> <h4> Coat of arms: </h4>  ${data.coatOfArms}   </div>`;
    } else {
      item9.style.background = "gray";
      item9.style.color = "white";
      item9.style.border = "2px solid black";
      item9.style.boxShadow = "2px 2px 0px black";
      item9.innerHTML = `<div> <h4> Coat of arms: </h4> No Coat for arms! </div>`;
    }
    if (data.words.length > 0) {
      item4.style.background = "white";
      item4.style.border = "2px solid black";
      item4.style.boxShadow = "2px 2px 0px black";
      item4.innerHTML = `<div> <h4> Words: </h4>  ${data.words}   </div>`;
    } else {
      item4.style.background = "gray";
      item4.style.color = "white";
      item4.style.border = "2px solid black";
      item4.style.boxShadow = "2px 2px 0px black";
      item4.innerHTML = `<div> <h4> Words: </h4> Speech less! </div>`;
    }
    item11.style.background = "white";
    item11.style.border = "2px solid black";
    item11.style.boxShadow = "2px 2px 0px black";
    item11.innerHTML = `<div> <h4> Name: </h4>  ${data.name}   </div>`;
    item10.style.background = "white";
    item10.style.border = "2px solid black";
    item10.style.boxShadow = "2px 2px 0px black";
    item10.innerHTML = `<div> <h4> House: </h4>  ${id}   </div>`;

    console.log(data);

    if (data.seats.length > 0) {
      item8.style.background = "white";
      item8.style.border = "2px solid black";
      item8.style.boxShadow = "2px 2px 0px black";
      item8.innerHTML = `<div> <h4> Seats: </h4> </div>`;

      data.seats.forEach((i) => {
        const el = document.createElement("div");
        el.innerText = `${i}`;
        item8.appendChild(el);
      });
    } else {
      item8.style.background = "gray";
      item8.style.color = "white";
      item8.style.border = "2px solid black";
      item8.style.boxShadow = "2px 2px 0px black";
      item8.innerHTML = `<div> <h4> Seats: </h4> No Seats Available </div>`;
    }

    if (data.titles.length > 0) {
      item6.style.background = "white";
      item6.style.border = "2px solid black";
      item6.style.boxShadow = "2px 2px 0px black";
      item6.innerHTML = `<div> <h4> titles: </h4> </div>`;

      data.seats.forEach((i) => {
        const el = document.createElement("div");
        el.innerText = `${i}`;
        item6.appendChild(el);
      });
    } else {
      item6.style.background = "gray";
      item6.style.color = "white";
      item6.style.border = "2px solid black";
      item6.style.boxShadow = "2px 2px 0px black";
      item6.innerHTML = `<div> <h4> Titles: </h4> No titles available!</div>`;
    }

    if (data !== null) {
      if (data.heir.length > 0) {
        const heirResponse = await fetch(data.heir);
        if (heirResponse.ok) {
          const heirData = await heirResponse.json();
          item7.style.background = "white";
          item7.style.border = "2px solid black";
          item7.style.boxShadow = "2px 2px 0px black";
          item7.innerHTML = `<div> <h4> Heir Name: </h4>  ${heirData.name} <br><br> <h4> Gender: </h4>  ${heirData.gender}   </div>`;
        }
      } else {
        item7.style.background = "gray";
        item7.style.color = "white";
        item7.style.border = "2px solid black";
        item7.style.boxShadow = "2px 2px 0px black";
        item7.innerHTML = `<div> <h4> Heir: </h4> No Heir for this house! </div>`;
      }
      if (data.overlord.length > 0) {
        const overLordResponse = await fetch(data.overlord);
        if (overLordResponse.ok) {
          const overLordData = await overLordResponse.json();
          console.log(overLordData);
          item12.style.background = "white";
          item12.style.border = "2px solid black";
          item12.style.boxShadow = "2px 2px 0px black";
          item12.innerHTML = `<div> <h4> Overlord Name: </h4>  ${
            overLordData.name
          } <br><br> <h4> Founded: </h4>  ${
            overLordData.founded.length > 0
              ? overLordData.founded.length
              : "no data available"
          }   </div>`;
        }
      } else {
        item12.style.background = "gray";
        item12.style.color = "white";
        item12.style.border = "2px solid black";
        item12.style.boxShadow = "2px 2px 0px black";
        item12.innerHTML = `<div> <h4> Overlord: </h4> No Overlord for this house! </div>`;
      }
      if (data.currentLord.length > 0) {
        const lordResponse = await fetch(data.currentLord);
        if (lordResponse.ok) {
          const lordData = await lordResponse.json();
          if (lordData) {
            item2.style.background = "white";
            item2.style.border = "2px solid black";
            item2.style.boxShadow = "2px 2px 0px black";
            item2.innerHTML = `<div> <h4> Lord Name: </h4>  ${lordData.name} <br><br> <h4> Gender: </h4>  ${lordData.gender}   </div>`;
          }
        }
      } else {
        item2.style.background = "gray";
        item2.style.color = "white";
        item2.style.border = "2px solid black";
        item2.style.boxShadow = "2px 2px 0px black";
        item2.innerHTML = `<div> <h4> lord: </h4> No lord for this house! </div>`;
      }
      if (data.swornMembers.length > 0) {
        data.swornMembers.forEach(async (i) => {
          const swornResponse = await fetch(i);
          if (swornResponse.ok) {
            const swornData = await swornResponse.json();
            swornArray.push(swornData);
          }
          item3.style.background = "white";
          item3.style.border = "2px solid black";
          item3.style.boxShadow = "2px 2px 0px black";
          item3.innerHTML = `<div>  <h4> Sworn: </h4>  <div id="sworn"> </div>   </div>`;
          swornArray.forEach((sworn) => {
            const el = document.createElement("ul");
            el.innerHTML = `<li>${sworn.name}</li>`;
            document.getElementById("sworn").appendChild(el);
          });
        });
      } else {
        item3.style.background = "gray";
        item3.style.color = "white";
        item3.style.border = "2px solid black";
        item3.style.boxShadow = "2px 2px 0px black";
        item3.innerHTML = `<div> <h4> Sworn: </h4> No Sworn for this house! </div>`;
      }

      item5.style.background = "white";
      item5.style.border = "2px solid black";
      item5.style.boxShadow = "2px 2px 0px black";
      item5.innerHTML = `<div >  <h4> Footer: </h4> <span style="font-size:0.5rem;"> Developed By Amir Samimi 2024 </span>   </div>`;
    } else {
      alert("no data available for this book");
    }
  } else if (response.status == 404) {
    item6.innerHTML =
      "<div class='notFound'> <div> The House has not been yet built. Search for another one or if you want to invest contact us. </div>  <div> NOT FOUND 404 </div> </div>";
    item6.style.border = "1px solid rgb(107, 28, 28)";
    item6.style.background = "rgb(107, 28, 28)";
    item6.style.color = "white";
  }
};

books();
