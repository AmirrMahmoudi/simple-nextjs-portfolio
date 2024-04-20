import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <div
        className="flex h-full w-full items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="mx-sm:items-center z-10 mr-10 flex max-w-[750px] flex-col gap-5 pb-56 pl-20 max-sm:w-full max-sm:gap-12 md:pb-20 md:pl-40">
          <h1 className="text-[50px] font-semibold text-white max-sm:text-4xl">
            همه چیز ممکن کن با
            <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
              <br />
              برنامه نویسی
            </span>
          </h1>
          <p className="hidden text-gray-200 md:block">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه د
          </p>
          <div className="flex gap-5 max-sm:flex-col max-sm:text-center md:flex-row">
            <Link
              href="/my-skills"
              className="group relative z-50 max-w-[200px] rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white hover:bg-blue-400"
            >
              اطلاعات بیشتر
            </Link>
            <Link
              href="/my-projects"
              className="group relative max-w-[200px] rounded-[20px]  border border-white bg-transparent px-5 py-3 text-lg text-white "
            >
              <div className="absolute inset-0 z-[1] rounded-[20px] bg-white opacity-0 group-hover:opacity-20" />
              پروژه های من
            </Link>
            <Link
              href="/contact-me"
              className="group relative max-w-[200px] rounded-[20px]  border border-white bg-transparent px-5 py-3 text-lg text-white "
            >
              <div className="absolute inset-0 z-[1] rounded-[20px] bg-white opacity-0 group-hover:opacity-20" />
              تماس با من
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -scale-x-100 max-sm:hidden">
        <Image
          src={"/horse.png"}
          alt="horse"
          height={300}
          width={300}
          className="right-55 absolute top-40"
        />
        <Image src={"/cliff.webp"} alt="cliff" height={480} width={480} />
      </div>
      <div className="absolute bottom-0 z-[5] h-auto w-full">
        <Image
          src={"/trees.webp"}
          alt="trees"
          width={2000}
          height={2000}
          className="h-full w-full"
        />
      </div>
    </main>
  );
}
