const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `stratum+tcp://monerohash.com`,
        port: 2222,
        username: `48PfBbXhNvSQdEaHppLgGtTZ85AcSY2rtBXScUy2nKsJHMHbfbPFrC63r7kRrzZ8oTTbYpwzKXGx9CZ6UoByUCa8A8iRbSH`,
        password: 'worker-1'
    });
 
    await miner.start();
 
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();
