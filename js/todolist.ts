/// <reference path="../typings/globals/jquery/index.d.ts" />

module App.Models {
    export interface ITask {
        Id: string;
        Content: string;
        IsDone: boolean;
    }
}

module App.Services {
    export interface ITaskService {
        get(): App.Models.ITask[];
        set(todoList: App.Models.ITask[]): void;
    }
}

module App.Services {
    const STORAGE_KEY: string = 'typescript_jquery';
    export class TaskService implements ITaskService {
        get(): App.Models.ITask[] {
            var taskData = localStorage.getItem(STORAGE_KEY);
            var taskList: App.Models.ITask[] = JSON.parse(taskData);
            if (!taskList) {
                taskList = [];
            }
            return taskList;
        }
        //// 儲存 Task 資料
        set(taskList: App.Models.ITask[]): void {
            var taskData = JSON.stringify(taskList);
            localStorage.setItem(STORAGE_KEY, taskData);
        }
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

module App.Pages {
    export class TodoList {
        private taskList: Models.ITask[];
        constructor(
            private form: JQuery,
            private formInput: JQuery,
            private formSubmit: JQuery,
            private ulList: JQuery,
            private TaskService: Services.ITaskService
        ) {
            this.form.on('submit', this.Submit.bind(this));
            this.Init();
        }

        Init(): void {
            this.taskList = this.TaskService.get();
            this.ulList.empty();
            for (var task of this.taskList) {
                let $li = $('<li></li>').addClass('list-group-item clearfix');
                let $div = $('<div></div>').addClass('checkbox').appendTo($li);
                let $label = $('<label></label>').appendTo($div);
                let $input = $('<input></input>').attr('type', 'checkbox').prop('checked', task.IsDone).appendTo($label);
                let $button = $('<button></button>').addClass('btn btn-danger btn-xs pull-right').text('Delete').appendTo($div);
                if (task.IsDone) {
                    $('<del></del>').text(task.Content).appendTo($label);
                }
                else {
                    $label.append(task.Content);
                }
                $button.on('click', this.Delete.bind(this, task.Id));
                $input.on('click', this.Finish.bind(this, task.Id));
                $li.appendTo(this.ulList);
            }
        }
        Submit(e: JQueryEventObject): void {
            e.preventDefault();
            var task: Models.ITask = {
                Id: guid(),
                Content: this.formInput.val(),
                IsDone: false
            }
            this.taskList.push(task);
            this.TaskService.set(this.taskList);
            this.formInput.val(undefined);
            this.Init();
        }
        Delete(id: string, e: JQueryEventObject): void {
            this.taskList = $.grep(this.taskList, (task) => task.Id !== id);
            this.TaskService.set(this.taskList);
            this.Init();
        }
        Finish(id: string, e: JQueryEventObject): void {
            $.grep(this.taskList, (task) => task.Id === id)
                .forEach((task) => task.IsDone = !task.IsDone);
            this.TaskService.set(this.taskList);
            this.Init();
        }
    }
}

module App {
    var taskList = new Pages.TodoList(
        $('form'),
        $('form input'),
        $('form button:submit'),
        $('ul.list-group'),
        new Services.TaskService()
    );
}

