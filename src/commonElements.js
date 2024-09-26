// render header inside of body
function renderHeader(body) {
    let header = document.createElement("div");
    header.classList.toggle("header");
    header.innerHTML = `
        <div class="header-text">
            TODO
        </div>
    `;
    body.appendChild(header);
}

export default { renderHeader };
