const employees = [
    {
        id: 1,
        name: 'John Doe',
        age: 18,
        address: '123 Main St',
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        address: '456 Elm St',
    },
    {
        id: 3,
        name: 'Sam Johnson',
        age: 30,
        address: '789 Oak St',
    },
    {
        id: 4,
        name: 'Alice Brown',
        age: 22,
        address: '321 Pine St',
    },
    {
        id: 5,
        name: 'Bob White',
        age: 28,
        address: '654 Maple St',
    },
]
    let tableDataEl = document.getElementById('table_data');
function renderDataToView () {
    let html = '';
    for (let i = 0; i < employees.length; i++) {
        html += `
            <tr>
                <td>${employees[i].id}</td>
                <td>${employees[i].name}</td>
                <td>${employees[i].age}</td>
                <td>${employees[i].address}</td>
            </tr>
        `;
    }
    tableDataEl.innerHTML = html;
}
renderDataToView();