pragma solidity ^0.5.0;
contract ToDoList{
    uint public taskCount=0;
    mapping(uint => Task) public tasks;
    struct Task{
        uint id;
        string content;
        bool status;
    }
    constructor() public {
        addtask("Do laundary at 1300");
    }
    function addtask(string memory _content) public {
        taskCount++;
        tasks[taskCount]=Task(taskCount,_content,false);
    }



}