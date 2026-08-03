
const oldBase="https://malindadollack.github.io/ChildrensJesusStories.github.io/";
const books=[
{name:"Sarah",title:"Sarah the Baby Sheep: My Shepherd, Jesus's Birth, The Christmas Story",ref:"Luke 2:1–20 (NIV)",img:"assets/sarah-book-cover.png"},
{name:"Joy",title:"Joy the Fish: Relocates to a New Pond, Heaven Our New Pond",ref:"John 14:1–3 (NIV)",img:oldBase+"joy-new.png"},
{name:"Wally",title:"Wally the Whale: Obeys God and Swallows a Human, Jonah",ref:"The Book of Jonah",img:oldBase+"wally-new.png"},
{name:"Levi",title:"Levi the Lion: Listens to God and Laughs with Daniel",ref:"Daniel 6",img:oldBase+"levi-new.png"},
{name:"Freddy",title:"Freddy the Ferret: Has Fun in the Fiery Furnace",ref:"Daniel 3:16–28",img:oldBase+"freddy-new.png"},
{name:"Patsy",title:"Patsy the Plain Peacock: Gives Queen Esther Fashion Advice",ref:"The Book of Esther",img:oldBase+"patsy-new.png"},
{name:"Davy",title:"Davy the Donkey Speaks Out Loud: The Bullying by Balaam",ref:"Numbers 22:21–39",img:oldBase+"davy-new.png"},
{name:"Larry",title:"Larry the Lizard: Leaps with the Leper! Only One Leper Thanks Jesus",ref:"Luke 17:11–19",img:oldBase+"larry-new.png"},
{name:"Francesco",title:"Francesco's Frog Fiesta in Egypt: The Second Plague",ref:"Exodus 8:1–15",img:oldBase+"francesco-new.png"},
{name:"Sweet-Pea",title:"Sweet-Pea the Sparrow: Is Cared for by God",ref:"Matthew 10:29–31",img:oldBase+"sweetpea-new.png"},
{name:"Willy",title:"Willy the Water Strider Bug: Walks on Water with Jesus",ref:"Matthew 14:22–33",img:oldBase+"willy-new.png"},
{name:"Barry",title:"Barry the Blind Mole: Receives His Sight Along with the Blind Man Jesus Healed",ref:"John 9",img:oldBase+"barry-new.png"}];

const grid=document.getElementById("bookGrid");
books.forEach(b=>{
 const card=document.createElement("article"); card.className="book-card";
 card.innerHTML=`<img src="${b.img}" alt="${b.title}"><h3>${b.title}</h3><p class="reference">${b.ref}</p><div class="prices"><span>E-book <b>C$7.00</b></span><span>Softcover <b>C$17.77</b></span></div><button class="soon">COMING SOON</button>`;
 const img=card.querySelector("img");
 img.addEventListener("click",()=>openViewer(img.src,b.title));
 img.addEventListener("error",()=>{img.style.display="none";card.insertAdjacentHTML("afterbegin",`<div style="aspect-ratio:1/1.14;display:grid;place-content:center;background:linear-gradient(135deg,#fff0a8,#ffc5e2,#c7f3ff);border-radius:14px;color:#591586;font-size:1.2rem"><strong>${b.name}</strong><small>Artwork coming soon</small></div>`)},{once:true});
 grid.appendChild(card);
});
const viewer=document.getElementById("viewer");
function openViewer(src,title){viewer.querySelector("img").src=src;viewer.querySelector("p").textContent=title;viewer.classList.add("open")}
function closeViewer(){viewer.classList.remove("open")}
viewer.querySelector("button").addEventListener("click",closeViewer);viewer.addEventListener("click",e=>{if(e.target===viewer)closeViewer()});
const menu=document.querySelector(".menu"),nav=document.querySelector("nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const reviewBook=document.getElementById("reviewBook");books.forEach(b=>reviewBook.insertAdjacentHTML("beforeend",`<option>${b.name}</option>`));
const form=document.getElementById("reviewForm"),list=document.getElementById("reviewList");const esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function render(){const r=JSON.parse(localStorage.getItem("malindaReviews")||"[]");list.innerHTML=r.map(x=>`<article class="review-item"><div class="stars">${"★".repeat(x.rating)}${"☆".repeat(5-x.rating)}</div><strong>${esc(x.book)}</strong><p>“${esc(x.review)}”</p><small>— ${esc(x.name)}</small></article>`).join("")}
form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form),r=JSON.parse(localStorage.getItem("malindaReviews")||"[]");r.unshift({name:d.get("name"),book:d.get("book"),rating:Number(d.get("rating")),review:d.get("review")});localStorage.setItem("malindaReviews",JSON.stringify(r.slice(0,20)));form.reset();render()});render();
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const body=`Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`;location.href=`mailto:dollackj316@gmail.com?subject=${encodeURIComponent("Message from Malinda's Story Garden")}&body=${encodeURIComponent(body)}`});
document.getElementById("year").textContent=new Date().getFullYear();
