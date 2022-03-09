//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {

    string greeting;

    constructor () {
        greeting = "Hello world";
    }

    function doGreet() public view returns(string memory) {
        return greeting;
    }
    function respond() public pure returns(string memory) {
        string memory resp = "Hey, Thanks!";
        return resp;
    }

}