const arr = ['Student','Engineer','Developer']
const quality = document.querySelector('#qualities')
let i=0
    setInterval(() => {
        quality.innerText = arr[i]
        i++
        if (i>=3)
        {
        i=0
        }
}, 1000);


// function timeout(inter) {
//     return new Promise((resolve) => setTimeout(resolve, inter))
// }

// async function func()
// {
//     let i=0
//     await timeout(0)
//     while(i<3)
//     {
//         console.log(i)
        
//         await timeout(1000)
//     }
//     // func()
// }