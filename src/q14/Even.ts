const n = parseInt(process.argv[2]);

if (!isNaN(n)) {
    for (let i = 0; i <= n; i += 2) {
        console.log(i);
    }
}
