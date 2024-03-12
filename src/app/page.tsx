import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex  flex-col items-center p-24">
      
        <h1 className="text-8xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-l from-zinc-400 to-white">
          Capture memories <br /> for the future <br />
        </h1> 
        <span className="text-xl text-zinc-300 pt-4 text-center">
          Effortlessly store, share <br/> and organize your precious memories.
        </span>
      

            <Link href="/gallery">
              <Button className="mt-10 flex-row" variant={"outline"}>
                  Explore the gallery
                  <ArrowRight
                    className="ml-2 h-4 w-4"
                  />
              </Button>
            </Link>
    </main>
  );
}
