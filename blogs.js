let blogs = document.getElementById('blogs');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.send();

xhr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);

        data.forEach(element => {
            // console.log(element);
            let blogElm = `<div class="col-md-3">
                                <div class="card my-2" id="">
                                    <div class="card-body">
                                        <h5 class="position-relative ">Blog ${element.id}</h5>
                                        <h3 class="card-title my-3">${element.title ? element.title.slice(0, 25) : ""}</h3>
                                        <p class="card-text">${element.body ? element.body.slice(0, 80) : ""}</p>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#modal${element.id}">
                                        Read More
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="modal${element.id}" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5>${element.title}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ${element.body}
                                        </div>
                                    </div>
                                </div>
                        </div>
            `

            blogs.innerHTML += blogElm;
        });

        // console.log(data);
    }
}