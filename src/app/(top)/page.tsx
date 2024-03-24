import StoreLink from "@/components/StoreLink";

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/pexels-photo-573238-1024x682.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              未来への第一歩、笑顔と共に。
            </h1>
            <p className="mb-5">
              zero2onemysは新しい価値と笑顔を提供するデベロッパーです。
            </p>
            <div>
              <div className="m-2 inline-block">
                <StoreLink />
              </div>
              <div className="m-2 inline-block">
                <StoreLink isAndroid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
