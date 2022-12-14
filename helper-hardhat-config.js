const networkConfig = {
    default: {
        name: "hardhat",
    },
    31337: {
        name: "localhost",
    },
    1: {
        name: "mainnet",
    },
    5: {
        name: "goerli",
    },
};

const developmentChains = ["hardhat", "localhost"];
const LOCAL_BLOCK_CONFIRMATIONS = 1;
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const PROXY_DEPLOYMENT_TIMEOUT = 5 * 60 * 1000;

module.exports = {
    networkConfig,
    developmentChains,
    LOCAL_BLOCK_CONFIRMATIONS,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    PROXY_DEPLOYMENT_TIMEOUT,
};
