/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
document.querySelector('body').style.fontFamily = 'arial, sans-serif';
document.getElementById('nickname').textContent = 'Obi';
document.getElementById('fav-food').textContent = 'Mlokhia';
document.getElementById('hometown').textContent = 'Jableh';
// const list = document.getElementsByTagName('ul');
const listItem = document.querySelectorAll('li');
for (i = 0; i < listItem.length; i++) {
  listItem[i].classList.add('list-item');
}

const image = document.createElement('img');
image.setAttribute(
  'src',
  'https://lh3.googleusercontent.com/VS3TUXwHJ76hz7elaV21G2QuRNISmOZsa97OU5uu3jBdktsQ6qrir_oX-VgTQJtidj2dYa3b8QP9dVEWCFzkYZaBTNPKjq2tdmmKU3LN9TkOqZcb5LrBdqWSTUIEz0sMVivfJ-FsV7U=w2400',
);
image.setAttribute('width', '400');
document.body.appendChild(image);
