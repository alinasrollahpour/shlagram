
function get_chatbars() {
    let chats = [
        {
            prof: "https://cdn.britannica.com/58/156058-131-22083D0A/Adolf-Hitler.jpg",
            name: "Hitler",
            unread: 5
        },
        {
            prof: "https://i.guim.co.uk/img/media/45112f592a884a7a58ddf790b6dfd713dd38294f/0_78_2324_1394/master/2324.jpg?width=465&dpr=1&s=none",
            name: "Mussolini",
            unread: 2
        },
        {
            prof: "https://collectionimages.npg.org.uk/large/mw138359/Hirohito-Emperor-Showa-of-Japan.jpg",
            name: "Hirohito",
            unread: 12
        },
        {
            prof: "https://www.whitehouse.gov/wp-content/uploads/2021/01/26_theodore_roosevelt.jpg?w=1250",
            name: "Roosevelt",
            unread: 1
        },
        {
            prof: "https://assets.publishing.service.gov.uk/media/5dc43063e5274a4f24addc6a/s465_Sir-Winston-Churchill.jpg",
            name: "Churchil",
            unread: 6
        },

    ];
    return chats
}

function load_chats() {
    let chatbars = get_chatbars();
    const main = document.getElementById("main");
    for (let i of chatbars) {
        let chat = document.createElement('div');
        let html = `<div class='chatElem'> 
                        <div class='profCont'><img class='prof' src='${i.prof}'></div> 
                        <p class='chatName'>${i.name}</p> 
                        <div class='unreadLabel'>${i.unread}</div>
                    </div>`
        console.log(html)
        chat.innerHTML = html
        main.appendChild(chat)
    }
}

load_chats()

