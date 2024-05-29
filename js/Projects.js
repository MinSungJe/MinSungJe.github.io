let github_links = [
    "https://github.com/MinSungJe/NoAutoCode",
    "https://github.com/CSID-DGU/2024-1-OSSProj-GiveMeTen-11",
    "https://github.com/MinSungJe/MinSungJe.github.io"
]

// Link-Card 연결
for (let i = 0; i < github_links.length; i++) {
    let github_link = github_links[i]
    $('.link-card').eq(i).click(() => { window.open(github_link); })
}