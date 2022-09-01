import {sayHello, respond} from "@ikenley/package-example"

const main = () => {
    console.log("About to consume external package...");
    sayHello("HAL");
    respond("Dave");
}

main();