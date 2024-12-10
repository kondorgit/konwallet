/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: todo init js
*/

var todoList = [{
    'id': '1',
    "checkedElem": false,
    'todo': 'Added Email Templates',
    "assignedto": [{
            "assigneeName": "Curtis Saenz",
            "assigneeImg": "assets/images/users/avatar-1.jpg",
        },{
            "assigneeName": "John Robles",
            "assigneeImg": "assets/images/users/avatar-3.jpg",
        }
    ],
    'dueDate': '03 Apr, 2022',
    'status': 'Inprogress',
    "priority": "High"
}, {
    'id': '2',
    "checkedElem": false,
    'todo': 'Additional Mailbox',
    "assignedto": [{
            "assigneeName": "Virgie Price",
            "assigneeImg": "assets/images/users/avatar-5.jpg",
        },{
            "assigneeName": "Diego Norris",
            "assigneeImg": "assets/images/users/avatar-9.jpg",
        },{
            "assigneeName": "Anthony Mills",
            "assigneeImg": "assets/images/users/avatar-10.jpg",
        }
    ],
    'dueDate': '02 Apr, 2022',
    'status': 'Pending',
    "priority": "Medium"
}, {
    'id': '3',
    "checkedElem": true,
    'todo': 'Make a creating an account profile',
    "assignedto": [{
            "assigneeName": "Virgie Price",
            "assigneeImg": "assets/images/users/avatar-5.jpg",
        },{
            "assigneeName": "Marian Angel",
            "assigneeImg": "assets/images/users/avatar-6.jpg",
        },{
            "assigneeName": "Johnnie Walton",
            "assigneeImg": "assets/images/users/avatar-7.jpg",
        },{
            "assigneeName": "Donna Weston",
            "assigneeImg": "assets/images/users/avatar-8.jpg",
        }
    ],
    'dueDate': '02 May, 2022',
    'status': 'Completed',
    "priority": "Low"
}, {
    'id': '4',
    "checkedElem": false,
    'todo': 'Added new tabs styles',
    "assignedto": [{
            "assigneeName": "James Forbes",
            "assigneeImg": "assets/images/users/avatar-2.jpg",
        }
    ],
    'dueDate': '01 May, 2022',
    'status': 'New',
    "priority": "Low"
}, {
    'id': '5',
    "checkedElem": false,
    'todo': 'Added bdge new style - gradient',
    "assignedto": [{
            "assigneeName": "John Robles",
            "assigneeImg": "assets/images/users/avatar-3.jpg",
        },{
            "assigneeName": "Anthony Mills",
            "assigneeImg": "assets/images/users/avatar-10.jpg",
        },{
            "assigneeName": "Diego Norris",
            "assigneeImg": "assets/images/users/avatar-9.jpg",
        }
    ],
    'dueDate': '01 May, 2022',
    'status': 'Inprogress',
    "priority": "Medium"
}, {
    'id': '6',
    "checkedElem": false,
    'todo': 'Added Back to Top button',
    "assignedto": [{
            "assigneeName": "Marian Angel",
            "assigneeImg": "assets/images/users/avatar-6.jpg",
        },{
            "assigneeName": "Johnnie Walton",
            "assigneeImg": "assets/images/users/avatar-7.jpg",
        }
    ],
    'dueDate': '30 Apr, 2022',
    'status': 'Inprogress',
    "priority": "High"
}, {
    'id': '7',
    "checkedElem": true,
    'todo': 'Added File Manager Apps',
    "assignedto": [{
            "assigneeName": "John Robles",
            "assigneeImg": "assets/images/users/avatar-3.jpg",
        },{
            "assigneeName": "Mary Gant",
            "assigneeImg": "assets/images/users/avatar-4.jpg",
        },{
            "assigneeName": "Virgie Price",
            "assigneeImg": "assets/images/users/avatar-5.jpg",
        }
    ],
    'dueDate': '29 Apr, 2022',
    'status': 'Completed',
    "priority": "Medium"
}, {
    'id': '8',
    "checkedElem": false,
    'todo': 'Datatable with jQuery cdn',
    "assignedto": [{
            "assigneeName": "Marian Angel",
            "assigneeImg": "assets/images/users/avatar-6.jpg",
        },{
            "assigneeName": "Johnnie Walton",
            "assigneeImg": "assets/images/users/avatar-7.jpg",
        },{
            "assigneeName": "Donna Weston",
            "assigneeImg": "assets/images/users/avatar-8.jpg",
        }
    ],
    'dueDate': '28 Apr, 2022',
    'status': 'Pending',
    "priority": "High"
}, {
    'id': '9',
    "checkedElem": false,
    'todo': 'Profile Page Structure',
    "assignedto": [{
            "assigneeName": "Mary Gant",
            "assigneeImg": "assets/images/users/avatar-4.jpg",
        },{
            "assigneeName": "Virgie Price",
            "assigneeImg": "assets/images/users/avatar-5.jpg",
        }
    ],
    'dueDate': '27 Apr, 2022',
    'status': 'New',
    "priority": "Low"
}, {
    'id': '10',
    "checkedElem": true,
    'todo': 'Make a creating an account profile',
    "assignedto": [{
            "assigneeName": "John Robles",
            "assigneeImg": "assets/images/users/avatar-3.jpg",
        }
    ],
    'dueDate': '26 Apr, 2022',
    'status': 'Completed',
    "priority": "Medium"
}, {
    'id': '11',
    "checkedElem": true,
    'todo': 'Change email option process',
    "assignedto": [{
            "assigneeName": "John Robles",
            "assigneeImg": "assets/images/users/avatar-3.jpg",
        },{
            "assigneeName": "Anthony Mills",
            "assigneeImg": "assets/images/users/avatar-10.jpg",
        },{
            "assigneeName": "Diego Norris",
            "assigneeImg": "assets/images/users/avatar-9.jpg",
        }
    ],
    'dueDate': '25 Apr, 2022',
    'status': 'Completed',
    "priority": "High"
}, {
    'id': '12',
    "checkedElem": false,
    'todo': 'Brand Logo design',
    "assignedto": [{
            "assigneeName": "James Forbes",
            "assigneeImg": "assets/images/users/avatar-2.jpg",
        },{
            "assigneeName": "Anthony Mills",
            "assigneeImg": "assets/images/users/avatar-10.jpg",
        },{
            "assigneeName": "Diego Norris",
            "assigneeImg": "assets/images/users/avatar-9.jpg",
        }
    ],
    'dueDate': '25 Apr, 2022',
    'status': 'New',
    "priority": "Medium",
}, {
    'id': '13',
    "checkedElem": false,
    'todo': 'Add Dynamic Contact List',
    "assignedto": [{
        "assigneeName": "Virgie Price",
        "assigneeImg": "assets/images/users/avatar-5.jpg",
    },{
        "assigneeName": "Marian Angel",
        "assigneeImg": "assets/images/users/avatar-6.jpg",
    },{
        "assigneeName": "Johnnie Walton",
        "assigneeImg": "assets/images/users/avatar-7.jpg",
    },{
        "assigneeName": "Donna Weston",
        "assigneeImg": "assets/images/users/avatar-8.jpg",
    }
],
    'dueDate': '24 Apr, 2022',
    'status': 'Inprogress',
    "priority": "Low"
}, {
    'id': '14',
    "checkedElem": true,
    'todo': 'Additional Calendar',
    "assignedto": [{
            "assigneeName": "Virgie Price",
            "assigneeImg": "assets/images/users/avatar-5.jpg",
        },{
            "assigneeName": "Diego Norris",
            "assigneeImg": "assets/images/users/avatar-9.jpg",
        },{
            "assigneeName": "Anthony Mills",
            "assigneeImg": "assets/images/users/avatar-10.jpg",
        }
    ],
    'dueDate': '23 Apr, 2022',
    'status': 'Completed',
    "priority": "Medium",
}, {
    'id': '15',
    "checkedElem": false,
    'todo': 'Added Select2',
    "assignedto": [{
            "assigneeName": "Curtis Saenz",
            "assigneeImg": "assets/images/users/avatar-1.jpg",
        },{
            "assigneeName": "John Robles",
            "assigneeImg": "assets/images/users/avatar-3.jpg",
        }
    ],
    'dueDate': '23 Apr, 2022',
    'status': 'Pending',
    "priority": "High"
}];

