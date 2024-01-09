export const htmlToJson = (html) => {
    let parser = new DOMParser; 
    let doc = parser.parseFromString(html, "text/html");  
    let table = doc.getElementsByTagName("table")[0]; 

    let data = []; 
    for (let i=1; i<table.rows.length; i++) {
        let row = {}; 
        for (let j=0; j<table.rows[i].cells.length; j++) {
            let key = table.rows[0].cells[j].innerText; 
            let value = table.rows[i].cells[j].innerText; 
            row[key] = value; 
        }
        data.push(row); 
    }

    let json = JSON.stringify(data); 
    return json; 
}