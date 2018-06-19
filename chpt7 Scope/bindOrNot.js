const Dog = function(name) {
    this.name = 'default';
    this.bark = () => {
        console.log('wong!! I am ' + this.name);
    }
}

const wolf = new Dog('qiu');
wolf.bark.bind(wolf);