// add new project
//Create a new folder
var createFolderForms = document.querySelectorAll('.createProject-form')
Array.prototype.slice.call(createFolderForms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
        
    }
        form.classList.add('was-validated');
    }, false)
});

const projectModalEl = document.getElementById('createProjectModal')
projectModalEl.addEventListener('show.bs.modal', event => {
    document.getElementById("projectname-input").value = "";
    document.getElementById("projectname-input2").value = "";
    
    document.querySelectorAll(".createProject-form").forEach(function (item) {
        item.classList.remove("was-validated");
    })
})

var editList = false;


Array.from(document.getElementsByClassName("createTask")).forEach(function (elem) {
    elem.addEventListener("click", function () {
        document.getElementById("createTaskLabel").innerHTML = "Create Task";
        document.getElementById("addNewTodo").innerHTML = "Add Task";
        clearFields();
    });
});

statusField = document.getElementById("task-status-input");


priorityField = document.getElementById("priority-field");




Array.from(document.getElementsByClassName("select-element")).forEach(function (elem) {
    Array.from(elem.querySelectorAll(".dropdown-menu ul li a")).forEach(function (subElem) {
        subElem.addEventListener("click", function () {
            subElem.classList.toggle("active");
            var assigneeMember = document.querySelectorAll('.select-element .dropdown-menu .dropdown-item.active');
            document.getElementById("total-assignee").innerHTML = assigneeMember.length;

            var imgPath = subElem.querySelector(".avatar-xxs img").getAttribute('src');

            var folderListdata = document.getElementById("assignee-member");
            if(subElem.classList.contains("active")){
                var nameelem = subElem.querySelector(".flex-grow-1").innerHTML;

                folderlisthtml =
                '<a href="javascript: void(0);" class="avatar-group-item mb-2" data-img="'+imgPath+'"  data-bs-toggle="tooltip" data -bs-placement="top" title="'+nameelem+'">\
                <img src="/'+imgPath+'" alt="" class="rounded-circle avatar-xs" />\
                </a>';
                folderListdata.insertAdjacentHTML("beforeend", folderlisthtml);
                tooltipElm();
            }else{
                Array.from(folderListdata.querySelectorAll(".avatar-group-item")).forEach(function (item) {
                    var avatarImg = item.getAttribute('data-img');
                    if(imgPath == avatarImg){
                        item.remove();
                    }
                });
            }
        });
    });
});

