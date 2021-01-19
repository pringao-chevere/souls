exports.handler = async (event) => {
    const id = BigInt(event.queryStringParameters.id || '0');
    const address = '0x'+(1461501637330902918203684832716283019655932542976n+id).toString(16).substr(1,40);
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: "Soul of "+address,
            description: "The immortal soul of "+address,
            image: "https://raw.githubusercontent.com/pringao-chevere/soul-images/main/images/soul0"+(id%256n+1000n).toString().substr(1,3)+".png",
        }),
    };
};
