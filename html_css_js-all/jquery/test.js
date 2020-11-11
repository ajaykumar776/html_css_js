// 1. By taking the id of the div , we are printing it from js or $ 
// document.getElementById("test").innerHTML = "Hello World ! From Js";
// $(document).ready(function(){
//     $("#test").text("Hello World ! From jQuerry")
// })

// 2. Here we are hiding the div class after clicking on the button , using both js and $
// function hideIt(){
//     document.getElementById("test").style.display="none";
// }
// $(document).ready(function(){        
//     $("#myBtn").click(function(){        
//         $("#test").hide();       here we have used # inside our selector becoz in div we have taken an id,if we will take class then we have to use .
//     })
// })

// 3. we can select any of the element or class or id , and can use it to do actions.
// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $("ul li:first").hide();
//     })
// })

// 4. CSS using jQuerry
// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $("#anchor").css({
//             "color" : "green",
//             "font-size" : "large"
//         });
//     })
// })

// 5.a Advanced of selector : It is a universal selector , we have used here !
// $(document).ready(function(){
//     $("*").css({
//         "background-color" : "blue",
//         "color" : "white"
//     }
//     );
//     $("#myBtn").click(function(){
//         $("*").css({
//             "background-color" : "red",
//             "color" : "white"
//         });
//     }); 
// })

// 5.b this selector , will change the properties of those which has that id
// $(document).ready(function(){
//     $("*").css({
//         "background-color" : "blue",
//         "color" : "white"
//     }
//     );
//     $("#myBtn").click(function(){
//         $(this).css({
//             "background-color" : "green",
//             "color" : "white"
//         });
//     }); 
// })

// 5.c here we have used attribute selector
// $(document).ready(function(){
//     $("*").css({
//         "background-color" : "blue",
//         "color" : "white"
//     }
//     );
//     $("#myBtn").click(function(){
//         $("[type]").toggle("slow")
//     }); 
// })

// 5.d even-odd selector type
// $(document).ready(function(){
//     $("*").css({
//         "background-color" : "blue",
//         "color" : "white"
//     }
//     );
//     $("#myBtn").click(function(){
//         $("li:even").css({
//             "background-color" : "green",
//             "color" : "white"
//         });
//         $("li:odd").css({
//             "background-color" : "black",
//             "color" : "white"
//         });
//     }); 
// })

// 5.e first child selector , which will change the property of first one only.suppose we have more than one list, then if we will use it , then it will change the every first child of the list.suppose among that all first child, we have to change(properties) the first list and its first child. then we have to give id to this list, and then we will pass id first then will write li:first-child
// for selecting the first child of each list
// $(document).ready(function(){
//     $("*").css({
//         "background-color" : "blue",
//         "color" : "white"
//     }
//     );
//     $("#myBtn").click(function(){
//         $("li:first-child").css({
//             "background-color" : "green",
//             "color" : "white"
//         });
//     }); 
// })

// for selecting first child from more that one list
// $(document).ready(function(){
//     $("*").css({
//         "background-color" : "blue",
//         "color" : "white"
//     }
//     );
//     $("#myBtn").click(function(){
//         $("#myFirst li:first-child").css({
//             "background-color" : "green",
//             "color" : "white"
//         });
//     }); 
// })

// for selecting nth child from first . we can also select it from last by using li:nth-last-child
// $(document).ready(function(){
//     $("*").css({
//         "background-color" : "blue",
//         "color" : "white"
//     }
//     );
//     $("#myBtn").click(function(){
//         $("#mySecond li:nth-child(2)").css({
//             "background-color" : "green",
//             "color" : "white"
//         });
//     }); 
// })

// 6. click and doubleClick
// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $(".myDiv1").css("background-color","red");
//     })
//     $("#myBtn").dblclick(function(){
//         $(".myDiv2").css("background-color","blue");
//     })
// })

// 7. show() and hide() action
// $(document).ready(function(){
//     $(".myDiv1").css("background-color","red");
//     $(".myDiv2").css("background-color","blue");
//     $("#myBtn").click(function(){
//         $(".main").hide("slow")
//     })
//     $("#myBtn").dblclick(function(){
//         $(".main").show("slow")
//     })
// })

// 8. keypress,keydown, and keyup 
// in keypress ,when we just click the keyboard keys, then at that moment it will ChannelMergerNode.
// $(document).ready(function(){
//     $("input").keypress(function(){
//         $(this).css({
//             "color" : "red",
//             "background-color" : "grey"
//         })
//     })
// // })
// in keydown , till the key is pressed it will work
// $(document).ready(function(){
//     $("input").keydown(function(){
//         $(this).css({
//             "color" : "red",
//             "background-color" : "grey"
//         })
//     })
// })
// in keyup ,after doing keypress and keydown , when we release the key , at that time it will work .
// $(document).ready(function(){
//     $("input").keyup(function(){
//         $(this).css({
//             "color" : "red",
//             "background-color" : "grey"
//         })
//     })
// })

