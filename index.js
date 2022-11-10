
// fetch('to-do.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


fetch("to-do.json")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(task){
    console.log(task)
    const html = task.map(
        (data)=> `<div class="card">
        <ul>
        <li>${data.id}</li>
        <li>${data.name}</li>
        <li>${data.peerDiscussion}</li>
        <li>${data.submitted}</li>
        <li>${data.completed}</li>
        </ul>
        </div>`
    );
    document.getElementById("app").innerHTML = html;

})