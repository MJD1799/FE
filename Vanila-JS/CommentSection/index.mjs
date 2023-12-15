import { COMMENTS } from './data.mjs';

import comment from './comment.mjs';


const initCommentSection = () => {
    let data;
    if (!data) {
        data = COMMENTS;
        localStorage.setItem('commentList', JSON.stringify(COMMENTS));
    }else{
        data = JSON.parse(localStorage.getItem('commentList'));
    }
    console.log('data:',data);
    const commentEle = [];
    data.forEach((item)=>{
        commentEle.push(comment.createCommentElement(item));
    });
    console.log('ele:',commentEle);
    const commentList = document.querySelector('.comment-list');
    const newComment = document.querySelector('.comment-add');

    commentList.addEventListener('click',(event)=>{
        comment.handleEvent(event);

    });

    newComment.addEventListener('click',(event)=>{
        const targetEle = event?.target?.className;
        if(targetEle!=='add-comment') return;
        const container = event?.target?.parentNode;
        const inputEle = container.querySelector('.comment-box');
        console.log('dd:',event?.target?.parentNode?.firstChild,event);
        commentList.prepend(comment.createCommentElement({id:Date.now(),author:'MJD_17',text:inputEle?.value,date: new Date().toDateString()})) 
    })
    commentEle?.length && commentList.append(...commentEle);
}

initCommentSection();