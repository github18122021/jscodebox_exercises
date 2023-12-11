// Either404

// Given is an array numbers with integers. Return true if a zero is next to a zero or a four is next to a four. Return false if both occure.

function either404(numbers) {
    let final = false;
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        if (currentNum === 0 || currentNum === 4) {
            let lastElmIndex = numbers.length - 1;

            if (i !== lastElmIndex) {
                let nextNum = numbers[i + 1];

                if (currentNum === nextNum) {
                    if (final === true) {
                        final = false;
                    } else {
                        final = true;
                    }
                }
            } else {
                final = final;
            }

            // if (nextNum !== null) {
            //     if (currentNum === nextNum) {
            //         if (final === true) {
            //             final = false;
            //         } else {
            //             final = true;
            //         }
            //     }
            // }
            // if (nextNum === currentNum) {
            //     if (final === true) {
            //         final = false;
            //     } else {
            //         final = true;
            //     }
            // }
        }
    }

    return final;
}

console.log(either404([1,1]));
console.log(either404[0,1,2,3,4,4]);
console.log(either404([0,0]));