// add & edit task list
document.getElementById("creattask-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var inputTitle = document.getElementById('task-title-input').value,
        inputDate = document.getElementById('task-duedate-input').value
    var statusInputFieldValue = statusVal.getValue(true);
    var priorityInputFieldValue = priorityVal.getValue(true);

    var assignedtousers = []
    var assignedTo =  document.querySelectorAll('.select-element .dropdown-menu .dropdown-item.active');

    var errorMsg = document.getElementById("task-error-msg");
    errorMsg.style.display = "block";
    
    var text;
    if(inputTitle.length == 0){
      text = "Please enter task name";
      errorMsg.innerHTML = text;
      return false;
    }
    if(assignedTo.length == 0){
        text = "Please select team member";
        errorMsg.innerHTML = text;
        return false;
    }
    if(statusInputFieldValue == ""){
        text = "Please select task status";
        errorMsg.innerHTML = text;
        return false;
    }
    if(priorityInputFieldValue == ""){
        text = "Please select task priority";
        errorMsg.innerHTML = text;
        return false;
    }

    if(inputDate.length == 0){
        text = "Please select due date";
        errorMsg.innerHTML = text;
        return false;
    }
    
    if (assignedTo.length > 0) {
        Array.from(assignedTo).forEach(function (ele) {
            var imgpath = ele.querySelector(".avatar-xxs img").getAttribute('src');
            var namepath = ele.querySelector(".flex-grow-1").innerHTML;
            var obj = {};
            obj["assigneeName"] = namepath
            obj["assigneeImg"] = imgpath
            assignedtousers.push(obj);
        });
    }

    if (inputTitle !== "" && statusInputFieldValue !== "" && priorityInputFieldValue !== "" && !editList) {
        var newTodoId = findNextId(),
            newTodo = {
                'id': newTodoId,
                "checkedElem": false,
                'todo': inputTitle,
                'assignedto': assignedtousers,
                'dueDate': inputDate,
                'status': statusInputFieldValue,
                'priority': priorityInputFieldValue
            };
        todoList.push(newTodo);
        sortElementsById();
        document.getElementById("createTaskBtn-close").click();

    } else if (inputTitle !== "" && statusInputFieldValue !== "" && priorityInputFieldValue !== "" && editList) {
        var getEditid = 0;
        getEditid = document.getElementById("taskid-input").value;

        todoList = todoList.map(function (item) {
            if (item.id == getEditid) {
                if (statusVal.getValue(true) == "Completed") {
                    item.checkedElem = true
                } else {
                    item.checkedElem = false
                }
                var editObj = {
                    'id': document.getElementById("taskid-input").value,
                    "checkedElem": item.checkedElem,
                    'todo': inputTitle,
                    'assignedto': assignedtousers,
                    'dueDate': inputDate,
                    'status': statusInputFieldValue,
                    'priority': priorityInputFieldValue
                }
                return editObj;
            }
            return item;
        });
        editList = false;
        document.getElementById("createTaskBtn-close").click();
    }

    load(todoList)
    return true;
});


