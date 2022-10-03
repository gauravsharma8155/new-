
// form = document.getElementById("control-row");
// go = document.getElementById("go");
// input = document.getElementById("input");
// message = document.getElementById("message");

// // The async IIFE is necessary because Chrome <89 does not support top level await.
// (async function initPopupWindow() {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     if (tab?.url) {
//         try {
//             let url = new URL(tab.url);
//             input.value = url.hostname;
//         } catch { }
//     }

//     input.focus();
// })();

// form.addEventListener("submit", handleFormSubmit);

// async function handleFormSubmit(event) {
//     event.preventDefault();

//     //   clearMessage();

//     let url = stringToUrl(input.value);
//     if (!url) {
//         setMessage("Invalid URL");
//         return;
//     }

//     let message = await deleteDomainCookies(url.hostname);
//     //   setMessage(message);
// }

// function stringToUrl(input) {
//     // Start with treating the provided value as a URL
//     try {
//         return new URL(input);
//     } catch { }
//     // If that fails, try assuming the provided input is an HTTP host
//     try {
//         return new URL("http://" + input);
//     } catch { }
//     // If that fails ¯\_(ツ)_/¯
//     return null;
// }

// async function deleteDomainCookies(domain) {
//     let cookiesDeleted = 0;
//     try {
//         const cookies = await chrome.cookies.getAll({ domain });
//         console.log(cookies)
//         if (cookies.length === 0) {
//             return "No cookies found";
//         }



//         // cookies.map(item => {
//         for (const key in cookies) {

//             const element = cookies[key];
//             console.log(element);
//             // console.log(element.key[0], "kkjjknjb")
//             // console.log(element);

//             let h = `<input type="radio" name="accordion" id="cb2" />
//             <section class="box">
//                <label class="box-title" for="cb2">${element.sameSite} <button ><img src="bin.png"  class="dlt_btn"></button></label>
//                <div class="box-content">
//                    <label class="box-close" for="acc-close"></label>
//                    <span class="lable_heading">Name</span>
//                    <input type="text" id="fname0" value=${element.name} name="firstname" placeholder="enter name..">
//                    <div class="flex_box">
//                        <img src="bin.png" id="btn5" class="delete-btn">
//                        <img src="sim-card.png" class="delete-btn_1">
//                    </div>
//                </div>
//                <div class="box-content">
//                    <label class="box-close1" for="acc-close"></label>
//                    <span class="lable_heading1">value</span>
//                    <input type="text" id="fname2"  value=${element.value} placeholder="enter>
//                </div>
//                <div class="box-content">
//                    <label class="box-close" for="acc-close"></label>
//                    <span class="lable_heading">Domain</span>
//                    <input type="text" id="fname3" name="domain" value=${element.domain} placeholder="">
//                </div>
//                <div class="box-content">
//                    <label class="box-close" for="acc-close"></label>
//                    <span class="lable_heading">Path</span>
//                    <input type="text" id="fname4" name="pathname" value=${element.path} placeholder="\">
//                </div>
//                <div class="box-content">
//                    <label class="box-close" for="acc-close"></label>
//                    <span class="lable_heading">Expiration</span>
//                    <input type="text" id="fname6" value=${element.expirationDate} name="expiration" placeholder="...">
//                </div>
//            </section>

    
//               `
//             //    <button id="btn5">Save Cookie</button>
//             let append = document.getElementById("append").innerHTML = h


//         }
//     }
