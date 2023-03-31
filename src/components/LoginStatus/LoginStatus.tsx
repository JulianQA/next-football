import Image from "next/image";

const LoginStatus = () => {
  const logged = true;
  if (logged) {
    return (
      <div className="text-white flex items-center gap-2">
        <Image
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full w-12 h-12"
        />
        <span>Julian Quintero</span>
      </div>
    );
  }
  return (
    <div className="text-white bg-purple-700 px-4 py-2 rounded-full cursor-pointer">
      Login
    </div>
  );
};

export default LoginStatus;
