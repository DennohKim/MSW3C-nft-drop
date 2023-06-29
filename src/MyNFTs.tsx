import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import React from 'react'
import { contractConst } from './consts/parameters'

const MyNFTs = () => {

	const address = useAddress()
	const truncateAddress = (address: string) => {
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	};

	const { contract } = useContract(contractConst)

	const { data: ownedNFTs , isLoading: isOwnedNFTsLoading} =useOwnedNFTs(contract, address);
  return (
    <div className="mx-auto flex max-w-7xl py-6 ">
      {address ? (
        <div>
          <div className="flex flex-col space-y-2">
            <p className="py-2 text-white">
              Wallet Address: <span className='font-bold'>{truncateAddress(address || "")}</span>
            </p>
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold">My NFTs</h3>
            <div className="mt-10 flex w-full max-w-xl flex-col  gap-4 rounded-xl bg-black/60 px-12 py-6 lg:border lg:border-gray-400 lg:dark:border-gray-800">
              <div className="grid grid-cols-1 items-center justify-center">
                {!isOwnedNFTsLoading ? (
                  ownedNFTs?.length! > 0 ? (
                    ownedNFTs?.map((nft) => (
                      <div className="" key={nft.metadata.id}>
                        <ThirdwebNftMedia metadata={nft.metadata} />
                        <h3>{nft.metadata.name}</h3>
                      </div>
                    ))
                  ) : (
                    <p>No NFTs Owned</p>
                  )
                ) : (
                  <p>Loading ...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Please connect your wallet</p>
        </div>
      )}
    </div>
  );
}

export default MyNFTs