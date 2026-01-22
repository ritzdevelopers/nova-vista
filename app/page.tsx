import Header from "./_components/header/Header";
import HomePage from "./_components/home/Home";
export default function Home() {
  return (
    <div>
      {/* Header component  */}
      <Header />
      {/* Home component - padding for fixed header */}
      <div className="pt-[72px] md:pt-[121px]">
        <HomePage />
      </div>
    </div>
  );
}
