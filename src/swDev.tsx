
const swDev = () => {
    const swUrl = `${process.env.PUBLIC_URL}/sw.tsx`
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.log("response", response);

    })
}

export default swDev