function fetchIdFromObj(todo) {
    return parseInt(todo.orderNo);
}

function findNextId() {
    if (todoList.length === 0) {
        return 0;
    }
    var lastElementId = fetchIdFromObj(todoList[todoList.length - 1]),
        firstElementId = fetchIdFromObj(todoList[0]);
    return (firstElementId >= lastElementId) ? (firstElementId + 1) : (lastElementId + 1);
}

function clearFields() {
    document.getElementById('task-title-input').value = '';
    document.getElementById('task-duedate-input').value = '';

    document.getElementById('total-assignee').innerHTML = "0";

    Array.from(document.querySelectorAll('.select-element .dropdown-menu .dropdown-item.active')).forEach(function (ele) {
        ele.classList.remove("active")
    });

    Array.from(document.querySelectorAll("#assignee-member .avatar-group-item")).forEach(function (item) {
        item.remove();
    });

    var errorMsg = document.getElementById("task-error-msg");
    errorMsg.style.display = "none";

    statusVal.removeActiveItems();
    statusVal.setChoiceByValue("New");
    priorityVal.removeActiveItems();
    priorityVal.setChoiceByValue("");
}


document.getElementById('createTask').addEventListener('hidden.bs.modal', event => {
    clearFields();
});

function sortElementsById() {

    $("#elmLoader").fadeIn(0);

    $.ajax({
        type: "POST",
        url: "/DashBoard/GetPartnersLists",
        processData: false,
        contentType: "Application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var items = data;
            todoList = items;

            var manyTodos = todoList.sort(function (a) {
                var x = fetchIdFromObj(a);

                return 0;
            })
            load(manyTodos);

        },
        error: function (request, status, error) {
            //alert("code:" + request.status + "\n\nmessage: " + request.responseText + "\n\nerror:" + error);
        }
    });

   
}

function sortElementsByName() {
    var manyTodos = todoList.sort(function (a, b) {
        var x = a.todo.toLowerCase();
        var y = b.todo.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    })
    load(manyTodos);
}



function loadList(manyTodos) {
    function elmLoader() {
        document.getElementById("elmLoader").innerHTML = '';
        drawList(manyTodos);
    }
    elmLoader();
    removeSingleItem();
    editTodoList();
}

var drake = dragula([document.getElementById("task-list")], {
    moves: function (el, container, handle) {

        return handle.classList.contains('task-handle');
    }
}).on('drop', function (el) {

    var mediaNoArr = [];

    var mediaNo = document.querySelectorAll('#mediaNo');

    for (var i = 0; i < mediaNo.length - 1; i++) {
        mediaNoArr[i] = mediaNo[i].innerHTML;
    }

    if (mediaNo.length > 0) {
        $.post("/DashBoard/SetPartnersOrderby", {
            noArr: mediaNoArr
        },
        function (data) {

        });
    }
});


var scroll = autoScroll([
    document.querySelector("#todo-content"),
], {
    margin: 20,
    maxSpeed: 100,
    scrollWhenOutside: true,
    autoScroll: function () {
        return this.down && drake.dragging;
    }
});

