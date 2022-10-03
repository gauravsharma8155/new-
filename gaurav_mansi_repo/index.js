

form = document.getElementById("control-row");
go = document.getElementById("go");
input = document.getElementById("input");
message = document.getElementById("message");

// The async IIFE is necessary because Chrome <89 does not support top level await.
(async function initPopupWindow() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab?.url) {
        try {
            let url = new URL(tab.url);
            input.value = url.hostname;
        } catch { }
    }

    input.focus();
})();

form.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
    event.preventDefault();

    //   clearMessage();

    let url = stringToUrl(input.value);
    if (!url) {
        setMessage("Invalid URL");
        return;
    }

    let message = await deleteDomainCookies(url.hostname);
    //   setMessage(message);
}

function stringToUrl(input) {
    // Start with treating the provided value as a URL
    try {
        return new URL(input);
    } catch { }
    // If that fails, try assuming the provided input is an HTTP host
    try {
        return new URL("http://" + input);
    } catch { }
    // If that fails ¯\_(ツ)_/¯
    return null;
}

async function deleteDomainCookies(domain) {
    let cookiesDeleted = 0;
    try {
        const cookies = await chrome.cookies.getAll({ domain });
        console.log(cookies);
        if (cookies.length === 0) {
            return "No cookies found";
        }

        // cookies.map(item => {
        for (const key in cookies) {

            const element = cookies[key];
            console.log(element);
            // console.log(element.key[0], "kkjjknjb")
            // console.log(element);

            let h =

                cookies.map(item => {
                    console.log(item)
                    return `
                    <input type="radio" name="accordion" id="cb2" />
                    <section class="box">
                       <label class="box-title" for="cb2">${item.sameSite} <button ><img src="bin.png"  class="dlt_btn"/></button></label>
                       <div class="box-content">
                           <label class="box-close" for="acc-close"></label>
                           <span class="lable_heading">Name</span>
                           <input type="text" id="fname0" value=${item.name} name="firstname" placeholder="enter name.."/>
                           <div class="flex_box">
                               <img src="bin.png" id="btn5" class="delete-btn"/>
                               <img src="sim-card.png" class="delete-btn_1"/>
                           </div>
                       </div>
                       <div class="box-content">
                           <label class="box-close1" for="acc-close"></label>
                           <span class="lable_heading1">value</span>
                           <input type="text" id="fname2"  value=${item.value} placeholder="enter"/>
                       </div>
                       <div class="box-content">
                           <label class="box-close" for="acc-close"></label>
                           <span class="lable_heading">Domain</span>
                           <input type="text" id="fname3" name="domain" value=${item.domain} placeholder=""/>
                       </div>
                       <div class="box-content">
                           <label class="box-close" for="acc-close"></label>
                           <span class="lable_heading">Path</span>
                           <input type="text" id="fname4" name="pathname" value=${item.path} placeholder="\"/>
                       </div>
                       <div class="box-content">
                           <label class="box-close" for="acc-close"></label>
                           <span class="lable_heading">Expiration</span>
                           <input type="text" id="fname6" value=${item.expirationDate} name="expiration" placeholder="..."/>
                       </div>
                   </section>
                    
                    `
                }




                )



            // let h;
            // cookies.map(item=>{
            //     return `

            //     `
            // })
            //    <button id="btn5">Save Cookie</button>
            let append = document.getElementById("append").innerHTML = h

            let btn5 = document.getElementyById("btn5").addEventListener("click", async () => {
                console.log(btn5);

                let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: camera
                });





                let fname0 = document.getElementById("fname0").value
                console.log(fname0);

                let fname2 = document.getElementById("fname2").value
                console.log(fname2);
                let fname3 = document.getElementById("fname3").value
                console.log(fname3);

                let fname4 = document.getElementById("fname4").value
                console.log(fname4);

                let fname6 = document.getElementById("fname6").value
                console.log(fname6);


                let array = [fname0, fname2, fname3, fname4, fname6];
                console.log(array, "array");


                fname0 = document.getElementById("fname0").value
                console.log(fname0);

                fname2 = document.getElementById("fname2").value
                console.log(fname2);
                fname3 = document.getElementById("fname3").value
                console.log(fname3);

                fname4 = document.getElementById("fname4").value
                console.log(fname4);

                fname6 = document.getElementById("fname6").value
                console.log(fname6);


                array = [fname0, fname2, fname3, fname4, fname6];
                console.log(array, "array");

                // `${array[0]}=`




                chrome.storage.local.set({ array }, function () {
                    console.log('Value is set to ' + array);
                });

                chrome.storage.local.get(['array'], function (result) {
                    console.log('Value currently is ' + result.key);
                });

            });
        }
        // }).

        // let pending = cookies.map(deleteCookie);
        // await Promise.all(pending);

        // cookiesDeleted = pending.length;
    } catch (error) {
        return `Unexpected error: ${error.message}`;
    }

    return `Deleted ${cookiesDeleted} cookie(s).`;
}

