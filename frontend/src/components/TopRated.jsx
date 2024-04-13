import men from "../assets/men.png";
import women from "../assets/women.png";
import kid from "../assets/kid.png";
import ctgBanner from "../assets/ctg-banner.jpg";
import { Link } from "react-router-dom";

const TopRated = () => {
  return (
    <section className="max-padd-container py-14 xl:py-24">
      <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div className="hidden xl:flex ring-1 ring-slate-900/5 rounded-3xl overflow-hidden shadow-sm">
          <div className="">
            <img src={ctgBanner} alt="" className="" />
          </div>
        </div>
        <div>
          <div className="ring-1 ring-slate-900/5 rounded-3xl bg-primary text-white">
            <img src={men} alt="" className="rounded-3xl " />
          </div>
          <div className="px-5">
            <h4 className="medium-18 mt-4">Top Rated Men Collection</h4>
            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, eius? Repellendus.
            </p>
            <Link to={"/mens"} className="bold-15 text-secondary">
              View more..
            </Link>
          </div>
        </div>
        <div>
          <div className="ring-1 ring-slate-900/5 rounded-3xl bg-quaternary text-white">
            <img src={women} alt="" className="rounded-3xl " />
          </div>
          <div className="px-5">
            <h4 className="medium-18 mt-4">Top Rated Women Collection</h4>
            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, eius? Repellendus.
            </p>
            <Link to={"/womens"} className="bold-15 text-secondary">
              View more..
            </Link>
          </div>
        </div>
        <div>
          <div className="ring-1 ring-slate-900/5 rounded-3xl bg-primary text-white">
            <img src={kid} alt="" className="rounded-3xl " />
          </div>
          <div className="px-5">
            <h4 className="medium-18 mt-4">Top Rated Kids Collection</h4>
            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, eius? Repellendus.
            </p>
            <Link to={"/kids"} className="bold-15 text-secondary">
              View more..
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