function drawList(manyTodos) {
    document.getElementById("task-list").innerHTML = "";
    Array.from(manyTodos).forEach(function (singleTodo) {
        

        document.getElementById("task-list").innerHTML +=
            '<tr>\
            <td>\
                <div class="d-flex align-items-center">\
                    <div class="flex-shrink-0 me-3">\
                        <div class="task-handle px-1 bg-light rounded">: :</div>\
                    </div>\
                    <img width="auto" height="80" src="' + singleTodo.partnerImage + '" />\
                </div>\
            </td>\
            <td>' + singleTodo.partnerTitle + '</td>\
            <td>' + singleTodo.partnerText + '</td>\
            <td id="mediaNo" class="displayNone">' + singleTodo.no + '</td>\
            <td>\
            <div class="hstack gap-2">\
                <button class="btn btn-sm btn-soft-info edit-list" data-bs-toggle="modal" data-bs-target="#createProjectModal" data-edit-id='+ singleTodo.no + ' data-edit-title=' + singleTodo.partnerTitle + ' data-edit-text=' + singleTodo.partnerText + ' data-edit-image=' + singleTodo.partnerImage + '><i class="ri-pencil-fill align-bottom"></i></button>\
                <button class="btn btn-sm btn-soft-danger remove-list" data-bs-toggle="modal" data-bs-target="#removeTaskItemModal" data-remove-id='+ singleTodo.no + ' data-remove-title=' + singleTodo.partnerTitle + '><i class="ri-delete-bin-5-fill align-bottom"></i></button>\
            </div>\
            </td>\
        </tr>';

        //editTodoList();
        //removeSingleItem();
        //checkTaskStatus();
        //tooltipElm();

        $("#elmLoader").fadeOut(0);
    });
}

function youtubeOpen(mediaId, el) {

    setTimeout(function () {
        window.open("https://youtu.be/" + $.trim(mediaId), "_blank");
        //location.reload();
    }, 500);

}

var isShowMenu = false;
var todoMenuSidebar = document.getElementsByClassName('file-manager-sidebar');
Array.from(document.querySelectorAll(".file-menu-btn")).forEach(function (item) {
    item.addEventListener("click", function () {
        Array.from(todoMenuSidebar).forEach(function (elm) {
            elm.classList.add("menubar-show");
            isShowMenu = true;
        });
    });
});


function tooltipElm(){
    var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    var tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}

function isStatus(val) {
    switch (val) {
        case "Pending":
            return ('<span class="badge badge-soft-warning text-uppercase">' + val + "</span>");
        case "Inprogress":
            return ('<span class="badge badge-soft-secondary text-uppercase">' + val + "</span>");
        case "Completed":
            return ('<span class="badge badge-soft-success text-uppercase">' + val + "</span>");
        case "New":
            return ('<span class="badge badge-soft-info text-uppercase">' + val + "</span>");
    }
}

function isPriority(val) {
    switch (val) {
        case "High":
            return ('<span class="badge bg-danger text-uppercase">' + val + "</span>");
        case "Low":
            return ('<span class="badge bg-success text-uppercase">' + val + "</span>");
        case "Medium":
            return ('<span class="badge bg-warning text-uppercase">' + val + "</span>");
    }
}

function checkTaskStatus() {
    Array.from(document.querySelectorAll("#task-list tr")).forEach(function (item) {
        item.querySelector(".form-check .form-check-input").addEventListener("change", function () {
            var getid = this.value;
            if (this.checked) {
                todoList = todoList.map(function (item) {
                    if (item.id == getid) {
                        item.checkedElem = true
                        item.status = "Completed"
                    }
                    return item;
                });
            } else {
                todoList = todoList.map(function (item) {
                    if (item.id == getid) {
                        item.checkedElem = false
                        item.status = "Inprogress"
                    }
                    return item;
                });
            }
            load(todoList)
        });
    });
}

