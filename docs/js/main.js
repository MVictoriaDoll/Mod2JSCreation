let t={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};const u=document.querySelector(".js__input_name"),_=document.querySelector(".js__input_job"),m=document.querySelector(".js__inputPhone"),p=document.querySelector(".js__inputEmail"),v=document.querySelector(".js__inputLinkedin"),h=document.querySelector(".js__inputGithub"),g=document.querySelector(".js__namePreview"),q=document.querySelector(".js__jobPreview");document.querySelector(".js__phonePreview");document.querySelector(".js__emailPreview");document.querySelector(".js__linkedinPreview");document.querySelector(".js__githubPreview");const C=e=>{t.name=u.value,o()};u.addEventListener("input",C);const T=e=>{t.job=_.value,o()};_.addEventListener("input",T);const F=e=>{t.phone=m.value,o()};m.addEventListener("input",F);const M=e=>{t.email=p.value,o()};p.addEventListener("input",M);const H=e=>{t.linkedin=v.value,o()};v.addEventListener("input",H);const B=e=>{t.github=h.value,o()};h.addEventListener("input",B);localStorage.setItem("data",JSON.stringify(t));function D(e){u.setAttribute("value",e.name),_.setAttribute("value",e.job),m.setAttribute("value",e.phone),p.setAttribute("value",e.email),v.setAttribute("value",e.linkedin),h.setAttribute("value",e.github)}const k=JSON.parse(localStorage.getItem("data"));k!==null&&D(k);const L=document.querySelector(".js__createCardBtn"),f=document.querySelector(".js__createCardIcon"),l=document.querySelector(".js__icon_arrow_share"),c=document.querySelector(".js__icon_arrow_fill"),a=document.querySelector(".js__icon_arrow_design");document.querySelector(".js__form_fieldset_share");const s=document.querySelector(".js__form-share-section"),i=document.querySelector(".js__design_form"),r=document.querySelector(".js__form_fill"),y=document.querySelector(".js__createMessage"),U=document.querySelector(".js__creatCardLink"),w=document.querySelector(".js__twitterBtn"),N=e=>{e.preventDefault(),console.log("boton clickeado"),fetch("https://dev.adalab.es/api/card/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>{if(n.success===!1)y.innerHTML=`<P>Ha sucedido un error al crear la tarjeta</P>
             <P>${n.error}</P>
            `;else if(n.success===!0){U.innerHTML=`<a href="${n.cardURL}" target="_blank" class="creat_Card_link">${n.cardURL}</a>`,y.classList.remove("hidden"),y.classList.add("visible"),L.classList.add("disabled"),f.classList.add("disabled_icon");const b=encodeURIComponent(n.cardURL);w.href=`https://twitter.com/intent/tweet?url=${b}`,w.style.display="block"}})},j=e=>{e.preventDefault(),console.log("click display");const n=e.currentTarget,b=n.classList.toggle("active");n!==l&&(l.classList.remove("active"),s.classList.add("hidden"),s.classList.remove("visible")),n!==a&&(a.classList.remove("active"),i.classList.add("hidden"),i.classList.remove("visible")),n!==c&&(c.classList.remove("active"),r.classList.add("hidden"),r.classList.remove("visible")),b?n===l?(s.classList.add("visible"),s.classList.remove("hidden")):n===a?(i.classList.add("visible"),i.classList.remove("hidden")):n===c&&(r.classList.add("visible"),r.classList.remove("hidden")):n===l?(s.classList.add("hidden"),s.classList.remove("visible")):n===a?(i.classList.add("hidden"),i.classList.remove("visible")):n===c&&(r.classList.add("hidden"),r.classList.remove("visible"))},G=()=>{console.log("Input cambiado"),L.classList.remove("disabled"),f.classList.remove("disabled_icon")},J=[u,_,m,p,v,h];for(const e of J)e.addEventListener("input",G);L.addEventListener("click",N);l.addEventListener("click",j);c.addEventListener("click",j);a.addEventListener("click",j);document.querySelector(".js__inputEmail");document.querySelector(".js__inputPhone");document.querySelector(".js__inputLinkedin");document.querySelector(".js__inputGithub");const P=document.querySelector(".js__profile-image"),I=document.querySelector(".js__profile-preview"),O=document.querySelector(".js__link__phone"),R=document.querySelector(".js__link__email"),x=document.querySelector(".js__link__linkedin"),z=document.querySelector(".js__link__github"),K=()=>{t.name===""?g.innerHTML="Nombre Apellidos":g.innerHTML=t.name,t.job===""?q.innerHTML="Front-end developer":q.innerHTML=t.job},Q=()=>{O.href=`tel:${t.phone}`,x.href=`https://www.linkedin.com/in/${t.linkedin}`,z.href=`http://github.com/${t.github}`,R.href=`mailto:${t.email}`},V=()=>{$()},W=()=>{t.photo===""?(I.setAttribute("style",""),P.setAttribute("style","")):t.photo.trim()>0&&(I.setAttribute("style",t.photo),P.setAttribute("style",t.photo))},o=()=>{K(),Q(),V(),W()},X=document.querySelector(".js__resetBtn"),Y=document.querySelector(".js__form"),Z=e=>{t={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},L.classList.remove("disabled"),f.classList.remove("disabled_icon"),Y.reset(),o()};X.addEventListener("click",Z);const ee=document.querySelector(".js__inputPalette1"),te=document.querySelector(".js__inputPalette2"),ne=document.querySelector(".js__inputPalette3"),E=document.querySelector(".js__linePreview"),A=document.querySelector(".js__namePreview"),oe=document.querySelectorAll(".js__linkPreview");function $(){console.log(`Estyo refrescando a paleta ${t.palette}`),A.classList.remove("color_palette1","color_palette2","color_palette3"),A.classList.add(`color_palette${t.palette}`),E.classList.remove("line_color_palette1","line_color_palette2","line_color_palette3"),E.classList.add(`line_color_palette${t.palette}`);for(const e of oe)e.classList.remove("border_color_palette1","border_color_palette2","border_color_palette3","color_palette1","color_palette2","color_palette3"),e.classList.add(`border_color_palette${t.palette}`),e.classList.add(`color_palette${t.palette}`)}function S(e){e.preventDefault(),t.palette=e.currentTarget.value,$()}ee.addEventListener("change",S);te.addEventListener("change",S);ne.addEventListener("change",S);const d=new FileReader,se=document.querySelector(".js__profile-upload-btn"),ie=document.querySelector(".js__profile-image"),re=document.querySelector(".js__profile-preview");function le(e){const n=e.currentTarget.files[0];d.addEventListener("load",ce),d.readAsDataURL(n)}function ce(){ie.style.backgroundImage=`url(${d.result})`,re.style.backgroundImage=`url(${d.result})`,t.photo=d.result}se.addEventListener("change",le);
//# sourceMappingURL=main.js.map
