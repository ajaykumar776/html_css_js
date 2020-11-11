var categories = {
    bike: null,
    hero: "bike",
    honda: "bike",
    yamaha: "bike",
    bajaj: "bike",
    fzs: "yamaha",
    r15: "yamaha",
    fazer: "yamaha",
    pulsar150: "bajaj",
    pulsar220: "bajaj",
    ns200: "bajaj",
    shine: "honda",
    car: null,
    maruti: "car",
    alto: "maruti",
    audi: "car",
    a2: "audi",
    a8: "audi",
    a8_stearing: "a8"
};

output = {
    bike: {
        hero: {},
        honda: {
            shine: {}
        },
        yamaha: {
            fzs: {},
            r15: {},
            fazer: {},
        },
        bajaj: {
            pulsar150: {},
            pulsar220: {},
            ns200: {}
        },
    },
    car: {
        maruti: {
            alto: {}
        },
        audi:{
            a2: {},
            a8: {
                a8_stearing: {}
            }
        }
    }
}