const commentTemplate = `<div class="comment">
<span class="comment-author"></span>
<span> | </span>
<span class="comment-date"></span>
<p class="content"></p>
<div class="actions">
  <button class="view-replies">---View Replies</button>
  <button class="edit">Edit</button>
</div>
<div class="comment-add">
    <input type="text" class="comment-box" placeholder="type..."/>
    <button class="add-comment">Add</button>
</div>
<div class="comment-replies"></div>
</div>`


const createCommentInputBox = ()=>{
    const ele = document.querySelector('.comment-add');
    return ele.cloneNode(true);
}

const createCommentElement = ({id,author,date,text,replies=[],parentId=null,level=0})=>{
    let ele = document.createElement('template');
    ele.innerHTML = commentTemplate;
    ele = ele.content.firstElementChild.cloneNode(true);
    console.log('commentEle',id,replies);
    ele.setAttribute('id',id);
    ele.querySelector('.comment-author').textContent = author;
    ele.querySelector('.comment-date').textContent = date;
    ele.querySelector('.content').textContent = text;
    const commentReplies = ele.querySelector('.comment-replies');
    commentReplies.setAttribute('id',`${id}-replies`);
    commentReplies.setAttribute('level',level);
    let listOfEle = [];
    replies.forEach((comment)=>{
        const createdEle = createCommentElement({...comment,parentId:id, level:level+1});
        listOfEle.push(createdEle);
    })
    if(listOfEle?.length)commentReplies.append(...listOfEle);
    console.log('final:',ele);
    return ele;
}

const handleViewReplyClick = (event)=>{
    const targetEle = event.target.closest('.comment');
    const btn = targetEle.querySelector('.view-replies');
    const list = targetEle.querySelector('.comment-replies');
   
    if(list.style.display==='none'){
        list.style.display = 'contents';
        btn.innerText = "hide";
    }else if(list.style.display==='contents'){
        list.style.display = 'none';
        btn.innerText = "Show";
    }else{
        list.style.display = 'contents'; 
        btn.innerText = "hide";
    }
    console.log('click:',list,list.style.display);

}

const handleReplyClick = (event)=>{
    const targetEle = event.target.closest('.comment');
    const replyContainer = targetEle.querySelector('.comment-replies');
    const container = event?.target?.parentNode;
    const inputEle = container.querySelector('.comment-box');
    const value = inputEle.value;
    const commentEle = createCommentElement({id:Date.now(),author:'MJD_17',date: new Date().toDateString(),text:value});
    replyContainer.prepend(commentEle);
    inputEle.value=null;
    console.log('target',targetEle);
}

const handleEvent = (event)=>{
    const targetEle = event?.target?.className;
    console.log('event:',event,targetEle);
    if(targetEle ==='view-replies'){
        handleViewReplyClick(event);
    }else if(targetEle==='add-comment'){
        handleReplyClick(event);
    }
//
//

}


export default{
    createCommentElement,
    createCommentInputBox,
    handleEvent
}