function editTodoList() {
    var getEditid = 0;
    Array.from(document.querySelectorAll(".edit-list")).forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            $("#addNewProject").fadeOut(0);
            $("#editProject").fadeIn(0);
            $('#projectname-input3-feedback').fadeOut(0);

            getEditid = elem.getAttribute('data-edit-id');
            getEditTitle = elem.getAttribute('data-edit-title'); 
            getEditNewsText = elem.getAttribute('data-edit-text'); 
            getEditNewsImage = elem.getAttribute('data-edit-image'); 
            
            $("#projectname-input").val(getEditTitle);
            $("#projectname-input2").val(getEditNewsText);
            var output = document.getElementById('output');
            output.src = getEditNewsImage;

            document.getElementById("editProject").addEventListener("click", function () {

                if ($.trim($('#projectname-input').val()) != "" && $.trim($('#projectname-input2').val()) != "") {

                    fileName = "";
                    $('#partnerImg').removeClass("is-invalid");
                    $('#projectname-input3-feedback').fadeOut(0);

                    var imgData = new FormData();
                    imgData.append("formFile", $('#partnerImg')[0].files[0]);
                    imgData.append("title", $.trim($('#projectname-input').val()));
                    imgData.append("text", $.trim($('#projectname-input2').val()));
                    imgData.append("id", getEditid);


                    $.ajax({
                        url: '/DashBoard/EditPartner',
                        type: "POST",
                        processData: false,
                        contentType: false,
                        data: imgData,
                        success: function (result) {
                            if (result == true) {
                                sortElementsById();
                                document.getElementById("closeBtn").click();
                            }
                            else {
                                Swal.fire({
                                    title: 'Incorrect',
                                    text: '파트너수정에 실패했습니다.',
                                    icon: 'error',
                                    confirmButtonClass: 'btn btn-primary w-xs mt-2',
                                    buttonsStyling: false,
                                    showCloseButton: true
                                });
                            }
                        },
                        error: function (err) {
                            alert(err.statusText);
                        }
                    });
                }
            }, { once: true });
            
        });
    });
};

function removeSingleItem() {
    var getid = 0;
    Array.from(document.querySelectorAll(".remove-list")).forEach(function (item) {
        item.addEventListener('click', function (event) {
            getid = item.getAttribute('data-remove-id');
            getremoveName = item.getAttribute('data-remove-title'); 
            document.getElementById("remove-todoitem").addEventListener("click", function () {

                $.post("/DashBoard/DelPartners", {
                    id: getid,
                    partner: getremoveName
                },
                function (data) {
                    sortElementsById();
                    document.getElementById("close-removetodomodal").click();
                });
               
            });
        }, { once: true });
    });
}


function load(manyTodos) {
    loadList(manyTodos);
};

window.onload = function () {
    sortElementsById();
};

document.querySelector("#addNewProject").addEventListener("click", function () {

    if ($('#partnerImg')[0].files[0] == null) {
        $('#projectname-input3-feedback').fadeIn(0);
        return;
    }
    else {
        $('#projectname-input3-feedback').fadeOut(0);
    }

    if ($.trim($('#projectname-input').val()) != "" && $.trim($('#projectname-input2').val()) != "")
    {
        var imgData = new FormData();
        imgData.append("formFile", $('#partnerImg')[0].files[0]);
        imgData.append("title", $.trim($('#projectname-input').val()));
        imgData.append("text", $.trim($('#projectname-input2').val()));

        $.ajax({
            url: '/DashBoard/SetPartner',
            type: "POST",
            processData: false,
            contentType: false,
            data: imgData,
            success: function (result) {
                if (result == true) {
                    sortElementsById();
                    $("#closeBtn").trigger('click');
                }
                else {
                    Swal.fire({
                        title: 'Incorrect',
                        text: '파트너등록에 실패했습니다.',
                        icon: 'error',
                        confirmButtonClass: 'btn btn-primary w-xs mt-2',
                        buttonsStyling: false,
                        showCloseButton: true
                    });
                }
            },
            error: function (err) {
                alert(err.statusText);
            }
        });

    }

});

document.querySelector("#create-btn").addEventListener("click", function () {

    $("#addNewProject").fadeIn(0);
    $("#editProject").fadeOut(0);
    $("#partnerImg").val("");
    document.getElementById('output').src = "";
    fileName = "";
});

var reader = new FileReader();
var fileName = "";
var loadFile = function (event) {
    var output = document.getElementById('output');
    fileName = event.target.files[0].name.split('.').pop().toLowerCase();
    reader.readAsDataURL(event.target.files[0]);
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
        $('#projectname-input3-feedback').fadeOut(0);
    }
};