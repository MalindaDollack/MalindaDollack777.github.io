const EMAIL="dollackj316@gmail.com";const modal=document.getElementById("modal"),fmt=document.getElementById("format"),order=document.getElementById("order");document.querySelectorAll("[data-format]").forEach(b=>b.addEventListener("click",()=>{fmt.textContent=b.dataset.format;order.elements.format.value=b.dataset.format;modal.classList.add("open")}));document.getElementById("close").onclick=()=>modal.classList.remove("open");modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});order.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(order),subject=`Order Request: Sarah — ${d.get("format")}`,body=`Book: Sarah the Baby Sheep: My Shepherd, Jesus's Birth, The Christmas Story
Format: ${d.get("format")}
Name: ${d.get("name")}
Email: ${d.get("email")}
Address: ${d.get("address")||"Not supplied"}

${d.get("message")||""}

Please reply with e-Transfer and delivery instructions.`;location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});document.querySelectorAll(".mail").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f),body=`Name: ${d.get("name")}
Email: ${d.get("email")}

${d.get("message")||""}`;location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(f.dataset.subject)}&body=${encodeURIComponent(body)}`}));document.getElementById("vote").addEventListener("submit",e=>{e.preventDefault();document.getElementById("voteStatus").textContent=`Thank you! You voted for ${new FormData(e.target).get("animal")}.`});const review=document.getElementById("review"),out=document.getElementById("reviews");function draw(){const r=JSON.parse(localStorage.getItem("reviews")||"[]");out.innerHTML=r.map(x=>`<p><b>${"★".repeat(x.rating)}</b> “${x.text}” — ${x.name}</p>`).join("")}review.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(review),r=JSON.parse(localStorage.getItem("reviews")||"[]");r.unshift({name:d.get("name"),rating:+d.get("rating"),text:d.get("text")});localStorage.setItem("reviews",JSON.stringify(r.slice(0,20)));review.reset();draw()});draw();document.getElementById("year").textContent=new Date().getFullYear();