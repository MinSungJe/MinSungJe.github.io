let links = ['Contacts', 'Tech', 'Study', 'Projects']

// Navbar 연결
$('.nav-title').click(()=>{ window.location.href = "../index.html"; })
for (let i = 0; i < links.length; i++) {
    let link = links[i]
    $('.nav-btn').eq(i).click(() => { window.location.href = "../pages/"+ link + ".html"; })
}