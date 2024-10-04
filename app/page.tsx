import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex flex-col items-center justify-center text-center mt-16">
        <h2 className="text-4xl font-bold mb-8">
          Lotl

        </h2>
        
        {/* <h3 className="text-xl font-bold opacity-50 mb-4">Decentralizing the future of collective memory</h3> */}
      </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Why? Echolotl was born out of the need for collective storytelling and memory. We aim to provide a technical solution to the growing meaning crisis.

          </li>
          <li className="mb-2">
            What? Lotl is a fully decentralized web3 project and a part of the Echolotl . It focuses on the co-creation of Lotl NFT collections, 
            challenging the prevailing notion that journaling is a solitary journey. 


          </li>
          <li className="mb-2">

          How? Lotl reimagines the art of journaling by offering the possibility to mint diary entries into tradeable NFTs or soulbound tokens 
          Users create their personal diary collection
          by purchasing or minting Lotl NFTs. In this scenario royalties replace the traditional "like button" click, offering a more sustainable approach. 
          </li>

        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <p>          Lotl is a Radar hackathon project
          </p>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >

            Coming soon ...
          </a> 

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
