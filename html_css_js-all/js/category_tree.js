var bikes = {
    hero: null,
    honda: null,
    yamaha: null,
    bajaj: null,
    fzs: "yamaha",
    r15: "yamaha",
    fazer: "yamaha",
    pulsar150: "bajaj",
    pulsar220: "bajaj",
    ns200: "bajaj",
    shine: "honda"
};

function get_root(bikes){
    var data = {};
    for(bike in bikes){
        if(bikes[bike] == null) data[bike] = [];
    }
    return data;
}

function get_child(parent){
    var data = [];
    for(bike in bikes){
        if(bikes[bike] == parent) data.push(bike);
    }
    return data;
}

var root = get_root(bikes);

for(b in root){
    root[b] = get_child(b);
}

console.log(root);