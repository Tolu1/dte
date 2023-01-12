import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as fs from 'fs';
import * as path from 'path';

// Sample Hardhat Task for printing accounts on the blockchain
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

async function copyAbis(src: string, dest: string) {
  // Read the directory contents
  const files = fs.readdirSync(src);

  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Iterate over the files and directories
  for (const file of files) {
    // Construct the full path for the file
    const fullSrc = path.join(src, file);
    const fullDest = path.join(dest, file);

    // Check if the file is a directory
    if (fs.lstatSync(fullSrc).isDirectory()) {
      // Recursively copy the directory contents
      await copyAbis(fullSrc, fullDest);
    } else if (file.endsWith('.json') && !file.endsWith('dbg.json')) {
      // Copy the file if it has a ".json" extension
      const data = fs.readFileSync(fullSrc);
      fs.writeFileSync(fullDest, data);
    }
  }
}

task('copy-abis', 'Copies the ABI files from the artifacts/contracts directory to the frontend-next/abis directory', async (taskArgs) => {
  try {
    // Copy the ABI files from the "artifacts/contracts" directory to the "frontend-next/abis" directory
    await copyAbis(path.join(__dirname, 'artifacts', 'contracts'), path.join(__dirname, 'frontend-next', 'abis'));
  } catch (error) {
    console.error(error);
  }
});


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url:"https://eth-goerli.g.alchemy.com/v2/UmDOCMMrExff1HEWIzPKiwYGdfupbQkV",
      accounts: ["fe33cb9bf5eb6d9eceb75159211a817a29901a92c4d1e16bbb11ee82e24ae2c6"]
    } 
  }
};

export default config;