// 9. Mouse Events : mouseenter(),mouseleave(),mouseup(),mousedown()
// $(document).ready(function(){
//     $("p").mouseenter(function(){
//         $(this).css({
//             "color" : "red",
//             "font-size" : "large"
//         })
//     })
// })
// $(document).ready(function(){
//     $("p").mouseleave(function(){
//         $(this).css({
//             "color" : "red",
//             "font-size" : "large"
//         })
//     })
// })
// $(document).ready(function(){
//     $("p").mousedown(function(){
//         $(this).css({
//             "color" : "red",
//             "font-size" : "large"
//         })
//     })
// })
// $(document).ready(function(){
//     $("p").mouseup(function(){line
//         $(this).css({
//             "color" : "red",
//             "font-size" : "large"
//         })
//     })
// })

// 10. focus and blur()
// $(document).ready(function(){
//     $("span").css("display","none");
//     $("#myInput").focus(function(){
//         $("#first").css("display","inline").fadeOut(4000)
//     })
//     $("span").css("display","none");
//     $("#myInput").blur(function(){
//         $("#second").css("display","inline").fadeOut(4000)
//     })
// })
// $(document).ready(function(){
//     $("span").hide();
//     $("#myInput").focus(function(){
//         $("#first").show().fadeOut(4000);
//     })
//     $("span").css("display","none");
//     $("#myInput").blur(function(){
//         $("#second").show().fadeOut(4000);
//     })
// })

// 11. toggle()
// $(document).ready(function(){
//     $(".myDiv1").css("background-color","red");
//     $(".myDiv2").css("background-color","blue");
//     $("#myBtn").click(function(){
//         $(".main").toggle("slow");
//     })
// })

// 12. slideDown() and slideUp() in form tag
// $(document).ready(function(){
//     $("#myPanel2").css("display","none");
//     $("#myPanel1").click(function(){
//         $("#myPanel2").slideDown("slow");
//     })
//     $("#myPanel1").dblclick(function(){
//         $("#myPanel2").slideUp("slow");
//     })
    
// })

// 13. slideToggle() :
// $(document).ready(function(){
//     $("#myPanel1").click(function(){
//         $("#myPanel2").slideToggle("slow");
//     })
// })

// 14. fadeIn and fadeOut :
// $(document).ready(function(){
//     $("#myBtn2").click(function(){
//         $("#myDiv1").fadeOut(2000);
//         $("#myDiv2").fadeOut(5000);
//         $("#myDiv3").fadeOut(7000);
//     })
//     $("#myBtn1").click(function(){
//         $("#myDiv1").fadeIn(2000);
//         $("#myDiv2").fadeIn(5000);
//         $("#myDiv3").fadeIn(7000);
//     })
// })

// 15. fadeToggle : no need to use two buttons  
// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $("#myDiv1").fadeToggle(2000);
//         $("#myDiv2").fadeToggle(5000);
//         $("#myDiv3").fadeToggle(7000);
//     })
// })

// 16. jQuery DOM traversal :

    // here we are finding the parent of li element, and changing its parent property !
    // $(document).ready(function(){
    // $("li").parent().css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // here the parent is both li and span itself. because we have to spans, for 1st span, li is the parent, and for 2nd span it self is the parent.
    // $("span").parent().css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // here we have used parents which is plural, that means it will change the property of all the praent element thats has any of the child.even, we have declared only a div of container , but it will show parent of that as well.also it will show parent of container as well i.e container-fluid.
    // $("span").parents().css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // using parentsUntil("last parent div") , we can find the parents till some div, that we will pass it as a parameter.
    // $("span").parentsUntil("div").css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // children shows , the children of the whatever element name we will give in the selector.here there is only one child of the li element i.e span.
    // $("li").children().css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // we can select a particular child of the parent by using children() and by passing its child tag name, we can select it .
    // $("span").children("p").css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // find will search for the child of any kind.here we have started from ul and searcing for span.also if we will start from ul and search for ul, then it will not show anything.because ul is not the child.
    // $("ul").find("span").css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // we have used here siblings. so what it does is , finds the siblings or cousine of that element. here we have given for h2 so , its siblings are p,span,h3,p. so it will change its property.and if we will pass specific sibling name to sibling(""), then it will give only that. 
    // $("h2").siblings("p").css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // next() is used for selecting the just next siblings of the given selector that we will pass. 
    // $("h2").next().css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // nextAll() is used to select all of the next siblings.
    // $("h2").nextAll().css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // we can also select it in a certain range, both of them are exclusive , it will select in between them.
    // $("span.child").nextUntil("p").css({
    //     "color" : "blue",
    //     "border" : "2px solid blue"
    // })

    // same thing is with prev
    // prev(),prevAll(),prevUntil()

    


// })
