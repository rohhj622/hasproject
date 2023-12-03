// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const {dateToTimestampSeconds} = require("hardhat/internal/util/date");

async function main() {
    // We get the contract to deploy
    const HASContract = await hre.ethers.getContractFactory("HardihooderAngelSociety");
    const hasContract = await HASContract.deploy("HardihooderAngelSociety", "HAS", 5, dateToTimestampSeconds(new Date()));

    await hasContract.deployed();

    console.log("HardihooderAngelSociety deployed to:", hasContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
