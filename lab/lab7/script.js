// ===== ЗАВДАННЯ 3 =====
async function getData() {
    const res = await fetch("https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*");
    const data = await res.json();

    return data.slice(1).map(item => ({
        name: item[0],
        state: item[1],
        county: item[2],
        code: item[1] + item[2]
    }));
}

function findCountyCode(data, countyName) {
    const county = data.find(c => c.name === countyName);
    return county ? county.code : "Not found";
}

async function handleClick() {
    const data = await getData();
    const value = document.getElementById("input").value;
    const code = findCountyCode(data, value);

    document.getElementById("result").innerText = code;
}


// ===== ЗАВДАННЯ 4 =====
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const first = first_name.value;
    const last = last_name.value;
    const email = email.value;

    if (!first || !last || !email) {
        alert("Заповніть всі поля!");
        return;
    }

    alert(`${first} ${last} (${email})`);
});


// ===== ЗАВДАННЯ 5 =====
let pos = 0;

function move(step) {
    pos += step;
    document.getElementById("elid").style.left = pos + "px";
}