import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items center">
        <div
          className="
        relative w-[670px] h-[330px] 
        sm:w-[350px] sm:h-[350px] 
        md:h-[330px] md:w-[670px]"
        >
          <Image
            src="/document.png"
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
      </div>
    </div>
  );
};
