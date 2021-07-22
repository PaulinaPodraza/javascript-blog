'use strict';

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* remove class 'active' from all article links  */

  /* add class 'active' to the clicked link */

  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}
  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
  console.log('targetArticle:', targetArticle);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  function clearMessages(){
    titleList.innerHTML = '';
  }
  
  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log(articles);
  let html = '';
  for(let article of articles){ 
  
    /* get the article id */
    
    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */
    /* get the title from the title element */
    
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
  /* create HTML of the link */
  
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
  
  /* insert link into titleList */
     html = html + linkHTML;
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
  link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const TagWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
  
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {

      /* generate HTML of the link */
      let linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log(linkHTML);
      /* add generated code to html variable */
      html = html + '' + linkHTML;
    }
    /* END LOOP: for each tag */
  
    /* insert HTML of all the links into the tags wrapper */
    TagWrapper.innerHTML = html;
  }
    /* END LOOP: for every article: */
}
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = this.getAttribute('href');
  console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);
  /* find all tag links with class active */
  const ActiveLink = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(ActiveLink);
  /* START LOOP: for each active tag link */
  const ActiveLinks = document.querySelectorAll('tag');
  for (let ActiveLink of ActiveLinks) {
    /* remove class active */
    ActiveLink.classList.remove('active');
    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('href');
    console.log(tagLinks);
    /* START LOOP: for each found tag link */
    for (let tagLink of tagLinks) {
      /* add class active */
      tagLink.classList.add('active');
      console.log('tagLink:', tagLink);
      /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}


function addClickListenersToTags(){
  /* find all links to tags */
  const tags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(tags);
  /* START LOOP: for each link */
  for (let tag of tags) {
    console.log(tag);
    /* add tagClickHandler as event listener for that link */
    tag.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(article);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find autors wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get autors from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    console.log(articleAuthor);
    /* generate HTML of the link */
    let authorTag = '<a href="#author' + articleAuthor + '">' + articleAuthor + '</a>';
    console.log(authorTag);
    /* add generated code to html variable */
    html = html + '' + authorTag;
    /* END LOOP: for each tag */
    }
  /* insert HTML of all the links into the author wrapper */
  authorWrapper.innerHTML = html + authorTag;
  /* END LOOP: for every article: */
}

generateAuthors();

function authorClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const ClickedAuthor = clickedElement.getAttribute('href');
  console.log(href);
  /* make a new constant "author" and extract tag from the "href" constant */
  const ClikedHref = ClickedAuthor.replace('#', '');
  console.log(ClikedHref);
  /* find all tag links with class active */
  const ActiveLink = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(ActiveLink);
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + ClikedHref + '"]');
}

function addClickListenersToAuthors() {
  /* find all links to author */
  const author = document.querySelectorAll('.post-author a');
  console.log(author);
  /* START LOOP: for each link */
  for (let author of authors) {
    console.log(author);
    /* add tauthorClickHandler as event listener for that link */
    author.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
  }
}
  
addClickListenersToAuthors();
