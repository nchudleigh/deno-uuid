addEventListener("fetch", (event) => {
    event.respondWith(
        new Response(crypto.randomUUID(), {
            status: 200,
            headers: { "content-type": "text/plain" },
        })
    );
});