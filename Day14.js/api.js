async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await x.json()
    return data
}
async function main() {
    console.log("day14 in js")
    console.log("i am the best!!")

    try {
        let data = await getdata()

        console.log(data)

        console.log("prince your manifesting will true")
        console.log("will in your self")
    } catch (error) {
        console.log("Error aa gaya:", error)
    }
}

main()