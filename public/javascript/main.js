import dmmptabledb, {
    bulkcreate,
    getData,
    createElement
} from "./Module.js";

let database = dmmptabledb("Dmpptabledb", {
    dmppRecipes: `++ID,DMPP,DMP,H3PO4,COLOR,YELLOW,BLUE,KILOS,LITRE`
});

//input tags
const DMPPID = document.getElementById("DMPPID")
const DMPP = document.getElementById("DMPP");
const DMP = document.getElementById("DMP");
const H3PO4 = document.getElementById("H3PO4");
const COLOR = document.getElementById("COLOR");
const YELLOW = document.getElementById("YELLOW");
const BLUE = document.getElementById("BLUE");
const KILOSTONS = document.getElementById("KILOS");
const LITRETONS = document.getElementById("LITRE");
//buttons
const btncreate = document.getElementById("btn-create");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

//notfound
const notfound = document.getElementById("notfound");

//insert value using create button
btncreate.onclick = (event) => {
    let flag = bulkcreate(database.dmppRecipes, {
        DMPP: DMPP.value,
        DMP: DMP.value,
        H3PO4: H3PO4.value,
        COLOR: COLOR.value,
        YELLOW: YELLOW.value,
        BLUE: BLUE.value,
        KILOSTONS: KILOSTONS.value,
        LITRETONS: LITRETONS.value
    })
    //console.log(flag);

    DMPP.value = DMP.value = H3PO4.value = COLOR.value = YELLOW.value = BLUE.value = KILOSTONS.value = LITRETONS.value = "";
    getData(database.dmppRecipes, (data) => {
        DMPPID.value = data.ID + 1 || 1;
    });


    table();

    let insertmsg = document.querySelector(".insertmsg");
    getMsg(flag, insertmsg);
}

//create event on btn read button
//btnread.onclick = table;

//update event
btnupdate.onclick = () => {
    const id = parseInt(DMPPID.value || 0);
    if (id) {

        database.dmppRecipes.update(id, {
            DMPP: DMPP.value,
            DMP: DMP.value,
            H3PO4: H3PO4.value,
            COLOR: COLOR.value,
            YELLOW: YELLOW.value,
            BLUE: BLUE.value,
            KILOSTONS: KILOSTONS.value,
            LITRETONS: LITRETONS.value
        }).then((updated) => {
            //let get = updated ? 'data Updated' : `Couldn't Update Data`;
            let get = updated ? true : false;
            let updatemsg = document.querySelector(".updatemsg");
            getMsg(get, updatemsg);

            DMPP.value = DMP.value = H3PO4.value = COLOR.value = YELLOW.value = BLUE.value = KILOSTONS.value = LITRETONS.value = "";
        })
    }
}

//delete records
btndelete.onclick = () => {
    
    database.delete();
    database = dmmptabledb("Dmpptabledb", {
        dmppRecipes: `++ID,DMPP,DMP,H3PO4,COLOR,YELLOW,BLUE,KILOS,LITRE`
    });
    database.open();
    table();
    textID(DMPPID);
    let deletemsg = document.querySelector("deletemsg");
    getMsg(true, deletemsg);
}

//window onload events
//table display
//ID from Database
window.onload = () => {
    table();
    textID(DMPPID);

}

function textID(textboxid) {
    getData(database.dmppRecipes, data => {
        textboxid.value = data.ID + 1 || 1;
    })
}


function table() {
    const tbody = document.getElementById("tbody");
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild);
    }
    getData(database.dmppRecipes, (data) => {
        if (data) {
            createElement("tr", tbody, tr => {
                // Add data-label attribute to each td
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'ID');
                    td.textContent = data.ID;
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'DMPP NAME');
                    td.textContent = data.DMPP;
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'DMP');
                    td.textContent = data.DMP;
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'H3PO4');
                    td.textContent = data.H3PO4;
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'COLOR');
                    td.textContent = data.COLOR;
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'YELLOW');
                    td.textContent = data.YELLOW;
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'BLUE');
                    td.textContent = data.BLUE;
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'KILOS/T');
                    td.textContent = data.KILOSTONS;
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'LITRE/T');
                    td.textContent = data.LITRETONS;
                });
                // Action buttons
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'EDIT');
                    createElement("i", td, i => {
                        i.className += "fas fa-edit btnedit";
                        i.setAttribute('data-id', data.ID);
                        i.onclick = editbtn;
                    });
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'DELETE');
                    createElement("i", td, i => {
                        i.className += "fas fa-trash-alt btndelete";
                        i.setAttribute('data-id', data.ID);
                        i.onclick = deletebtn;
                    });
                });
                createElement("td", tr, td => {
                    td.setAttribute('data-label', 'SELECT');
                    createElement("i", td, i => {
                        i.className += "fas fa-check btnselect";
                        i.setAttribute('data-id', data.ID);
                        i.onclick = selectbtn;
                    });
                });
            });
        } else {
            notfound.textContent = "No record found in the database";
        }
    });
}
//Edit btn event
function editbtn(event) {
    let id = parseInt(event.target.dataset.id);
    database.dmppRecipes.get(id, data => {
        DMPPID.value = data.ID || 0;
        DMPP.value = data.DMPP || "";
        DMP.value = data.DMP || "";
        H3PO4.value = data.H3PO4 || "";
        COLOR.value = data.COLOR || "";
        YELLOW.value = data.YELLOW || "";
        BLUE.value = data.BLUE || "";
        KILOSTONS.value = data.KILOSTONS || "";
        LITRETONS.value = data.LITRETONS || "";

    })
    window.scrollTo(0, 0) 
}

function selectbtn(event) {
    let id = parseInt(event.target.dataset.id);
    database.dmppRecipes.get(id, data => {
        DMPPID.value = data.ID || 0;
        DMPP.value = data.DMPP || "";
        DMP.value = data.DMP || "";
        H3PO4.value = data.H3PO4 || "";
        COLOR.value = data.COLOR || "";
        YELLOW.value = data.YELLOW || "";
        BLUE.value = data.BLUE || "";
        KILOSTONS.value = data.KILOSTONS || "";
        LITRETONS.value = data.LITRETONS || "";

    })
    window.scrollTo(0, 0) 
}

function deletebtn(event) {
    let id = parseInt(event.target.dataset.id);
    database.dmppRecipes.delete(id);
    table();
    window.scrollTo(0, 0);

}

function getMsg(flag, element) {
    if (flag) {
        // call msg 
        element.className += " movedown";

   setTimeout(() => {
            element.classList.forEach(classname => {
                if (classname !== "movedown") {
                    element.classList.remove('movedown');
                }
            })
        }, 4000);
        
    }
}

/*
var mydiv = document.getElementById("selectbtn");
var aTag = document.createElement('a');
aTag.setAttribute('href',"http://127.0.0.1:5501/PinakasDmpp.html");
aTag.innerText = "fas fa-check btnselect";
mydiv.appendChild(aTag);*/

