import Text from "@/components/Text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col   items-center justify-center  mt-20">
      <h1 className="text-4xl ">Welcome to Next Project</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
        fuga.
      </p>
      <button>Click Me</button>
      <Text />
    </div>
  );
}
