var chatList;
$(function () {
    function loadData(chats) {
        chatList = chats;
    }
    chat.getChatHistory(loadData);
    chatList.map(item => {
        $("#chatHistory ul").append(`
            <li class="${item.from} chat-item">
            <p>${item.message}</p>
            <h6>
            <span>${item.datetime.getDate()}/${item.datetime.getMonth()}/${item.datetime.getFullYear()}</span>
            <span>${item.datetime.getHours()}:${item.datetime.getMinutes()}:${item.datetime.getSeconds()}</span>
            </h6>
            </li>
        `)
    })
});
chat.addListener('chatreceived', function (data) {
    console.log(data)
    $("#liveChat ul").append(`
        <li class="${data.chat.from} chat-item">
        <p>${data.chat.message}<p>
        <h6>
        <span>${data.chat.datetime.getDate()}/${data.chat.datetime.getMonth()}/${data.chat.datetime.getFullYear()}</span>
        <span>${data.chat.datetime.getHours()}:${data.chat.datetime.getMinutes()}:${data.chat.datetime.getSeconds()}</span>
        </h6>
        </li>
    `)
})
$(document).ready(function () {
    $("#chatSubmit").click(function () {
        chat.sendChat($("#chatInput").val())
        $("#chatInput").val("")
    })
})
