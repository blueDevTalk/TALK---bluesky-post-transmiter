function r(){const e=document.querySelector('form[data-testid="composeForm"]');if(e&&!document.getElementById("translate-button")){const t=document.createElement("button");t.id="translate-button",t.textContent="Translate",t.classList.add("translate-button"),t.addEventListener("click",o=>{o.preventDefault(),chrome.runtime.sendMessage({action:"openPopup"})}),e.appendChild(t)}}const a=new MutationObserver(()=>{r()});a.observe(document.body,{childList:!0,subtree:!0});const n=document.createElement("style");n.innerHTML=`
  .translate-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;document.head.appendChild(n);
