// Link-Card 연결
for (let i = 0; i < links.length; i++) {
    let link = links[i]
    $('.index-link-card').eq(i).click(() => { window.location.href = "../pages/" + link + ".html"; })
}