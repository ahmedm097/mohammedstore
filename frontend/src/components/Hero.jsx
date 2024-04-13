import { Link } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";

const Hero = () => {
  return (
    <section className="max-padd-container mx-5">
      <div className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-screen w-full rounded-3xl">
        <div className="relative top-32 xs:top-52">
          <h2 className="h2 capitalize max-w-[40rem]">
            Discover Quality{" "}
            <span className="text-secondary">Products Seamless</span> Shopping
          </h2>
          <p className="text-gray-50 regular-16 my-10 max-w-[33rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure,
            saepe accusamus quaerat cumque vitae, id nobis quam consequuntur
            ullam molestiae illo ad. Iure itaque perferendis expedita soluta
            quisquam exercitationem est vitae quod!
          </p>
          <div className="max-xs:flex-col flex gap-5">
            <Link to={""} className={"btn-dark rounded-full flexCenter"}>
              Shop now
            </Link>
            <Link
              to={""}
              className={
                "text-tertiary bg-white pl-6 rounded-full flexCenter gap-x-8 medium-16 group"
              }
            >
              Offers
              <MdOutlineLocalOffer className="text-xl bg-secondary text-primary rounded-full h-12 w-12 p-3 rotate-90 border border-dashed border-white group-hover:rotate-45 transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
