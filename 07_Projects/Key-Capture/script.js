const insert = document.querySelector('#insert')
// document.body.addEventListener('keydown', pressKey) //both same
window.addEventListener('keydown', pressKey)
function pressKey(e) {
    insert.innerHTML =`
        <table>
            <tr>
                <th>Key</th>
                <th>Code</th>
                <th>keyCode</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.code}</td>
                <td>${e.keyCode}</td>
            </tr>
        </table>
    `
}