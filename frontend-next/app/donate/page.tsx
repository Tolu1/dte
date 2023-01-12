export {}
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";

// function Donation() {
//   const [provider, setProvider] = useState(null);
//   const [signer, setSigner] = useState(null);
//   const [balance, setBalance] = useState(0);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function initWeb3() {
//       try {
//         // Initialize the provider
//         const provider = new ethers.providers.Web3Provider(
//           ethers.givenProvider || "http://localhost:8545"
//         );

//         // Get the user's signer (account)
//         const signer = provider.getSigner();

//         // Get the user's balance
//         const balance = await signer.getBalance();
//         setBalance(balance);

//         setProvider(provider);
//         setSigner(signer);
//       } catch (err) {
//         setError(err);
//       }
//     }
//     initWeb3();
//   }, []);

//   async function handleDonation(event) {
//     event.preventDefault();
//     const amount = event.target.elements.amount.value;
//     try {
//       const tx = {
//         to: "0xDONATION_ADDRESS",
//         value: ethers.utils.parseEther(amount),
//       };
//       await signer.sendTransaction(tx);
//       alert("Donation successful!");
//     } catch (err) {
//       setError(err);
//     }
//   }

//   return (
//     <div>
//       <p>This is a donation page</p>
//     </div>
//   )
// }

// export default Donate;