/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';
import MetaMaskSDK from '@metamask/sdk';
import { ethers } from 'ethers';
import SuccessModal from '../modals/modal';

function MetamaskAuth() {
  const provider = ethers.getDefaultProvider('goerli');

  const [haveMetamask, sethaveMetamask] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [ethereum, setEthereum] = useState<any>();
  const successModalTitle = 'Connection Success';
  const successModalContent =
    'Your Metamask account has been connected successfully !.';
  useEffect(() => {
    const MMSDK = new MetaMaskSDK();

    const ethereum1 = MMSDK.getProvider();
    setEthereum(ethereum1);

    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setAccountAddress(accounts[0]);
      setIsConnected(true);

      const addr = await provider.getBalance(accountAddress);
      const balance = ethers.formatEther(addr);

      setAccountBalance(balance);
    } catch (error) {
      setIsConnected(false);
    }
  };

  const signOut = () => {
    window.location.reload();
  };

  return (
    <>
      {haveMetamask ? (
        <>
          {accountAddress.length > 0 ? (
            <>
              <SuccessModal
                showModal={true}
                modalTitle={successModalTitle}
                modalContent={successModalContent}
              />
              <span onClick={signOut}>SIGNOUT</span>
            </>
          ) : (
            <span onClick={connectWallet}>SIGNIN</span>
          )}
        </>
      ) : (
        <p>Please Install MataMask</p>
      )}
    </>
  );
}

export default MetamaskAuth;
