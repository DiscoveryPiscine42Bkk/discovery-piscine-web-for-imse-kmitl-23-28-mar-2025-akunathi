$(document).ready(function () {
    function loadTodos() {
        document.cookie.split(";").forEach(cookie => {
            let [key, value] = cookie.split("=");
            if (value) createTodo(value, key);
        });
    }
    
    function createTodo(txt, id = Date.now()) {
        let node = $(`<div>${txt}</div>`);
        node.css({
            "margin": "10px auto",
            "background-color": "#14bbd8",
            "padding": "10px",
            "border-radius": "10px",
            "cursor": "pointer",
            "display": "block",
            "text-align": "center",
            "width": "fit-content"
        });
        node.on("click", function () {
            if (confirm("Do you want to delete?")) {
                $(this).remove();
                document.cookie = id + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }
        });
        $("#ft_list").prepend(node);
    }
    
    $("#newTodo").css({
        "display": "block",
        "margin": "20px auto",
        "padding": "10px 20px",
        "font-size": "16px"
    });
    
    $("h1").css({
        "text-align": "center",
        "margin-bottom": "20px"
    });
    
    $("#newTodo").on("click", function () {
        let txt = prompt("Please Enter TODO LIST:");
        if (txt) {
            document.cookie = Date.now() + "=" + txt;
            createTodo(txt);
        }
    });
    
    loadTodos();
});