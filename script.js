import React, { useMemo, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const menu = [
  { name: "Honey Cinnamon Latte", price: "$5.75", category: "Coffee", note: "Espresso with steamed oat milk, honey, and cinnamon." },
  { name: "Vanilla Cold Brew", price: "$5.25", category: "Coffee", note: "18-hour steeped cold brew with house vanilla cream." },
  { name: "Cardamom Mocha", price: "$6.10", category: "Coffee", note: "Dark chocolate mocha with a subtle cardamom finish." },
  { name: "Matcha Cloud", price: "$5.60", category: "Tea", note: "Ceremonial matcha whisked with sweet cream foam." },
  { name: "Chai Blossom", price: "$5.20", category: "Tea", note: "Fragrant masala chai topped with orange zest." },
  { name: "Berry Hibiscus Iced Tea", price: "$4.85", category: "Tea", note: "Refreshing hibiscus tea, berries, and citrus." },
  { name: "Butter Croissant", price: "$3.80", category: "Bakery", note: "Flaky, buttery layers baked fresh every morning." },
  { name: "Blueberry Scone", price: "$4.10", category: "Bakery", note: "Loaded with blueberries and lemon glaze." },
  { name: "Pistachio Biscotti", price: "$2.95", category: "Bakery", note: "Crunchy Italian-style biscuit, ideal for dipping." }
];

const testimonials = [
  "The cozy vibe and cardamom mocha make this my favorite morning stop.",
  "Their pastries taste handmade, and the baristas are always warm and helpful.",
  "A perfect remote-work café with great coffee and fast Wi-Fi."
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(menu.map((item) => item.category))], []);

  const items = useMemo(
    () => (activeCategory === "All" ? menu : menu.filter((item) => item.category === activeCategory)),
    [activeCategory]
  );

  return (
    React.createElement(React.Fragment, null,
      React.createElement("header", { className: "nav" },
        React.createElement("div", { className: "container nav__inner" },
          React.createElement("div", { className: "brand" }, "Roast ", React.createElement("span", null, "&"), " Bloom"),
          React.createElement("ul", { className: "nav__links" },
            ["Home", "Menu", "About", "Visit"].map((item) =>
              React.createElement("li", { key: item },
                React.createElement("a", { href: `#${item.toLowerCase()}` }, item)
              )
            )
          )
        )
      ),

      React.createElement("main", null,
        React.createElement("section", { className: "hero", id: "home" },
          React.createElement("div", { className: "container hero__grid" },
            React.createElement("div", null,
              React.createElement("h1", null, "Small-Batch Coffee, Big Neighborhood Heart."),
              React.createElement("p", null, "Roast & Bloom is your cozy corner for handcrafted espresso drinks, house-made pastries, and friendly conversation. Every cup is roasted in small batches for rich flavor and smooth balance."),
              React.createElement("div", { className: "hero__actions" },
                React.createElement("button", { className: "btn btn--primary" }, "Order Ahead"),
                React.createElement("button", { className: "btn btn--ghost" }, "Book Catering")
              )
            ),
            React.createElement("div", { className: "hero__card" },
              React.createElement("img", {
                className: "hero__photo",
                src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1300&q=80",
                alt: "Barista pouring latte art in a coffee shop"
              })
            )
          )
        ),

        React.createElement("section", { className: "section", id: "menu" },
          React.createElement("div", { className: "container" },
            React.createElement("h2", null, "Our Signature Menu"),
            React.createElement("p", { className: "section__subtitle" }, "Thoughtfully crafted drinks and bakes for every mood."),
            React.createElement("div", { className: "filters" },
              categories.map((category) =>
                React.createElement("button", {
                  key: category,
                  className: `filter ${activeCategory === category ? "active" : ""}`,
                  onClick: () => setActiveCategory(category)
                }, category)
              )
            ),
            React.createElement("div", { className: "menu-grid" },
              items.map((item) =>
                React.createElement("article", { className: "menu-item", key: item.name },
                  React.createElement("h3", null, item.name),
                  React.createElement("div", { className: "meta" },
                    React.createElement("span", null, item.category),
                    React.createElement("span", null, item.price)
                  ),
                  React.createElement("p", { className: "note" }, item.note)
                )
              )
            )
          )
        ),

        React.createElement("section", { className: "section", id: "about" },
          React.createElement("div", { className: "container about" },
            React.createElement("div", { className: "panel" },
              React.createElement("h2", null, "Brewed with Intention"),
              React.createElement("p", { className: "note" }, "We source ethically traded beans from family-owned farms and roast each batch in-house twice a week. Our mission is simple: quality coffee, welcoming service, and meaningful community connections.")
            ),
            React.createElement("div", { className: "panel" },
              React.createElement("h2", null, "Weekly Highlights"),
              React.createElement("p", { className: "note" }, "• Tuesday Latte Art Class (6:30 PM)"),
              React.createElement("p", { className: "note" }, "• Friday Live Acoustic Session (7:00 PM)"),
              React.createElement("p", { className: "note" }, "• Sunday Brunch Pairings (9:00 AM - 1:00 PM)")
            )
          )
        ),

        React.createElement("section", { className: "section" },
          React.createElement("div", { className: "container testimonials" },
            testimonials.map((quote) =>
              React.createElement("blockquote", { className: "panel", key: quote }, quote)
            )
          )
        ),

        React.createElement("section", { className: "section", id: "visit" },
          React.createElement("div", { className: "container contact" },
            React.createElement("div", { className: "panel" },
              React.createElement("h2", null, "Visit Us"),
              React.createElement("p", { className: "note" }, "142 Maple Street, Seattle, WA 98101"),
              React.createElement("p", { className: "note" }, "Mon-Fri: 6:30 AM - 8:00 PM"),
              React.createElement("p", { className: "note" }, "Sat-Sun: 7:30 AM - 9:00 PM")
            ),
            React.createElement("div", { className: "panel" },
              React.createElement("h2", null, "Get in Touch"),
              React.createElement("p", { className: "note" }, "Phone: (206) 555-0148"),
              React.createElement("p", { className: "note" }, "Email: hello@roastandbloom.com"),
              React.createElement("p", { className: "note" }, "Instagram: @roastandbloom")
            )
          )
        )
      ),

      React.createElement("footer", { className: "footer" },
        React.createElement("div", { className: "container" }, "© ", new Date().getFullYear(), " Roast & Bloom Coffee. Made with love and espresso.")
      )
    )
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
