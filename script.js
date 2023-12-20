// function getprice (x,y) {
//
//    var price=x*y;
//     console.log(price)
//   return price;
// }

// var cartona = ""
//
// function additem(itemnumber, itemid, item) {
//
//     for (var i = 0; i < itemnumber; i++) {
//         cartona += item;
//
//     }
//
//     document.getElementById(itemid).innerHTML =cartona;
//
//
// }
//
// additem(20,"about","<h2>islam</h2>")


const arrayOfQuotes = [
    {'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken'
    },
    {'author': 'Marilyn Monroe',
        'quote': 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best'
    },
    {'author': 'Albert Einstein',
        'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },
];

function generateQuote(){

    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);

    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;

}








