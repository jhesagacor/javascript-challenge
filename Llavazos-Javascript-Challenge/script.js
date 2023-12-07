const URL_API  = 'https://js-6e32d-default-rtdb.firebaseio.com/'

const cardsContainer = document.querySelector('#cards-container');
const cardContainer = document.querySelector('#card-body--container');


const renderPost = () => {
    const card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_body.id = 'card-body--container';
    const card_resumen = document.createElement('div');
    card_resumen.className = 'card mb-3';
    card_resumen.id = 'resumen';
    const anchorCard = document.createElement('a');
    anchorCard.href = './Post/indexPs.html';
    anchorCard.id = 'enlace';
    const imgCard = document.createElement('img');
    imgCard.className = 'card-img-top';
    imgCard.src = 'https://res.cloudinary.com/practicaldev/image/fetch/s--xrBVL0I0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/he9jeudt1gebya1cahz3.jpg'
    const card_body2 = document.createElement('div');
    card_body2.className = 'card-body';
    const card_top = document.createElement('div');
    card_top.className = 'card__top d-flex';
    const card_top_meta = document.createElement('div');
    card_top_meta.className = 'card__top-meta';
    const card_top_autor_pic = document.createElement('div');
    card_top_autor_pic.className = 'card__top-autor-pic';
    const card_top_autor_avatar = document.createElement('a');
    card_top_autor_avatar.className = 'card__top-autor-avatar';
    const card_top_avatar_image = document.createElement('img');
    card_top_avatar_image.className = 'card__top-avatar-image rounded-circle';
    card_top_avatar_image.src = 'https://res.cloudinary.com/practicaldev/image/fetch/s--JayWOFF7--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/23695/129887f7-57e5-49b8-84ac-482361194daf.JPG';
    const card_top_info = document.createElement('div');
    card_top_info.className = 'card__top-info';
    const card_top_list = document.createElement('ul');
    card_top_list.className = 'card__top-list list-unstyled';
    const card_top_name = document.createElement('li');
    card_top_name.className = 'card__top-name';
    const card_top_p = document.createElement('p');
    card_top_p.id = 'card_top_p';
    const strong_name = document.createElement('strong');
    strong_name.id = 'strong_name';
    strong_name.textContent = 'Srikanth';
    const strong_teamName = document.createElement('strong')
    strong_teamName.id = 'strong_teamName';
    strong_teamName.textContent = 'svemaraju.github.io'
    const card_top_date = document.createElement('li');
    card_top_date.className = 'card__top-date';
    card_top_date.textContent = 'Aug 3 (5 days ago)';

    const card_title_link = document.createElement('a');
    card_title_link.href = './Post/indexPs.html';
    card_title_link.className = 'card-title-link text-decoration-none';
    const card_title = document.createElement('h2');
    card_title.className = 'card-title';
    card_title.textContent = 'Start by writing messy code';


    const card_tags = document.createElement('ul');
    card_tags.className = 'card__tags d-flex flex-wrap list-unstyled';
    const card_tag = document.createElement('li');
    card_tag.className = 'card__tag me-2';
    const card_tag_link = document.createElement('a');
    card_tag_link.className = 'text-decoration-none card__tag-color';
    card_tag_link.id = 'card_tag_link'
    card_tag_link.textContent = '#programing';
    const card_tag2 = document.createElement('li');
    card_tag2.className = 'card__tag me-2';
    const card_tag_link2 = document.createElement('a');
    card_tag_link2.className = 'text-decoration-none card__tag-color';
    card_tag_link2.id = 'card_tag_link'
    card_tag_link2.textContent = '#webdev';
    const card_tag3 = document.createElement('li');
    card_tag3.className = 'card__tag me-2';
    const card_tag_link3 = document.createElement('a');
    card_tag_link3.className = 'text-decoration-none card__tag-color';
    card_tag_link3.id = 'card_tag_link'
    card_tag_link3.textContent = '#python';
    const card_tag4 = document.createElement('li');
    card_tag4.className = 'card__tag me-2';
    const card_tag_link4 = document.createElement('a');
    card_tag_link4.className = 'text-decoration-none card__tag-color';
    card_tag_link4.id = 'card_tag_link';
    card_tag_link4.textContent = '#career';
    const interaction_container = document.createElement('div');
    interaction_container.className = 'interaction__container d-flex justify-content-between';
    const card_reactions = document.createElement('ul');
    card_reactions.className = 'card__reactions d-flex flex-wrap list-unstyled';
    const card_reaction = document.createElement('li');
    card_reaction.className = 'card__reaction';
    const card_reaction_image = document.createElement('img');
    card_reaction_image.src = 'https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg';
    const card_reaction2 = document.createElement('li');
    card_reaction2.className = 'card__reaction';
    const card_reaction_image2 = document.createElement('img');
    card_reaction_image2.src = 'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg';
    const card_reaction3 = document.createElement('li');
    card_reaction3.className = 'card__reaction';
    const card_reaction_image3 = document.createElement('img');
    card_reaction_image3.src = 'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg';
    const card_reaction4 = document.createElement('li');
    card_reaction4.className = 'card__reaction';
    const card_reaction_image4 = document.createElement('img');
    card_reaction_image4.src = 'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg'
    const card_reaction5 = document.createElement('li');
    card_reaction5.className = 'card__reaction';
    const card_reaction_image5 = document.createElement('img');
    card_reaction_image5.src = 'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg';
    const card_reaction_counter = document.createElement('li');
    card_reaction_counter.className = 'card__reaction-text d-none d-md-block mx-2';
    card_reaction_counter.textContent = '46 reactions'
    const card_comments = document.createElement('ul');
    card_comments.className = 'card__coments d-flex flex-wrap list-unstyled';
    const card_comment_icon = document.createElement('li');
    card_comment_icon.className = 'card__coment-icon';
    const card_comment_icon_img = document.createElement('img');
    card_comment_icon_img.id = 'card_comment_icon_img';
    card_comment_icon_img.src = './Images/coments.svg';
    const card_coment_number = document.createElement('li')
    card_coment_number.className = 'card__coment-number';
    card_coment_number.textContent = '5';
    const card_coment_text = document.createElement('li');
    card_coment_text.className = 'card__coment-text d-none d-md-block mx-2';
    card_coment_text.textContent = 'Comments';
    const card_read_save = document.createElement('ul');
    card_read_save.className = 'card__read-save d-flex flex-wrap list-unstyled';
    const card_read = document.createElement('li');
    card_read.className = 'card__read';
    const small_card_read = document.createElement('small');
    small_card_read.className = 'text-body-secondary';
    small_card_read.id = 'small_card_read';
    small_card_read.textContent = '4 min read';
    const card_save = document.createElement('li');
    card_save.className = 'card__save';
    const card_save_img = document.createElement('img');
    card_save_img.id = 'card_save_img';
    card_save_img.src = './Images/save-post.svg'

    cardsContainer.appendChild(card_body);

    card_body.appendChild(card_resumen);
    card_resumen.appendChild(anchorCard);
    card_resumen.appendChild(card_body2);

    anchorCard.appendChild(imgCard);
    card_body2.appendChild(card_top);
    card_body2.appendChild(card_title_link);
    card_body2.appendChild(card_tags);
    card_body2.appendChild(interaction_container);

    card_top.appendChild(card_top_meta);
    card_top_meta.appendChild(card_top_autor_pic);
    card_top_autor_pic.appendChild(card_top_autor_avatar);
    card_top_autor_avatar.appendChild(card_top_avatar_image);

    card_top.appendChild(card_top_info);
    card_top_info.appendChild(card_top_list);
    card_top_list.appendChild(card_top_name)
    card_top_name.appendChild(card_top_p);
    card_top_p.appendChild(strong_name)
    card_top_p.appendChild(strong_teamName);
    card_top_list.appendChild(card_top_date)

    card_title_link.appendChild(card_title);

    card_tags.appendChild(card_tag);
    card_tag.appendChild(card_tag_link);
    card_tags.appendChild(card_tag2);
    card_tag2.appendChild(card_tag_link2);
    card_tags.appendChild(card_tag3);
    card_tag3.appendChild(card_tag_link3);
    card_tags.appendChild(card_tag4);
    card_tag4.appendChild(card_tag_link4)

    interaction_container.appendChild(card_reactions);
    card_reactions.appendChild(card_reaction)
    card_reaction.appendChild(card_reaction_image);
    card_reactions.appendChild(card_reaction2)
    card_reaction2.appendChild(card_reaction_image2);
    card_reactions.appendChild(card_reaction3)
    card_reaction3.appendChild(card_reaction_image3);
    card_reactions.appendChild(card_reaction4)
    card_reaction4.appendChild(card_reaction_image4);
    card_reactions.appendChild(card_reaction5)
    card_reaction5.appendChild(card_reaction_image5);
    card_reactions.appendChild(card_reaction_counter)

    interaction_container.appendChild(card_comments);
    card_comments.appendChild(card_comment_icon);
    card_comment_icon.appendChild(card_comment_icon_img)
    card_comments.appendChild(card_coment_number)
    card_comments.appendChild(card_coment_text)

    interaction_container.appendChild(card_read_save);
    card_read_save.appendChild(card_read);
    card_read.appendChild(small_card_read);
    card_read_save.appendChild(card_save);
    card_save.appendChild(card_save_img);
}

renderPost();
renderPost();
renderPost();
renderPost();
//Sample to render post
const renderPostList = (listToRender) => {
    listToRender.forEach(( post, index ) => {
        renderPersona(post, index);
    });
};

//Sample clean list
const cleanList = () => {
    while(cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild)
    };
};

//sample to get the details from firebase
const getInfo = async() => {
    try {
        const url = URL_API + '.json'
        const response = await fetch(url);
        if(response.status !== 201){
            const parsed = await response.json();
            const responseParsed = parserResponseFireBase(parsed);
            cleanList();
            renderList(responseParsed)
        }

    } catch (error) {
        console.error(error, 'xxxx')
    }
};