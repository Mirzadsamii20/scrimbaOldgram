let likebtn= [document.getElementById('like0'),document.getElementById('like1'),document.getElementById('like2')];
let likes = [document.getElementById('likes0'),document.getElementById('likes1'),document.getElementById('likes2')]
// let post0 = document.getElementById('post0');    
 

const images = document.querySelectorAll('img');

    // Add click event listener to each image
    images.forEach(image => {
      image.addEventListener('click', function() {
        // Get the id of the clicked image
        const attr = image.getAttribute('id');

        if( attr.includes('like')){
        const imageId = this.id;
        
        const i = imageId.charAt(imageId.length-1);
        console.log('Clicked image ID:', imageId , i);



        let srcAtt = likebtn[i].getAttribute('src');
            let originalText = likes[i].textContent;
    if(srcAtt.includes('icon')){

    likebtn[i].src = 'filledheart.png';
    likebtn[i].classList = 'rounded';
    // likes[i].textContent = 'Likedy by you, shamstabrizi44 and 231323 others';
    let positions = likes[i].textContent;
    let position = positions.indexOf('y')+2;
    
     likes[i].textContent = `${likes[i].textContent.slice(0,position) } you , ${likes[i].textContent.slice(position)}`
    
    }
    else{
    likebtn[i].src = 'icon-heart.png'
    likes[i].textContent =likes[i].textContent.split('you ,').join("").trim();

    }
        }
        // Do whatever you want with the image ID here
      });
    });