import POPULAR from "../assets/popular";
import Item from "./Item";

const Popular = () => {
  return (
    <section className="max-padd-container">
      <div className="bg-primary rounded-3xl py-12 xl:py-28">
        <div className="w-[90%] mx-auto">
          <h3 className="h3 font-ace text-secondary">
            Popular{" "}
            <span className="font-ace font-[300] regular-20 text-tertiary">
              Products
            </span>
          </h3>
          {/* container */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {POPULAR.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
