const socialMedia = {
  github: '9rodrigosoares',
  youtube: 'scarfayzzzz',
  facebook: 'rodsf9',
  instagram: 'rodsf9',
  twitter: 'sfthehustle'
}

function changeSocialMediaLinks() {}
for (let li of socialLinks.children) {
  const social = li.getAttribute('class')
  li.children[0].href = `https://${social}.com/${socialMedia[social]}`
}

changeSocialMediaLinks()

function getGitHubInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.textContent.href = data.html_url
      userImage.textContent.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubInfos()