camera = () => {
    alert("this is alert");

    chrome.storage.local.get(['array'], function (result) {
        console.log('Value currently is ' + result.array);
        console.log(result.array);
        // result.array.map((err) => {
        // //     console.log(err); 

        // //     document.cookie = `${err.name}=${err.value}`

        // // });




        const obj1 = Object.assign({}, result.array);
        console.log(obj1);

        let a = document.cookie = `${obj1[0]}=${obj1[1]}`
        console.log(a);



    });


}

// function deleteCookie(cookie) {
//   // Cookie deletion is largely modeled off of how deleting cookies works when using HTTP headers.
//   // Specific flags on the cookie object like `secure` or `hostOnly` are not exposed for deletion
//   // purposes. Instead, cookies are deleted by URL, name, and storeId. Unlike HTTP headers, though,
//   // we don't have to delete cookies by setting Max-Age=0; we have a method for that ;)
//   //
//   // To remove cookies set with a Secure attribute, we must provide the correct protocol in the
//   // details object's `url` property.
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#Secure
//   const protocol = cookie.secure ? "https:" : "http:";

//   // Note that the final URL may not be valid. The domain value for a standard cookie is prefixed
//   // with a period (invalid) while cookies that are set to `cookie.hostOnly == true` do not have
//   // this prefix (valid).
//   // https://developer.chrome.com/docs/extensions/reference/cookies/#type-Cookie
//   const cookieUrl = `${protocol}//${cookie.domain}${cookie.path}`;

// //   return chrome.cookies.remove({
// //     url: cookieUrl,
// //     name: cookie.name,
// //     storeId: cookie.storeId,
// //   });
// // }

// // function setMessage(str) {
// //   message.textContent = str;
// //   message.hidden = false;
// // }

// // function clearMessage() {
// //   message.hidden = true;
// //   message.textContent = "";
// // }



// mansi code
const add = document.getElementById("add_plus").addEventListener("click", () => {
    console.log("this is console btn");
    // let dropdown_btn = document.getElementById("dropdown_btn").style.display = "none";

    let add_container = document.getElementById("add_container").style.display = "block";
    let wrapperPg = document.getElementById("wrapperPg").style.display = "none";

    let navwrapeer = document.getElementById("navwrapeer").style.display = "block";

});

const btn = document.getElementById("delete_btn").addEventListener("click", () => {
    // let dropdown_btn = document.getElementById("dropdown_btn").style.display = "none";

    let delete_wrapper = document.getElementById("delete_wrapper").style.display = "block";
})

const text = document.getElementById("import_btn").addEventListener("click", () => {
    // let dropdown_btn = document.getElementById("dropdown_btn").style.display = "none";

    let json_wrapper = document.getElementById("json_wrapper").style.display = "block";
    let wrapperPg = document.getElementById("wrapperPg").style.display = "none";

    let import_wrapper = document.getElementById("import_wrapper").style.display = "block";
})

let btn_plus = document.getElementById("btn_plus").addEventListener("click", async () => {
    console.log(btn_plus)
    fname5 = document.getElementById("fname5").value
    console.log(fname5);
    fname7 = document.getElementById("fname7").value
    console.log(fname7);

    let arr2 = [fname5, fname7];
    console.log(arr2, "arr2");


    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: addCookie
    });

    chrome.storage.local.set({ arr2 }, function () {
        console.log('Value is set to ' + arr2);
    });



})

addCookie = () => {
    alert("Add Cookies");
    chrome.storage.local.get(['arr2'], function (result) {
        console.log('Value currently is ' + result.arr2);

        const obj2 = Object.assign({}, result.arr2);
        console.log(obj2);

        let a = document.cookie = `${obj2[0]}=${obj2[1]}`
        console.log(a)
    });



}

let delete_btn = document.getElementById("delete_btn").addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: deleteCookie
    });

})

deleteCookie = () => {
    alert("delete cookie ");

    // chrome.storage.local.get(['array'], function (result) {
    //     console.log('Value currently is ' + result.array);
    //     console.log(result.array);

    //     result.array.map((err) => {

    //         console.log(err)

    //     })

    // });

    return chrome.cookies.remove({
        url: cookieUrl,
        name: cookie.name,
        storeId: cookie.storeId,
    });



}


let btn4 = document.getElementById("add1").addEventListener("click", () => {
    let textarea = document.getElementById("json_texxt").value
    console.log(textarea);


    const isJson = (textarea) => {
        try {
            JSON.parse(textarea);
            console.log("JSON data is here");
            // alert("JSON data parse succesfuly ")
        } catch (e) {
            // alert("not a json data ")
            console.log("JSON is not okay")
            return false;
        }

        return true;
    }

    isJson(textarea);
});


