import Cards from "./cards";

export default function Home() {
  const url1: string = "";
  const url2: string = "";
  const url3: string = ""
  return (
    <div className="min-h-screen min-w-2/5 max-w-4/6 border-4 rounded-xl px-4 py-8">
      <div className="grid grid-cols-6 grid-rows-9 gap-4 ">
        <Cards
          photo={url1}
        />
        <Cards 
          photo={url2}
        />
        <Cards 
          photo={url3}
        />
      </div>
    </div>
  );
}
